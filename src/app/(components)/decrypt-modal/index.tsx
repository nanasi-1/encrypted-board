import { useModal } from "@/components/ui/modal";
import DecryptModal from "./modal";
import { ResultModal, ErrorModal } from "./result-modal";
import { decrypt } from "@/lib/encrypt";
import { importPrivateKey } from "@/lib/import-export-key";

export function useDecryptModal() {
  const { open } = useModal()

  const openResultModal = async (cipher: string, privateKey: string) => {
    try {
      const cryptoKey = await importPrivateKey(privateKey, false)
      const plainText = await decrypt(cipher, cryptoKey)
      open(<ResultModal plainText={plainText} />)
    } catch (error) {
      console.error(error)
      open(<ErrorModal message={'Decryption Error!'} />)
    }
  }

  const openModal = (cipher: string, unique: number) => {
    open(<DecryptModal key={unique} onSubmit={key => openResultModal(cipher, key)} />)
  }

  return openModal
}