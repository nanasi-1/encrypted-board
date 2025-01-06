import { Hono } from "hono";

const app = new Hono()
  .all('/', c => {
    return c.json({
      message: '暗号掲示板のAPIへようこそ！',
      documentUrl: 'https://github.com/nanasi-1/encrypted-board/blob/main/docs/api-endpoint.md'
    })
  })

export default app