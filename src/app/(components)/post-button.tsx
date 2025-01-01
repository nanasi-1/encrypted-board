'use client'
import { AddEncryptionIcon } from "@/components/ui/icons"
import RoundedIconButton from "@/components/ui/rounded-icon-button"
import { useModal } from "@/components/ui/modal"

function PostModal() {
  return (
    <p>
      Happy New Year! <br />
      投稿するためのフォームがここにくるはず<br />
    </p>
  )
}

export default function PostButton() {
  const { open: openModal } = useModal(<PostModal />)

  return (
    <RoundedIconButton
      Icon={AddEncryptionIcon}
      onClick={openModal}
    />
  )
}