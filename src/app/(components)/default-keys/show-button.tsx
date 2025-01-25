'use client'

import RoundedIconButton from "@/components/ui/rounded-icon-button";
import { KeyIcon } from "@/components/ui/icons";
import { useModal } from "@/components/ui/modal";
import DefaultKeysModal from "./modal";

export default function ShowDefaultKeyButton() {
  const { open } = useModal()

  return (
    <RoundedIconButton 
      Icon={KeyIcon} 
      onClick={() => open(<DefaultKeysModal />)}
    />
  )
}