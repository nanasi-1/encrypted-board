import { Icones, AddEncryptionIcon } from "@/components/ui/icons"
import styles from './post-button.module.css'

function UI({ Icon }: {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}) {
  return (
    <button className={styles['button']}>
      <Icones Icon={Icon} fontSize={24} />
    </button>
  )
}

export default function PostButton() {
  return (
    <UI Icon={AddEncryptionIcon} />
  )
}