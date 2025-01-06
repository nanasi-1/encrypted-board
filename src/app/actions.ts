'use server'
import { PostData } from "@/types"
import { PrismaClient } from "@prisma/client"

export async function getFirstPost(): Promise<PostData> {
  const client = new PrismaClient()
  const postByDB = await client.post.findFirst()
  return {
    id: Number(postByDB!.id),
    body: postByDB!.encrypted_body,
    publicKeyDigest: postByDB!.public_key_digest,
    createdAt: postByDB!.created_at.toString(),
    sign: {
      has: !!postByDB!.verify_key_digest,
      verifyKey: postByDB!.verify_key_digest as string
    }
  }
}