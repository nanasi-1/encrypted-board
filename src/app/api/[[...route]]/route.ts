import app from "@/api";
import { handle } from "hono/vercel";

// @see https://hono.dev/docs/getting-started/vercel#node-js

export const GET = handle(app)
export const POST = handle(app)
export const PUT = handle(app)
export const DELETE = handle(app)