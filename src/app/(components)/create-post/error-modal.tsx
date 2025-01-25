'use client'

import { CustomError } from "@/api/lib/errors"
import { UnknownError } from "@/components/ui/modal/components"
import { ErrorModal } from "@/components/ui/modal/error-modal"

// 基本的なエラーはこの関数から開ける
export function openErrorWithCode(error: CustomError, openModal: (c: React.ReactNode) => void) {
  const code = error.code
  if (code === 'LimitOver') {
    openModal(<LimitOver message={error.message} />)
    return
  }
  if (code === 'VerifyFailed') {
    openModal(<FailedVerify message={error.message} />)
    return
  }
  if (code === 'VerifyKeyIsNotFound') {
    // 面倒だった
    openModal(<InvalidKey message={error.message} />)
    return
  }
  if (code === 'InvalidKey') {
    openModal(<InvalidKey message={error.message} />)
    return
  }
  if (code === 'UnknownError') {
    openModal(<UnknownError>{error.message}</UnknownError>)
    return
  }

  // それ以外はすべてUnknownErrorとして扱う
  openModal(<UnknownError>{error.message}</UnknownError>)
}

export function ValidationError() {
  return (
    <p>入力された値が無効です</p>
  )
}

function LimitOver({ message }: { message: React.ReactNode }) {
  return (
    <ErrorModal
      title="OVER LIMIT!"
      label="制限を超過しました"
      message={message}
    ></ErrorModal>
  )
}

function FailedVerify({ message }: { message: React.ReactNode }) {
  return (
    <ErrorModal
      title="FAILED VERIFY!"
      label="アクセスが拒否されました"
      message={message}
    ></ErrorModal>
  )
}

function InvalidKey({ message }: { message: React.ReactNode }) {
  return (
    <ErrorModal
      title="ENCRYPTION ERROR!"
      label="鍵が不正です"
      message={message}
    ></ErrorModal>
  )
}