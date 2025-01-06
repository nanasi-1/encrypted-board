import client from "@/api/lib/prisma-client";
import type { PostData, PostSignData } from "@/types";
import { Prisma } from "@prisma/client";

export async function countAllPost(args?: Prisma.PostCountArgs) {
  const count = await client.post.count(args)
  return count
}

/** 
 * 全ての投稿を取得する   
 * **`take`の指定し忘れ**に注意
 */
export async function getAllPosts(args: Prisma.PostFindManyArgs): Promise<PostData[]> {
  const postsByDB = await client.post.findMany({
    select: {
      id: true,
      encrypted_body: true,
      public_key_digest: true,
      verify_key_digest: true,
      created_at: true,
      ip_address: false,
    },
    ...args
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

  return posts
}