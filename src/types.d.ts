export interface PostData {
  readonly id: number
  readonly createdAt: string // 日付を使った処理いらないしこれでいいや
  readonly body: string
  readonly publicKeyDigest: string
  readonly sign: PostSignData
}

export interface PostsAPIResponse {
  readonly posts: PostData[],
  readonly hasNext: boolean
}

export interface PostFormData {
  readonly plainText: string
  readonly publicKey: string
  readonly signKey: string
}

export type PostRequestBody = {
  readonly body: string
  readonly publicKeyDigest: string
  readonly sign: PostRequestSign
}

export type PostRequestSign =  {
  readonly has: false
} | {
  readonly has: true
  readonly signKeyDigest: string
  readonly signature: string
}

export type PostSignData = {
  readonly has: false
} | {
  readonly has: true
  readonly verifyKey: string
}