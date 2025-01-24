'use client'

import Cipher from "@/components/ui/cipher"
import { ErrorModal } from "@/components/ui/modal/error-modal"

/** Base64エンコードでなかったときのモーダル */
export function InvalidErrorModal({ privateKey }: { privateKey: string }) {
  return (
    <ErrorModal 
      title="DECRYPTION ERROR!"
      label="解析に失敗しました" 
      message="解読不可能な秘密鍵を受信しました。Base64の鍵が必要です。" // TODO メッセージを考え直す
    >
      <h3 className="font-bold mb-3">入力された秘密鍵</h3>
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
      title="DECRYPTION ERROR!"
      label="アクセスが拒否されました" 
      message="使用された秘密鍵と暗号化に用いられた公開鍵が一致しません。"
    >
      <div className="border px-3 py-2 border-primary mb-4">
        <span className="mr-1">公開鍵:</span>
        <Cipher className="text-white">{publicKey}</Cipher>
      </div>
      <div className="border px-3 py-2 border-red-600">
        <span className="mr-1">秘密鍵:</span>
        <Cipher className="text-red-600">{privateKey}</Cipher>
      </div>
    </ErrorModal>
  )
}