import { Icones, AddEncryptionIcon } from "@/components/ui/icons"
import styles from './post-button.module.css'
import { classnameBuilder } from "@/utils/classname-builder"

function UI({ Icon, className }: {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  className?: string
}) {
  const _className = classnameBuilder()
    .add(styles['button'])
    .add(className)
    .build()

  return (
    <button className={_className}>
      <Icones Icon={Icon} fontSize={24} />
    </button>
  )
}

export default function PostButton() {
  return (
    <UI Icon={AddEncryptionIcon} className="bottom-10 right-10" />
  )
}