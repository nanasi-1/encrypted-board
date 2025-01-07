import { verify } from "@/lib/sign";
import { countPostFromIp, createPost as addPostToDB } from "../database";
import { CreatePostRequired } from "../types";
import { PostRequestSign, PostSignData } from "@/types";

export async function createPost(post: CreatePostRequired) {
  if (post.sign.has) {
    const ok = await verifySign(post.plainText, post.sign)
    if (!ok) {
      throw new Error('FailedVerify')
    }
  }

  const createdAt = new Date()
  await checkIpLimit(post.ipAddress, createdAt)

  // 暗号化
  const cipher = post.plainText
  const publicKeyDigest = post.publicKey // ハッシュを計算

  const sign: PostSignData = post.sign.has
    ? { has: true, verifyKey: post.sign.signKeyDigest }
    : { has: false }

  await addPostToDB({
    body: cipher,
    createdAt,
    publicKeyDigest,
    ipAddress: post.ipAddress,
    sign
  })
}

async function checkIpLimit(ipAddress: string, createdAt: Date) {
  const ONE_DAY_POST_LIMIT = 60

  // 過去24時間に投稿された暗号を数える
  const yesterday = new Date(createdAt)
  yesterday.setDate(createdAt.getDate() - 1)
  const count = await countPostFromIp(ipAddress, yesterday)

  if (count >= ONE_DAY_POST_LIMIT) {
    throw new Error('LimitOver')
  }
}

async function verifySign(plainText: string, sign: Exclude<PostRequestSign, { has: false }>) {
  const verifyKey: CryptoKey = sign.signKeyDigest as any // 検証鍵をDBから取得する
  const ok = await verify(plainText, sign.signature, verifyKey)
  return ok
}