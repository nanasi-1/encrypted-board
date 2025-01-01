'use client'

import { useState } from 'react'
import { Icones, CloseIcon } from '../icons'
import styles from './index.module.css'

// クライアントコンポーネント
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

// クライアントで呼び出す
export function useModal() {
  const [isShow, setIsShow] = useState(false)
  const show = () => setIsShow(true)
  const hide = () => setIsShow(false)

  const modal = isShow ? (
    <ModalUI onClose={hide}>
      Hello World!
    </ModalUI>
  ) : null

  return { modal, show, hide }
}

// モーダルが開く時は何らかのユーザーアクションがある
// -> これはクライアントコンポーネントで問題ない...はず
export function DummyModal() {
  const { modal, show } = useModal()

  return (
    <div>
      <button onClick={show}>open</button>
      {modal}
    </div>
  )
}