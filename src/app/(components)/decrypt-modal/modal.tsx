'use client'

import { FormInput, SubmitButton } from "@/components/ui/form";
import { ModalTitle } from "@/components/ui/modal/ModalUI";

export default function DecryptModal({ onSubmit }: {
  onSubmit?: (privateKey: string) => void | Promise<void>
}) {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    console.log([...formData.entries()])
    await onSubmit?.(formData.get("private-key") as string)
  }

  return (
    <div>
      <ModalTitle>Decrypt Modal</ModalTitle>
      <form onSubmit={handleSubmit}>
        <FormInput />
        <SubmitButton>復号</SubmitButton>
      </form>
    </div>
  )
}