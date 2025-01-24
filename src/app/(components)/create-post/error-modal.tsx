'use client'

import { CustomError } from "@/api/lib/errors"
import { ErrorModal } from "@/components/ui/modal/error-modal"

// 基本的なエラーはこの関数から開ける
export function openErrorWithCode(error: CustomError, openModal: (c: React.ReactNode) => void) {
  const code = error.code
  if (code === 'LimitOver') {
    openModal('limit')
    return
  }
  if (code === 'VerifyFailed') {
    openModal('verify')
    return
  }
  if (code === 'VerifyKeyIsNotFound') {
    openModal('notfound')
    return
  }
  if (code === 'InvalidKey') {
    openModal('Base64なのに...')
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

export function UnknownError({ children }: { children: React.ReactNode }) {
  return (
    <ErrorModal
      title="UNKNOWN ERROR!!"
      label="不明なエラー"
      message="予期せぬエラーが発生しました。"
    >
      <div>
        <h3 className="font-bold mb-3">詳細</h3>
        <div className="border-red-600 border px-3 py-2">{children}</div>
      </div>
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