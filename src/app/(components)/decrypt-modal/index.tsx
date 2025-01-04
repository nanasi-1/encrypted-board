import { useModal } from "@/components/ui/modal";
import DecryptModal from "./modal";

export function useDecryptModal() {
  const { open, close } = useModal()
  const openModal = (cipher: string) => open(<DecryptModal />)

  return openModal
}