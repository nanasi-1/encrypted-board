'use client'

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
      <div className={styles['wrapper']}>
        <button className={styles['close-button']} onClick={onClose}>
          <Icones Icon={CloseIcon} fontSize={20} />
        </button>
        {children}
      </div>
    </div>
  )
}

// クライアントで呼び出す
export function createModal() {
  const modal = (
    <ModalUI onClose={() => console.log('close')}>
      Hello World!
    </ModalUI>
  )
  return { modal }
}

// モーダルが開く時は何らかのユーザーアクションがある
// -> これはクライアントコンポーネントで問題ない...はず
export function DummyModal() {
  const { modal } = createModal()

  return (
    <div>
      <button>open</button>
      {modal}
    </div>
  )
}