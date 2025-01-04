import { SubmitButton } from "@/components/ui/form"
import { CheckIcon, Icones } from "@/components/ui/icons"
import { useModal } from "@/components/ui/modal"
import { ModalTitle } from "@/components/ui/modal/ModalUI"

export default function ResultModal({ plainText }: {
  plainText: string,
}) {
  const { close } = useModal()

  return (
    <div>
      <ModalTitle>
        <Icones Icon={CheckIcon} fontSize={28} position="left-of-text" />
        復号完了
      </ModalTitle>
      <div className="mb-7">
        <h3 className="font-bold mb-6">平文</h3>
        <div className="border-primary-700 border-y break-words px-3 py-3 min-h-28">
          {plainText}
        </div>
      </div>
      <SubmitButton type="button" onClick={close}>OK</SubmitButton>
    </div>
  )
}