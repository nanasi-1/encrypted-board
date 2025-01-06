import { Hono } from "hono";
import { logger } from "hono/logger";

const app = new Hono().basePath('/api')
  .use(logger())

export type AppType = typeof app
export default app