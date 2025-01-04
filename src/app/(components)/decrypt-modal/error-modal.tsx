import { SubmitButton } from "@/components/ui/form"
import { useModal } from "@/components/ui/modal"
import { ModalTitle } from "@/components/ui/modal/ModalUI"

// ModalUIに相当するラッパー
export function ErrorModalWrapper({ onClose, children }: {
  children?: React.ReactNode,
  onClose: () => void,
}) {
  return (
    <div>
      {children}
    </div>
  )
}

function ErrorModal({ children }: {
  children?: React.ReactNode,
}) {
  const { close } = useModal()

  return (
    <div>
      <ModalTitle>エラー</ModalTitle>
      <div className="mb-7">
        <h3 className="font-bold mb-6">エラー内容</h3>
        <div className="border-red-500 border-y break-words px-3 py-3 min-h-28">
          {children}
        </div>
      </div>
      <SubmitButton type="button" onClick={close}>OK</SubmitButton>
    </div>
  )
}

/** Base64エンコードでなかったときのモーダル */
export function InvalidErrorModal() {
  return (
    <div></div>
  )
}

/** 鍵が一致しなかったときのモーダル */
export function OperationErrorModal() {
  return (
    <div></div>
  )
}