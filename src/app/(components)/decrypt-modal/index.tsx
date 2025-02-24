import { useModal } from "@/components/ui/modal";
import DecryptModal from "./modal";
import { ResultModal } from "./result-modal";
import { decrypt } from "@/lib/encrypt";
import { importPrivateKey } from "@/lib/import-export-key";
import { InvalidErrorModal, OperationErrorModal } from "./error-modal";
import { PostData } from "@/types";
import { calcPrivateDigest } from "@/lib/digest";
import { useErrorModal } from "@/components/ui/modal/error-modal/hooks";
import { UnknownError } from "@/components/ui/modal/components";

export function useDecryptModal() {
  const { open } = useModal()
  const { openErrorModal: openError } = useErrorModal()

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
        const digest = await calcPrivateDigest(privateKey)
        openError(<OperationErrorModal publicKey={post.publicKeyDigest} privateKey={digest} />)
        return
      }
      openError(
        <UnknownError>{error instanceof Error ? error.message : '予期せぬエラーが発生しました'}</UnknownError>
      )
    }
  }

  const openModal = (post: PostData) => {
    open(<DecryptModal key={post.id} onSubmit={key => openResult(post, key)} />)
  }

  return openModal
}