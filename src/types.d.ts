export interface PostData {
  id: number
  createdAt: string // 日付を使った処理いらないしこれでいいや
  body: string
  publicKeyDigest: string
  sign: PostSignData
}

export type PostRequestBody = readonly {
  plainText: string
  publicKey: string
  signKey: string
}

export type PostSignData = {
  has: false
} | {
  has: true
  signKeyDigest: string
}