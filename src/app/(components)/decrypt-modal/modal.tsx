'use client'

import { FormInput, FormLabel, FormSection, SubmitButton } from "@/components/ui/form";
import { ModalTitle } from "@/components/ui/modal/ModalUI";
import { useState } from "react";

export default function DecryptModal({ onSubmit }: {
  onSubmit?: (privateKey: string) => void | Promise<void>
}) {
  const [pending, setPending] = useState(false)

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()
    setPending(true)
    const formData = new FormData(event.currentTarget)
    console.log([...formData.entries()])
    await onSubmit?.(formData.get("private-key") as string)
    setPending(false) // ↑で別のモーダルが開く場合は実行されない
  }

  return (
    <div>
      <ModalTitle>復号</ModalTitle>
      <form onSubmit={handleSubmit}>
        <FormSection className="mb-6">
          <FormLabel htmlFor="decrypt-private-key">秘密鍵</FormLabel>
          <FormInput
            id="decrypt-private-key"
            name="private-key"
            required
          />
        </FormSection>
        <SubmitButton disabled={pending}>
          {pending ? "復号中..." : "復号"}
        </SubmitButton>
      </form>
    </div>
  )
}