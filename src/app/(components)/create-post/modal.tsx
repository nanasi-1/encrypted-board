'use client'

import { FormInput, FormLabel, FormSection, FormTextarea, OptionText, SubmitButton, ValidationError } from "@/components/ui/form";
import { ModalTitle } from "@/components/ui/modal/ModalUI";
import { PostFormData } from "@/types";
import { FormEventHandler, useState } from "react";

function validatePlainText(text: string) {
  const MAX_PLAIN_TEXT_LENGTH = 128

  // 0文字（空）ならOK
  if (text.length === 0) {
    return null
  }

  // 255文字以内ならOK
  if (text.length <= MAX_PLAIN_TEXT_LENGTH) {
    return null
  }

  return '平文は255文字以内で入力してください'
}

export default function PostModal({ onSubmit }: { 
  onSubmit: (post: PostFormData) => void | Promise<void> 
}) {
  const [error, setError] = useState<React.ReactNode | null>(null)
  const [value, setValue] = useState('')
  const [nowPosted, setNowPosted] = useState(false)

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setValue(event.target.value)
    setError(validatePlainText(event.target.value))
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()
    setNowPosted(true)
    const formData = new FormData(event.currentTarget)
    const post: PostFormData = {
      plainText: formData.get('plain-text') as string,
      publicKey: formData.get('public-key') as string,
      signKey: formData.get('sign-key') as string,
    }
    await onSubmit(post)
    setNowPosted(false)
    setValue('') // 平文のみリセット
  }

  return (
    <>
      <ModalTitle className="mb-5">投稿</ModalTitle>
      <form onSubmit={handleSubmit}>
        <FormSection>
          <FormLabel htmlFor="post-plain-text">平文</FormLabel>
          <FormTextarea
            id="post-plain-text"
            name="plain-text"
            value={value}
            onChange={handleChange}
            required
            placeholder="暗号として投稿する平文を入力..."
            className={error ? 'border-red-500' : ''}
            autoFocus
          />
          {error && <ValidationError>{error}</ValidationError>}
        </FormSection>
        <FormSection>
          <FormLabel htmlFor="post-public-key">公開鍵</FormLabel>
          <FormInput
            id="post-public-key"
            name="public-key"
            type="text"
            required
            placeholder="暗号化に使用する公開鍵を入力..."
          />
        </FormSection>
        {/* TODO 署名を実装する
        <FormSection>
          <FormLabel htmlFor="post-sign-key">
            署名鍵<OptionText />
          </FormLabel>
          <FormInput
            id="post-sign-key"
            name="sign-key"
            type="text"
            placeholder="署名鍵を入力..."
          />
        </FormSection>
        */}
        <hr className="my-8 border-gray-400" />
        <SubmitButton disabled={!!error || nowPosted}>
          {nowPosted ? '投稿中...' : '投稿'}
        </SubmitButton>
      </form>
    </>
  )
}
