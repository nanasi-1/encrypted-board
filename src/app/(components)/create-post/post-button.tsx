'use client'
import { AddEncryptionIcon } from "@/components/ui/icons"
import { useModal } from "@/components/ui/modal"
import { PostFormData, PostRequestBody, PostRequestSign } from "@/types"
import RoundedIconButton from "@/components/ui/rounded-icon-button"
import PostModal from "./modal"
import { calcPrivateDigest } from "@/lib/digest"
import { sign as createSign } from "@/lib/sign"
import { importSignKey } from "@/lib/import-export-key"
import { createPost } from "@/api-client"
import { useRouter } from "next/navigation";
import { unknownError } from "@/api/lib/errors"

async function createPostBody(form: PostFormData) {
  try {
    const sign: PostRequestSign = form.signKey
      ? {
        has: true,
        signature: await createSign(form.plainText, await importSignKey(form.signKey, false)),
        signKeyDigest: await calcPrivateDigest(form.signKey),
      }
      : { has: false }

    const post: PostRequestBody = {
      plainText: form.plainText,
      publicKey: form.publicKey,
      sign
    }
    return post
  } catch (error) {
    return unknownError
  }
}

export default function PostButton() {
  const router = useRouter()
  const { open: openModal, close } = useModal()

  // TODO エラーハンドリング作る
  const handleSubmitForm = async (form: PostFormData) => {
    const post = await createPostBody(form)
    if ('code' in post && post.code === 'UnknownError') {
      openModal('Unknown Error Modal')
      return
    }

    const { result } = await createPost(post as PostRequestBody)
    if (result.status === 200) { // 正常に投稿できた場合
      router.refresh()
      close()
      return
    }
    
    // バリデーションエラー
    if ('issues' in result) {
      openModal('入力された値が無効です')
      return
    }

    if (result.code === 'LimitOver') {
      openModal('limit')
      return
    }
    if (result.code === 'VerifyFailed') {
      openModal('verify')
      return
    }
    if (result.code === 'VerifyKeyIsNotFound') {
      openModal('notfound')
      return
    }
    if (result.code === 'InvalidKey') {
      openModal('Base64なのに...')
      return
    }
    if (result.code === 'UnknownError') {
      openModal('unknown')
      return
    }
  }

  return (
    <RoundedIconButton
      Icon={AddEncryptionIcon}
      onClick={() => openModal(<PostModal onSubmit={handleSubmitForm} />)}
    />
  )
}