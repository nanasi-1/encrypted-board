import { Hono } from "hono";
import { getAllPosts } from "./database";

const app = new Hono()
  .get('/', async c => {
    return c.json(await getAllPosts(1))
  })
  .post('/', c => {
    return c.json({
      message: '投稿APIは準備中です'
    })
  })

export default app