import { useModal } from "@/components/ui/modal";
import DecryptModal from "./modal";
import { ResultModal } from "./result-modal";
import { decrypt } from "@/lib/encrypt";
import { importPrivateKey } from "@/lib/import-export-key";
import { useModalContext } from "@/components/ui/modal/context";
import { InvalidErrorModal, OperationErrorModal } from "./error-modal";
import { PostData } from "@/types";
import { ErrorModalWrapper } from "@/components/ui/modal/error-modal";

export function useDecryptModal() {
  const { open } = useModal()
  const { setModalComponent, dialogRef } = useModalContext()

  const openError = (children: React.ReactNode) => {
    setModalComponent(<ErrorModalWrapper>{children}</ErrorModalWrapper>)
    dialogRef.current?.showModal()
  }

  const openResult = async (post: PostData, privateKey: string) => {
    try {
      const cryptoKey = await importPrivateKey(privateKey, false)
      const plainText = await decrypt(post.body, cryptoKey)
      open(<ResultModal plainText={plainText} />)
    } catch (error) {
      if (error instanceof Error && (
        error.name === 'InvalidCharacterError' ||
        error.name === 'DataError'
      )) {
        openError(<InvalidErrorModal privateKey={privateKey} />)
        return
      }
      if (error instanceof Error && error.name === 'OperationError') {
        const privateKeyDigest = privateKey.slice(0, 20) // ダイジェストを計算
        openError(<OperationErrorModal publicKey={post.publicKeyDigest} privateKey={privateKeyDigest} />)
        return
      }
      throw error // 予期せぬエラー
    }
  }

  const openModal = (post: PostData) => {
    open(<DecryptModal key={post.id} onSubmit={key => openResult(post, key)} />)
  }

  return openModal
}