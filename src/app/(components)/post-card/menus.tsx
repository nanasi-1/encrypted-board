'use client'

import { Icones, KeyIcon, MenuDotsIcon } from '@/components/ui/icons'
import styles from './post-card.module.css'

export default function Menus() {
  // 処理
  const onKeyClick = () => {
    console.log('key clicked')
  }

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