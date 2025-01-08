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

    const posted = await createPost(post)
    return c.json({
      message: '正常に投稿が完了しました',
      post: posted
    })
  })

export default app