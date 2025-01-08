import { verify } from "@/lib/sign";
import { countPostFromIp, createPost as addPostToDB } from "../database";
import { CreatePostRequired } from "../types";
import { PostData, PostRequestSign, PostSignData } from "@/types";

export async function createPost(post: CreatePostRequired) {
  if (post.sign.has) {
    const ok = await verifySign(post.plainText, post.sign)
    if (!ok) {
      throw new Error('FailedVerify')
    }
  }

  const createdAt = new Date()
  if (await checkIpLimit(post.ipAddress, createdAt)) {
    throw new Error('LimitOver')
  }

  // 暗号化
  const cipher = post.plainText
  const publicKeyDigest = post.publicKey // ハッシュを計算

  const sign: PostSignData = post.sign.has
    ? { has: true, verifyKey: post.sign.signKeyDigest }
    : { has: false }

  const result = await addPostToDB({
    body: cipher,
    createdAt,
    publicKeyDigest,
    ipAddress: post.ipAddress,
    sign
  })

  return {
    id: Number(result.id),
    body: result.encrypted_body,
    publicKeyDigest: result.public_key_digest,
    createdAt: result.created_at.toUTCString(),
    sign: result.verify_key_digest ? {
      has: true,
      verifyKey: result.verify_key_digest
    } : { has: false }
  } satisfies PostData
}

async function checkIpLimit(ipAddress: string, createdAt: Date) {
  const ONE_DAY_POST_LIMIT = 60

  // 過去24時間に投稿された暗号を数える
  const yesterday = new Date(createdAt)
  yesterday.setDate(createdAt.getDate() - 1)
  const count = await countPostFromIp(ipAddress, yesterday)

  if (count >= ONE_DAY_POST_LIMIT) {
    return false
  } else {
    return true
  }
}

async function verifySign(plainText: string, sign: Exclude<PostRequestSign, { has: false }>) {
  const verifyKey: CryptoKey = sign.signKeyDigest as any // 検証鍵をDBから取得する
  const ok = await verify(plainText, sign.signature, verifyKey)
  return ok
}