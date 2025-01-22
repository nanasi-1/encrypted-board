import { CustomErrorInit, createGetError } from "@/api/lib/errors"

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

export const getPostError = createGetError(postErrors)