import { Hono } from "hono";
import { logger } from "hono/logger";
import routes from './routes'

const app = new Hono().basePath('/api')
  .use(logger())
  .route('/', routes)

export type AppType = typeof app
export default app