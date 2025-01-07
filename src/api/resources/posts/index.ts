import { Hono } from "hono";
import { getPostsByPage } from "./features/get-all";
import { parsePostQuery } from "./scheme";

const app = new Hono()
  .get('/', async c => {
    const { page } = parsePostQuery(c.req.query())
    return c.json(await getPostsByPage(page))
  })
  .post('/', c => {
    return c.json({
      message: '投稿APIは準備中です'
    })
  })

export default app