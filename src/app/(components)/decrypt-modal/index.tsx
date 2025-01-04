import { useModal } from "@/components/ui/modal";
import DecryptModal from "./modal";
import { ResultModal } from "./result-modal";
import { decrypt } from "@/lib/encrypt";
import { importPrivateKey } from "@/lib/import-export-key";
import { useModalContext } from "@/components/ui/modal/context";
import { ErrorModalWrapper, InvalidErrorModal, OperationErrorModal } from "./error-modal";

export function useDecryptModal() {
  const { open } = useModal()
  const { setModalComponent, dialogRef } = useModalContext()

  const openError = (children: React.ReactNode) => {
    setModalComponent(<ErrorModalWrapper>{children}</ErrorModalWrapper>)
    dialogRef.current?.showModal()
  }

  const openResult = async (cipher: string, privateKey: string) => {
    try {
      const cryptoKey = await importPrivateKey(privateKey, false)
      const plainText = await decrypt(cipher, cryptoKey)
      open(<ResultModal plainText={plainText} />)
    } catch (error) {
      openError(<InvalidErrorModal privateKey={privateKey} />)
    }
  }

  const openModal = (cipher: string, unique: number) => {
    open(<DecryptModal key={unique} onSubmit={key => openResult(cipher, key)} />)
  }

  return openModal
}