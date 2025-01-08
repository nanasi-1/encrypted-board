// @ts-nocheck ビルドエラー回避、後で消す

import { Hono } from "hono";
import { getPostsByPage } from "./features/get-all";
import { parsePostBody, parsePostQuery } from "./scheme";
import { createPost } from "./features/create";

import { getConnInfo } from "hono/vercel"; // 本番

const app = new Hono()
  .get('/', async c => {
    const { page } = parsePostQuery(c.req.query())
    return c.json(await getPostsByPage(page))
  })
  .post('/', async c => {
    c.status(400)
    return c.json({
      message: '投稿APIは現在準備中です'
    })

    const { remote: { address } } = !!process.env.VERCEL_ENV
      ? getConnInfo(c)
      // 普通にインポートするとビルドエラーになるので対策
      : (await import('hono/bun')).getConnInfo(c)

    const parseResult = parsePostBody(await c.req.text())
    if (!parseResult.success) {
      c.status(400)
      return c.json(parseResult.error)
    }

    try {
      const posted = await createPost({
        ...parseResult.data,
        ipAddress: address ?? '' // マイグレートめんどいから空文字になった
      })
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
      if (error.message === 'FailedVerify' || error.message === 'VerifyKeyIsNotFound') {
        c.status(401)
        return c.json({
          // message: '署名の検証に失敗しました' // TODO 署名を実装したら修正
          message: '署名機能は現在未実装です'
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