import { Hono } from "hono";
import { getPostsByPage } from "./features/get-all";

const app = new Hono()
  .get('/', async c => {
    const rawPage = c.req.query('page')
    // ここにpageのバリデーション
    const page = rawPage ? parseInt(rawPage) : 1
    return c.json(await getPostsByPage(page))
  })
  .post('/', c => {
    return c.json({
      message: '投稿APIは準備中です'
    })
  })

export default app