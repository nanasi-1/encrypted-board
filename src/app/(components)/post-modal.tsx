'use client'

import { FormInput, FormLabel, FormTextarea } from "@/components/ui/form";
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
        <div>
          <FormLabel>平文</FormLabel>
          <FormTextarea value={value} onChange={onChange} required />
          {error && <span>{error}</span>}
        </div>
        <div>
          <FormLabel>公開鍵</FormLabel>
          <FormInput type="text" required placeholder="Hello World!" />
        </div>
        <button type="submit">投稿</button>
      </form>
    </>
  )
}
