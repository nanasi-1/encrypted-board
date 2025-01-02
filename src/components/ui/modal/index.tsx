'use client'

import { useRef, useState } from 'react'
import { Icones, CloseIcon } from '../icons'
import styles from './index.module.css'
import { useModalContext } from './context'

export function ModalUI({ children, onClose, dialogRef }: {
  children?: React.ReactNode
  dialogRef?: React.RefObject<HTMLDialogElement | null>
  onClose?: () => void
}) {
  const closeModal = () => {
    console.log('click')
    console.log(dialogRef?.current)
    dialogRef?.current?.close()
    onClose?.()
  }

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
  const [isOpen, setIsOpen] = useState(false)
  const { setModalComponent, dialogRef } = useModalContext()

  const close = () => {
    console.log('close modal')
  }
  const open = () => {
    console.log('open modal')
    setModalComponent(children)
    console.log(dialogRef.current)
    dialogRef.current?.showModal()
  }

  return { open, close } // 基本はopenのみを使う
}
