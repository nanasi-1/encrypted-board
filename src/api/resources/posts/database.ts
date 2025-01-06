import client from "@/api/lib/prisma-client";
import type { PostData, PostSignData } from "@/types";

export async function getAllPosts(page: number): Promise<PostData[]> {
  const ONE_PAGE_POSTS = 15

  const posts = await client.post.findMany({
    select: {
      id: true,
      encrypted_body: true,
      public_key_digest: true,
      verify_key_digest: true,
      created_at: true,
      ip_address: false,
    },
    skip: ONE_PAGE_POSTS * (page - 1),
    take: ONE_PAGE_POSTS
  })

  return posts.map(db => {
    const sign: PostSignData = db.verify_key_digest
      ? { has: true, verifyKey: db.verify_key_digest }
      : { has: false }

    return {
      id: Number(db.id),
      body: db.encrypted_body,
      publicKeyDigest: db.public_key_digest,
      createdAt: db.created_at.toISOString(),
      sign
    } satisfies PostData
  })
}