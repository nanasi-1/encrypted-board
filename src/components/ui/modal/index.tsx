'use client'

import { Icones, CloseIcon } from '../icons'
import styles from './index.module.css'
import { useModalContext } from './context'

export function ModalUI({ children, dialogRef }: {
  children?: React.ReactNode
  dialogRef?: React.RefObject<HTMLDialogElement | null>
}) {
  const closeModal = () => dialogRef?.current?.close()

  // TODO align-centerをどうするか考える
  return (
    <dialog ref={dialogRef}>
      <div className={styles['overlay']} onClick={closeModal}>
        {/* stopPropagation: コンテンツをクリックするとモーダルが閉じるのを防止 */}
        <div className={styles['wrapper']} onClick={e => e.stopPropagation()}>
          <button className={styles['close-button']} onClick={closeModal}>
            <Icones Icon={CloseIcon} fontSize={24} />
          </button>
          {children}
        </div>
      </div>
    </dialog>
  )
}

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
