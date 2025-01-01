'use client'

import { useState } from 'react'
import { Icones, CloseIcon } from '../icons'
import styles from './index.module.css'
import { useModalContext } from './context'

export function ModalUI({ children, onClose }: {
  children?: React.ReactNode
  onClose?: () => void
}) {
  // TODO align-centerをどうするか考える
  return (
    <div className={styles['bg']} onClick={onClose}>
      {/* stopPropagation: コンテンツをクリックするとモーダルが閉じるのを防止 */}
      <div className={styles['wrapper']} onClick={e => e.stopPropagation()}>
        <button className={styles['close-button']} onClick={onClose}>
          <Icones Icon={CloseIcon} fontSize={20} />
        </button>
        {children}
      </div>
    </div>
  )
}

// モーダルを制御する関数付きフック
// TODO 複数のモーダルが一度に開かれた時どうするか考える
export function useModal(children?: React.ReactNode) {
  const [isOpen, setIsOpen] = useState(false)
  const { setModalComponent } = useModalContext()

  const close = () => {
    setModalComponent(null)
    setIsOpen(false)
  }
  const open = () => {
    const modal = <ModalUI onClose={close}>{children}</ModalUI>
    setModalComponent(modal)
    setIsOpen(true)
  }

  return { open, close, isOpen } // 基本はopenのみを使う
}

// useNewModalするダミーのコンポーネント
export function DummyUseModal() {
  const { open, isOpen } = useModal(<div>This is dummy modal</div>)
  // @ts-ignore
  window.openModal = open
  return (
    <div>
      <button onClick={open}>open</button>
      status: {isOpen ? 'open' : 'close'}
    </div>
  )
}
