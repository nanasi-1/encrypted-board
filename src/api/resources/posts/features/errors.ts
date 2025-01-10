import { StatusCode } from "hono/utils/http-status"

export type CustomError = Readonly<{
  code: string,
  status: StatusCode,
  message: string
}>

type CustomErrorInit = Readonly<{
  names: string[]
  message: string,
  status?: StatusCode
}>

const postErrors: readonly CustomErrorInit[] = [
  {
    names: ['LimitOver'],
    message: '過去24時間の投稿数の制限を超しました。投稿は一日に60回までです。'
  },
  {
    names: ['FailedVerify', 'VerifyKeyIsNotFound'],
    status: 401,
    message: '署名機能は現在未実装です'
  },
  {
    names: ['InvalidKey'],
    status: 400,
    message: '鍵が不正です'
  }
]

export const unknownError = {
  code: 'UnknownError',
  status: 500,
  message: '予期せぬエラーが発生しました'
} as const satisfies CustomError

export function getPostError(code: string) {
  const error = postErrors.find(e => e.names.includes(code))
  if (!error) return null

  return {
    code,
    status: error.status ?? 400,
    message: error.message
  } satisfies  CustomError
}