'use client'
import { AddEncryptionIcon } from "@/components/ui/icons"
import { useModal } from "@/components/ui/modal"
import { PostFormData, PostRequestBody } from "@/types"
import RoundedIconButton from "@/components/ui/rounded-icon-button"
import PostModal from "./post-modal"

export default function PostButton() {
  const { open: openModal, close } = useModal()

  const handleSubmitForm = async (form: PostFormData) => {
    // 署名処理
    const post: PostRequestBody = {
      plainText: form.plainText,
      publicKey: form.publicKey,
      // 仮
      sign: {
        has: false
      }
    }
    console.log(post)
    await new Promise(resolve => setTimeout(resolve, 2000))
    close()
  }

  return (
    <RoundedIconButton
      Icon={AddEncryptionIcon}
      onClick={() => openModal(<PostModal onSubmit={handleSubmitForm} />)}
    />
  )
}