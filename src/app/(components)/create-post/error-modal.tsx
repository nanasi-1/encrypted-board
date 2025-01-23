'use client'

// 基本的なエラーはこの関数から開ける
export function openErrorModal(code: string, openModal: (c: React.ReactNode) => void) {
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
    openModal('unknown')
    return
  }
}

export function ValidationError() {
  return (
    <p>入力された値が無効です</p>
  )
}