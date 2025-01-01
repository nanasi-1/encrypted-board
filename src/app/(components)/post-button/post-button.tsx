'use client'

import { Icones, AddEncryptionIcon } from "@/components/ui/icons"
import styles from './post-button.module.css'
import { classnameBuilder } from "@/utils/classname-builder"

function UI({ Icon, className, onClick }: {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  className?: string
  onClick?: () => void
}) {
  const _className = classnameBuilder()
    .add(styles['button'])
    .add(className)
    .build()

  return (
    <button className={_className} onClick={onClick}>
      <Icones Icon={Icon} fontSize={24} />
    </button>
  )
}

export default function PostButton() {
  const openModal = () => {
    console.log('open modal')
  }

  return (
    <UI 
      Icon={AddEncryptionIcon} 
      onClick={openModal}
    />
  )
}