'use client'

import { FormInput, FormLabel, FormSection, FormTextarea, SubmitButton, ValidationError } from "@/components/ui/form";
import { ModalTitle } from "@/components/ui/modal/ModalUI";
import { FormEventHandler, useState } from "react";

const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
  const formData = new FormData(event.currentTarget)
  console.log([...formData.entries()])
  debugger
}

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

  const onChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setValue(event.target.value)
    setError(validatePlainText(event.target.value))
  }

  return (
    <>
      <ModalTitle className="mb-5">投稿</ModalTitle>
      <form onSubmit={handleSubmit}>
        <FormSection>
          <FormLabel>平文</FormLabel>
          <FormTextarea 
            value={value} 
            onChange={onChange} 
            required 
            placeholder="投稿したいメッセージを入力..."
            className={error ? 'border-red-500' : ''}
          />
          {error && <ValidationError>{error}</ValidationError>}
        </FormSection>
        <FormSection>
          <FormLabel>公開鍵</FormLabel>
          <FormInput type="text" required placeholder="暗号化に使う公開鍵を入力..." />
        </FormSection>
        <FormSection>
          <FormLabel>署名</FormLabel>
          <FormInput type="text" placeholder="署名鍵を入力..." />
        </FormSection>
        <hr className="my-8 border-gray-400" />
        <SubmitButton disabled={!!error}>投稿</SubmitButton>
      </form>
    </>
  )
}
