import { AppType } from "@/api";
import { CustomError, unknownError } from "@/api/lib/errors";
import { PostData, PostRequestBody, PostsAPIResponse } from "@/types";
import { hc } from "hono/client";

const client = hc<AppType>(
  process.env['API_ENDPOINT'] ?? 'http://localhost:3000/api'
)

function isContentTypeJson(res: Response) {
  return res.headers.get('Content-Type') === 'application/json'
}

const unknownErrorDummy = {
  result: unknownError,
  response: new Response(JSON.stringify(unknownError), { status: 500 })
} as const

/**
 * 暗号一覧を取得する
 * @example
 * const { result } = await getAllPosts(3)
 * console.log(result)
 */
export async function getAllPosts(page: number = 1) {
  const response = await client.posts.$get({ query: { page } })

  if (!isContentTypeJson(response)) {
    console.error('Response is not JSON:', await response.text())
    return unknownErrorDummy
  }

  const result: PostsAPIResponse | CustomError = await response.json()
  return { response, result }
}

/**
 * 暗号を投稿する
 * @example
 * const { response, result } = await createPost({
 *   plainText: 'いい加減疲れた',
 *   publicKey: await exportPublicKey((await generateEncryptKey()).publicKey),
 *   sign: { has: false }
 * })
 * console.log(result)
 */
export async function createPost(post: PostRequestBody) {
  const response = await client.posts.$post({ json: post })

  if (!isContentTypeJson(response)) {
    console.error('Response is not JSON:', await response.text())
    return unknownErrorDummy
  }

  const result: CreatePostResponse = await response.json()
  return { response, result }
}

export type CreatePostResponse = ({
  status: 200,
  post: PostData
  message: string
} | CustomError)