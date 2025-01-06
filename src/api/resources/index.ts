import { Hono } from "hono";

// routers
import indexRouter from './root'
import postsRouter from "./posts";

const app = new Hono()
  .route('/', indexRouter)
  .route('/posts', postsRouter)

export default app