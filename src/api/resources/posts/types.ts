import { PostData } from "@/types"

export type CreatePostInput = Omit<PostData, 'createdAt'> & {
  readonly ipAddress: string
}