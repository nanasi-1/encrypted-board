'use client'

import { useModal } from ".."
import { CloseIcon, Icones } from "../../icons"
import wrapperBases from "@/components/ui/modal/index.module.css"
import customStyles from "./error-modal.module.css"
import { SubmitButton } from "../../form"
import { ModalTitle } from "../ModalUI"

// ModalUIに相当するラッパー
export function ErrorModalWrapper({ children }: {
  children?: React.ReactNode,
}) {
  const { close } = useModal()

  return (
    <div className={wrapperBases['wrapper']} onClick={close}>
      <div className={wrapperBases['content'] + ' ' + customStyles['content']} onClick={e => e.stopPropagation()}>
        <button className={wrapperBases['close-button']} onClick={close}>
          <Icones Icon={CloseIcon} fontSize={24} color="red-600" />
        </button>
        {children}
      </div>
    </div>
  )
}

export function ErrorModal({ children, title, label, message }: {
  children?: React.ReactNode
  title: React.ReactNode
  label: React.ReactNode
  message: React.ReactNode
}) {
  const { close } = useModal()

  return (
    <div>
      <ModalTitle className="text-red-600">{title}</ModalTitle>
      <div className={children ? "mb-5" : void 0}>
        <h3 className="font-bold mb-1">[ {label} ]</h3>
        <p>{message}</p>
      </div>
      {children}
      <SubmitButton type="button" onClick={close} className={customStyles['submit-button']} autoFocus>OK</SubmitButton>
    </div>
  )
}