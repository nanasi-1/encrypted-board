import { Hono } from "hono";
import { getPostsByPage } from "./features/get-all";

const app = new Hono()
  .get('/', async c => {
    return c.json(await getPostsByPage(1))
  })
  .post('/', c => {
    return c.json({
      message: '投稿APIは準備中です'
    })
  })

export default app