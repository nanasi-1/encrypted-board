import { Hono } from "hono";

// routers
import postsRouter from "./posts";

const app = new Hono()
  .route('/posts', postsRouter)

export default app