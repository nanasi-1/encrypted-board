export interface PostData {
  readonly id: number
  readonly createdAt: string // 日付を使った処理いらないしこれでいいや
  readonly body: string
  readonly publicKeyDigest: string
  readonly sign: PostSignData
}

export interface PostsAPIResponse {
  posts: PostData[],
  hasNext: boolean
}

export interface PostFormData {
  readonly plainText: string
  readonly publicKey: string
  readonly signKey: string
}

export type PostRequestBody = {
  readonly plainText: string
  readonly publicKey: string
  readonly sign: {
    readonly has: false
  } | {
    readonly has: true
    readonly signKeyDigest: string
    readonly signature: string
  }
}

export type PostSignData = {
  readonly has: false
} | {
  readonly has: true
  readonly verifyKey: string
}