'use client'
import { AddEncryptionIcon } from "@/components/ui/icons"
import { useModal } from "@/components/ui/modal"
import { PostFormData, PostRequestBody, PostRequestSign } from "@/types"
import RoundedIconButton from "@/components/ui/rounded-icon-button"
import PostModal from "./post-modal"
import { calcDigest, calcPrivateDigest } from "@/lib/digest"
import { sign as createSign } from "@/lib/sign"
import { encrypt } from "@/lib/encrypt"
import { importPublicKey, importSignKey } from "@/lib/import-export-key"

export default function PostButton() {
  const { open: openModal, close } = useModal()

  // TODO エラーハンドリング作る
  const handleSubmitForm = async (form: PostFormData) => {
    // 暗号化処理
    const cipher = await encrypt(form.plainText, await importPublicKey(form.publicKey, false))

    // 署名処理
    const sign: PostRequestSign = form.signKey
      ? { 
        has: true,
        signature: await createSign(cipher, await importSignKey(form.signKey, false)),
        signKeyDigest: await calcPrivateDigest(form.signKey),
      }
      : { has: false }

    const post: PostRequestBody = {
      body: cipher,
      publicKeyDigest: await calcDigest(form.publicKey),
      sign
    }

    console.log(post)
    await new Promise(resolve => setTimeout(resolve, 4000))
    close()
  }

  return (
    <RoundedIconButton
      Icon={AddEncryptionIcon}
      onClick={() => openModal(<PostModal onSubmit={handleSubmitForm} />)}
    />
  )
}