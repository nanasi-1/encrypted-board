import { Hono } from "hono";

const app = new Hono().basePath('/api')

export type AppType = typeof app
export default app