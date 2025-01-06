import client from "@/api/lib/prisma-client";
import type { PostData, PostSignData, PostsAPIResponse } from "@/types";
import { Prisma } from "@prisma/client";

const ONE_PAGE_POSTS = 15

async function countPostPage(where?: Prisma.PostWhereInput) {
  const count = await client.post.count({ where })
  return Math.ceil(count / ONE_PAGE_POSTS)
}

export async function getAllPosts(page: number): Promise<PostsAPIResponse> {
  const postsByDB = await client.post.findMany({
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

  const posts = postsByDB.map(db => {
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

  // テストしてない
  const hasNext = posts.length >= ONE_PAGE_POSTS
    ? await countPostPage() >= page
    : false

  return { posts, hasNext }
}