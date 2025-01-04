import { useModal } from "@/components/ui/modal";
import DecryptModal from "./modal";
import ResultModal from "./result-modal";

export function useDecryptModal() {
  const { open } = useModal()

  const openResultModal = async (cipher: string, privateKey: string) => {
    const plainText = 'Hello Crypto!' // ここに復号処理
    await new Promise(resolve => setTimeout(resolve, 1000))
    open(<ResultModal plainText={plainText} />)
  }

  const openModal = (cipher: string, unique: number) => {
    open(<DecryptModal key={unique} onSubmit={key => openResultModal(cipher, key)} />)
  }

  return openModal
}