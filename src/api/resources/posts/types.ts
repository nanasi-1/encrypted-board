import { PostData, PostRequestBody } from "@/types"

export type CreatePostRequired = PostRequestBody & {
  readonly ipAddress: string
}

export type CreatePostInput = Omit<PostData, 'createdAt' | 'id'> & {
  readonly ipAddress: string
  readonly createdAt: Date
}