import { countPostFromIp, createPost as addPostToDB } from "../database";
import { verify } from "@/lib/sign";
import { encrypt } from "@/lib/encrypt";
import { importPublicKey } from "@/lib/import-export-key";
import { MODULUS_LENGTH } from "@/lib/generate-key";
import { calcDigest } from "@/lib/digest";
import type { PostData, PostRequestSign } from "@/types";
import type { CreatePostRequired } from "../types";

export async function createPost(post: CreatePostRequired): Promise<PostData> {
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
  const { cipher, publicKeyDigest } = await calcCipherAndDigest(post.plainText, post.publicKey)

  const result = await addPostToDB({
    body: cipher,
    createdAt,
    publicKeyDigest,
    ipAddress: post.ipAddress,
    sign: post.sign.has
      ? { has: true, verifyKey: post.sign.signKeyDigest }
      : { has: false }
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

/** 
 * 過去24時間に投稿された暗号が制限を超えていないかチェック 
 * @returns trueなら制限超過
 */
async function checkIpLimit(ipAddress: string, createdAt: Date) {
  const ONE_DAY_POST_LIMIT = 60

  const yesterday = new Date(createdAt)
  yesterday.setDate(createdAt.getDate() - 1)
  const count = await countPostFromIp(ipAddress, yesterday)

  return count >= ONE_DAY_POST_LIMIT
}

async function verifySign(plainText: string, sign: Exclude<PostRequestSign, { has: false }>) {
  // 認証は未実装
  throw new Error('VerifyKeyIsNotFound')

  const verifyKey: CryptoKey = sign.signKeyDigest as any // 検証鍵をDBから取得する
  if (!verifyKey) throw new Error('VerifyKeyIsNotFound')

  const ok = await verify(plainText, sign.signature, verifyKey)
  return ok
}

async function calcCipherAndDigest(plainText: string, publicKeyStr: string) {
  try {
    const publixKey = await importPublicKey(publicKeyStr, false)
    if (
      publixKey.algorithm.name !== 'RSA-OAEP' ||
      (publixKey.algorithm as RsaKeyAlgorithm)?.modulusLength !== MODULUS_LENGTH
    ) {
      throw new Error('InvalidKey')
    }

    const cipher = await encrypt(plainText, publixKey)
    const publicKeyDigest = await calcDigest(publicKeyStr)
  
    return {
      cipher,
      publicKeyDigest
    }
  } catch (error) {
    // エラーは全てInvalidKeyということにしとく
    throw new Error('InvalidKey')
  }
}