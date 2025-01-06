import { Hono } from "hono";

const app = new Hono()
  .get('/', c => {
    return c.json({
      message: '投稿APIは準備中です'
    })
  })

export default app