import { ClipboardIcon, CheckIcon, Icones } from "@/components/ui/icons";
import { TextBox } from "@/components/ui/text-box";
import Cipher from "@/components/ui/cipher";
import styles from './index.module.css'

export default function KeyBox({ label, children, className }: {
  children: React.ReactNode
  className?: string
  label: React.ReactNode
}) {
  return (
    <TextBox className={`${styles['key-box']} ${className}`}>
      <span className="my-2 font-bold block border-r border-primary">{label}</span>
      <div className="my-2 max-h-[1.4rem] overflow-y-scroll">
        <Cipher color="white">{children}</Cipher>
      </div>
      <button className="bg-primary text-black font-bold">
        <Icones color="black" className="text-2xl" Icon={ClipboardIcon} />
      </button>
    </TextBox>
  )
}