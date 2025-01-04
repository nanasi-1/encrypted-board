'use client'

import { SubmitButton } from "@/components/ui/form"
import { Icones, CloseIcon } from "@/components/ui/icons"
import { useModal } from "@/components/ui/modal"
import { ModalTitle } from "@/components/ui/modal/ModalUI"

import wrapperBases from "@/components/ui/modal/index.module.css"
import customStyles from "./error-modal.module.css"
import Cipher from "@/components/ui/cipher"

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

function ErrorModal({ children, title, message }: {
  children?: React.ReactNode,
  title: React.ReactNode
  message: React.ReactNode
}) {
  const { close } = useModal()

  return (
    <div>
      <ModalTitle className="text-red-600">
        DECRYPTION ERROR!
      </ModalTitle>
      <div className="mb-5">
        <h3 className="font-bold mb-1">[ {title} ]</h3>
        <p>{message}</p>
      </div>
      {children}
      <SubmitButton type="button" onClick={close} className={customStyles['submit-button']}>OK</SubmitButton>
    </div>
  )
}

/** Base64エンコードでなかったときのモーダル */
export function InvalidErrorModal({ privateKey }: { privateKey: string }) {
  return (
    <ErrorModal 
      title="解析に失敗しました" 
      message="解読不可能な秘密鍵を受信しました。Base64の鍵が必要です。"
    >
      <h3 className="font-bold mb-3">秘密鍵</h3>
      <div className="border-red-600 border h-24 px-3 py-2 break-words overflow-y-scroll">
        <Cipher className="text-white">{privateKey}</Cipher>
      </div>
    </ErrorModal>
  )
}

/** 鍵が一致しなかったときのモーダル */
export function OperationErrorModal({ publicKey, privateKey }: { 
  publicKey: string
  privateKey: string 
}) {
  return (
    <ErrorModal 
      title="アクセスが拒否されました" 
      message="使用された秘密鍵と暗号化に用いられた公開鍵が一致しません。"
    >
      <div>{publicKey}</div>
      <div>{privateKey}</div>
    </ErrorModal>
  )
}