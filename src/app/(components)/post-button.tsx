'use client'
import { AddEncryptionIcon } from "@/components/ui/icons"
import RoundedIconButton from "@/components/ui/rounded-icon-button"
import { useModal } from "@/components/ui/modal"
import PostModal from "./post-modal"

export default function PostButton() {
  const { open: openModal } = useModal()

  return (
    <RoundedIconButton
      Icon={AddEncryptionIcon}
      onClick={() => openModal(<PostModal />)}
    />
  )
}