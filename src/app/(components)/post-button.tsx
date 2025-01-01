'use client'
import { AddEncryptionIcon } from "@/components/ui/icons"
import RoundedIconButton from "@/components/ui/rounded-icon-button"

export default function PostButton() {
  const openModal = () => {
    console.log('open modal')
  }

  return (
    <RoundedIconButton 
      Icon={AddEncryptionIcon} 
      onClick={openModal}
    />
  )
}