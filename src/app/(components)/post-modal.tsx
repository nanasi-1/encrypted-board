'use client'

import { FormInput, FormLabel, FormSection, FormTextarea, OptionText, SubmitButton, ValidationError } from "@/components/ui/form";
import { ModalTitle } from "@/components/ui/modal/ModalUI";
import { FormEventHandler, useState } from "react";

function validatePlainText(text: string) {
  const MAX_PLAIN_TEXT_LENGTH = 255

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

export default function PostModal() {
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
    const post = {
      plainText: formData.get('plain-text') as string,
      publicKey: formData.get('public-key') as string,
      signKey: formData.get('sign-key') as string,
    }
    console.log(post)
    // ここでAPI呼び出し
    await new Promise(resolve => setTimeout(resolve, 3000))
    setNowPosted(false)
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
            placeholder="投稿したいメッセージを入力..."
            className={error ? 'border-red-500' : ''}
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
            placeholder="暗号化に使う公開鍵を入力..." 
          />
        </FormSection>
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
        <hr className="my-8 border-gray-400" />
        <SubmitButton disabled={!!error || nowPosted}>
          {nowPosted ? '投稿中...' : '投稿'}
        </SubmitButton>
      </form>
    </>
  )
}
