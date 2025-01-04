import { SubmitButton } from "@/components/ui/form"
import { ModalTitle } from "@/components/ui/modal/ModalUI"

export default function ResultModal({ plainText, onClickOK }: {
  plainText: string,
  onClickOK?: () => void
}) {
  return (
    <div>
      <ModalTitle>Result Modal</ModalTitle>
      <div className="border-primary border break-words px-3 py-2">
        {plainText}
      </div>
      <SubmitButton type="button" onClick={onClickOK}>OK</SubmitButton>
    </div>
  )
}