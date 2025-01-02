'use client'

import { useModalContext } from './context'
import ModalUI from './ModalUI'

// モーダルを制御する関数付きフック
// TODO 複数のモーダルが一度に開かれた時どうするか考える
export function useModal() {
  const { setModalComponent, dialogRef } = useModalContext()

  const open = (children: React.ReactNode) => {
    setModalComponent(<ModalUI onClose={close}>{children}</ModalUI>)
    dialogRef.current?.showModal()
  }

  const close = () => dialogRef.current?.close()

  return { open, close } // 基本はopenのみを使う
}
