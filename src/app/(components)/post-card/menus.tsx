'use client'

import { Icones, KeyIcon, MenuDotsIcon } from '@/components/ui/icons'
import styles from './post-card.module.css'
import { useDecryptModal } from '../decrypt-modal'

export default function Menus({ cipher }: { cipher: string }) {
  const openModal = useDecryptModal()
  const onKeyClick = () => openModal(cipher)

  return (
    <UI onKeyClick={onKeyClick} />
  )
}

function UI({ onKeyClick, onMoreClick }: {
  onKeyClick?: () => void,
  onMoreClick?: () => void,
}) {
  const KEY_ICON_SIZE = 1.2
  const MORE_ICON_SIZE = 1.3

  return (
    <ul className={styles['menu']}>
      <li>
        <button onClick={onKeyClick}>
          <Icones width={`${KEY_ICON_SIZE}rem`} height={`${KEY_ICON_SIZE}rem`} Icon={KeyIcon} />
        </button>
      </li>
      <li>
        <button onClick={onMoreClick}>
          <Icones width={`${MORE_ICON_SIZE}rem`} height={`${MORE_ICON_SIZE}rem`} color="white" Icon={MenuDotsIcon} />
        </button>
      </li>
    </ul>
  )
}