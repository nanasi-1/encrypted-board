'use client'

import { useModalContext } from './context'

// モーダルを制御する関数付きフック
// TODO 複数のモーダルが一度に開かれた時どうするか考える
export function useModal(children?: React.ReactNode) {
  const { setModalComponent, dialogRef } = useModalContext()

  const open = () => {
    setModalComponent(children)
    dialogRef.current?.showModal()
  }

  const close = () => dialogRef.current?.close()
  return { open, close } // 基本はopenのみを使う
}
