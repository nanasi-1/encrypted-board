'use client'

import Cipher from "@/components/ui/cipher"
import { ErrorModal } from "@/components/ui/modal/error-modal"
import { CipherBox, TextBox } from "@/components/ui/text-box"

/** Base64エンコードでなかったときのモーダル */
export function InvalidErrorModal({ privateKey }: { privateKey: string }) {
  return (
    <ErrorModal
      title="DECRYPTION ERROR!"
      label="解析に失敗しました"
      message="解読不可能な秘密鍵を受信しました。Base64の鍵が必要です。" // TODO メッセージを考え直す
    >
      <h3 className="font-bold mb-3">入力された秘密鍵</h3>
      <CipherBox boxColor="red-600" className="h-24">
        {privateKey}
      </CipherBox>
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
      title="DECRYPTION ERROR!"
      label="アクセスが拒否されました"
      message="使用された秘密鍵と暗号化に用いられた公開鍵が一致しません。"
    >
      <TextBox className="mb-4">
        <span className="mr-1">公開鍵:</span>
        <Cipher color="white">{publicKey}</Cipher>
      </TextBox>
      <TextBox color="red-600">
        <span className="mr-1">秘密鍵:</span>
        <Cipher color="red-500">{privateKey}</Cipher>
      </TextBox>
    </ErrorModal>
  )
}