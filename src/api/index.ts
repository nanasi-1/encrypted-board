import { Hono } from "hono";
import { logger } from "hono/logger";

const app = new Hono().basePath('/api')
  .use(logger())
  .get('/', c => {
    return c.json({
      message: 'Hello World!'
    })
  })

export type AppType = typeof app
export default app