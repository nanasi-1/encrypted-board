import { AppType } from "@/api";
import { PostData, PostRequestBody, PostsAPIResponse } from "@/types";
import { hc } from "hono/client";

const client = hc<AppType>(
  process.env['API_ENDPOINT'] ?? 'http://localhost:3000/api'
)

/**
 * 暗号一覧を取得する
 * @example
 * const { result } = await getAllPosts(3)
 * console.log(result)
 */
export async function getAllPosts(page: number = 1) {
  const response = await client.posts.$get({ query: { page } })
  // const result: PostsAPIResponse = await response.json() // きっとJSON形式なはず...
  const result: PostsAPIResponse = await response.json()
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
  const result: CreatePostResponse = await response.json() // きっとJSON形式なはず...
  return { response, result }
}

export type CreatePostResponse = {
  message: string
} & ({ 
  status: 200, 
  post: PostData
} | {
  [key: string]: any
})