'use client'

import { SubmitButton } from "@/components/ui/form"
import { Icones, CloseIcon } from "@/components/ui/icons"
import { useModal } from "@/components/ui/modal"
import { ModalTitle } from "@/components/ui/modal/ModalUI"

import wrapperBases from "@/components/ui/modal/index.module.css"
import wrapperStyles from "./error-modal.module.css"

// ModalUIに相当するラッパー
export function ErrorModalWrapper({ children }: {
  children?: React.ReactNode,
}) {
  const { close } = useModal()

  return (
    <div className={wrapperBases['wrapper']} onClick={close}>
      <div className={wrapperBases['content'] + ' ' + wrapperStyles['content']} onClick={e => e.stopPropagation()}>
        <button className={wrapperBases['close-button']} onClick={close}>
          <Icones Icon={CloseIcon} fontSize={24} color="red-600" />
        </button>
        {children}
      </div>
    </div>
  )
}

function ErrorModal({ children }: {
  children?: React.ReactNode,
}) {
  const { close } = useModal()

  return (
    <div>
      <ModalTitle className="text-red-600">
        DECRYPTION ERROR!
      </ModalTitle>
      <div className="mb-7">
        <h3 className="font-bold mb-6">エラー内容</h3>
        <div className="border-red-600 border-y break-words px-3 py-3 min-h-28">
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
    <ErrorModal>
      <p>入力されたテキストはBase64エンコードされていま せん。</p>
    </ErrorModal>
  )
}

/** 鍵が一致しなかったときのモーダル */
export function OperationErrorModal() {
  return (
    <div></div>
  )
}