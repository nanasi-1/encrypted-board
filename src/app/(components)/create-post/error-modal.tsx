'use client'

import { CustomError } from "@/api/lib/errors"
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

// エラーの「詳細」の表示
function Details({ title, children }: { 
  title?: React.ReactNode,
  children: React.ReactNode 
}) {
  return (
    <div>
      <h3 className="font-bold mb-3">{title ?? "詳細"}</h3>
      <div className="border-red-600 border px-3 py-2">{children}</div>
    </div>
  )
}

export function ValidationError() {
  return (
    <p>入力された値が無効です</p>
  )
}

export function UnknownError({ children }: { children: React.ReactNode }) {
  return (
    <ErrorModal
      title="UNKNOWN ERROR!!"
      label="不明なエラー"
      message="予期せぬエラーが発生しました。"
    >
      <Details>{children}</Details>
      <hr className="border-red-600 mt-6 mb-4" />
      <p>
        未解決のエラーが発生しました。<br />
        このエラーを修正するため、
        <a className="text-secondary-400" href="https://github.com/nanasi-1/encrypted-board">GitHub</a>
        での貢献をご検討ください。<br />
      </p>
    </ErrorModal>
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