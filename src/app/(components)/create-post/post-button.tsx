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
import type { CustomError } from "@/api/lib/errors"
import { useErrorModal } from "@/components/ui/modal/error-modal/hooks"
import { openErrorWithCode, ValidationError } from "./error-modal"

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
    return {
      code: 'InvalidKey',
      status: 400,
      message: '署名鍵の解析に失敗しました。'
    } as const satisfies CustomError
  }
}

export default function PostButton() {
  const router = useRouter()
  const { open: openModal, close } = useModal()
  const { openErrorModal } = useErrorModal()

  // TODO エラーハンドリング作る
  const handleSubmitForm = async (form: PostFormData) => {
    const post = await createPostBody(form)
    if ('code' in post) {
      openErrorWithCode(post, openErrorModal)
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
      openErrorModal(<ValidationError />)
      return
    }
    openErrorWithCode(result, openErrorModal)
  }

  return (
    <RoundedIconButton
      Icon={AddEncryptionIcon}
      onClick={() => openModal(<PostModal onSubmit={handleSubmitForm} />)}
    />
  )
}