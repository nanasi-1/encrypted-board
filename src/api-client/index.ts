import { AppType } from "@/api";
import { PostData, PostRequestBody } from "@/types";
import { ClientResponse, hc } from "hono/client";

const client = hc<AppType>(
  process.env['API_ENDPOINT'] ?? 'http://localhost:3000'
).api

/**
 * 暗号一覧を取得する
 */
async function getAllPost() {
  
}

/**
 * 暗号を投稿する
 * @example
 * const { res, body } = await createPost({
 *   plainText: 'いい加減疲れた',
 *   publicKey: await exportPublicKey((await generateEncryptKey()).publicKey),
 *   sign: { has: false }
 * })
 * console.log(body)
 */
export async function createPost(post: PostRequestBody): Promise<{
  res: ClientResponse<CreatePostResponse>,
  body: CreatePostResponse
}> {
  const res = await client.posts.$post({ json: post })
  const body = await res.json() // きっとJSON形式なはず...
  return { res, body }
}

export type CreatePostResponse = {
  message: string
} & ({ 
  status: 200, 
  post: PostData
} | {
  [key: string]: any
})