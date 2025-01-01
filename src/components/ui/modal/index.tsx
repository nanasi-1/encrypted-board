'use client'

import { useState } from 'react'
import { Icones, CloseIcon } from '../icons'
import styles from './index.module.css'

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
  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  const modal = isOpen ? (
    <ModalUI onClose={close}>{children}</ModalUI>
  ) : null

  return { modal, open, close }
}
