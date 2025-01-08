import { Hono } from "hono";
import { getPostsByPage } from "./features/get-all";
import { parsePostQuery } from "./scheme";
import { createPost } from "./features/create";
import type { CreatePostRequired } from "./types";

import { getConnInfo } from "hono/vercel"; // 本番

const app = new Hono()
  .get('/', async c => {
    const { page } = parsePostQuery(c.req.query())
    return c.json(await getPostsByPage(page))
  })
  .post('/', async c => {
    const { remote: { address } } = !!process.env.VERCEL_ENV
     ? getConnInfo(c)
     // 普通にインポートするとビルドエラーになるので対策
     : (await import('hono/bun')).getConnInfo(c)
     
    const body = await c.req.json()

    const post: CreatePostRequired = {
      ...body,
      ipAddress: address ?? '' // マイグレートめんどいから空文字になった
    }

    try {
      const posted = await createPost(post)
      return c.json({
        message: '正常に投稿が完了しました',
        post: posted
      })
    } catch (error) {
      // Error型以外
      if (!(error instanceof Error)) {
        console.error(error)
        c.status(500)
        return c.json({
          message: '予期せぬエラーが発生しました'
        })
      }

      // LimitOver: 投稿数の制限を超えた
      if (error.message === 'LimitOver') {
        c.status(400)
        return c.json({
          message: '過去24時間の投稿数の制限を超しました。投稿は一日に60回までです。',
          ipAddress: address
        })
      }

      // FailedVerify: 署名の検証に失敗した
      if(error.message === 'FailedVerify' || error.message === 'VerifyKeyIsNotFound') {
        c.status(401)
        return c.json({
          message: '署名の検証に失敗しました'
        })
      }

      // どれにも当てはまらない
      console.error(error)
      c.status(500)
      return c.json({
        message: '予期せぬエラーが発生しました'
      })
    }
  })

export default app