import { Hono } from "hono";
import { logger } from "hono/logger";
import routes from './routes'

const app = new Hono({ 
  strict: false // 最後の/を区別しない @see https://hono.dev/docs/api/hono#strict-mode
}).basePath('/api')
  .use(logger())
  .route('/', routes)

export type AppType = typeof app
export default app