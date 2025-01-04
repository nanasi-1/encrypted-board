import { useModal } from "@/components/ui/modal";
import DecryptModal from "./modal";
import ResultModal from "./result-modal";

export function useDecryptModal() {
  const { open, close } = useModal()

  const openResultModal = async (cipher: string, privateKey: string) => {
    const plainText = cipher // ここに復号処理
    open(<ResultModal plainText={plainText} />)
  }

  const openModal = (cipher: string) => {
    open(<DecryptModal onSubmit={key => openResultModal(cipher, key)} />)
  }

  return openModal
}