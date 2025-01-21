import { Hono } from "hono";
import { logger } from "hono/logger";
import routes from './resources'
import { unknownError } from "./resources/posts/features/errors";

const app = new Hono({ 
  strict: false // 最後の/を区別しない @see https://hono.dev/docs/api/hono#strict-mode
}).basePath('/api')
  .use(logger())
  .route('/', routes)
  .notFound(c => {
    c.status(404)
    return c.json({ status: 404, message: 'Not Found' })
  })
  .onError((error, c) => {
    console.log('Unhandled Error:', error)
    return c.json(unknownError) // 便利だし使っちゃおう
  })

export type AppType = typeof routes
export default app