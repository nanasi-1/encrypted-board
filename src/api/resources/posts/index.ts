import { Hono } from "hono";
import { getPostsByPage } from "./features/get-all";
import { parsePostBody, parsePostQuery } from "./scheme";
import { createPost } from "./features/create";
import { getPostError, unknownError } from "./features/errors";

import { getConnInfo } from "hono/vercel"; // 本番

const app = new Hono()
  .get('/', async c => {
    const { page } = parsePostQuery(c.req.query())
    return c.json(await getPostsByPage(page))
  })
  .post('/', async c => {
    const { remote: { address } } = !!process.env.VERCEL_ENV
      ? getConnInfo(c)
      : process.env['RUNTIME'] === 'Next.js'
        ? { remote: { address: 'DEFAULT_IP' } }
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
        ipAddress: address ?? 'DEFAULT_IP'
      })
      return c.json({
        status: 200,
        message: '正常に投稿が完了しました',
        post: posted
      })
    } catch (error) {
      // Error型以外
      if (!(error instanceof Error)) {
        console.error(error)
        c.status(unknownError.status)
        return c.json(unknownError)
      }

      const displayError = getPostError(error.message)
      if (!displayError) {
        // どれにも当てはまらない
        console.error(error)
        c.status(unknownError.status)
        return c.json(unknownError)
      }
      c.status(displayError.status)
      return c.json(displayError)
    }
  })

export default app