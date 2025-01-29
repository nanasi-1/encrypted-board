import { Icones, CloseIcon } from "../icons"
import styles from './index.module.css'
import { tv } from "tailwind-variants"

export default function ModalUI({ children, onClose }: {
  children?: React.ReactNode
  dialogRef?: React.RefObject<HTMLDialogElement | null>
  onClose?: () => void
}) {
  // TODO align-centerをどうするか考える
  return (
    <div className={styles['wrapper']} onClick={onClose}>
      {/* stopPropagation: コンテンツをクリックするとモーダルが閉じるのを防止 */}
      <div className={styles['content']} onClick={e => e.stopPropagation()}>
        <button className={styles['close-button']} onClick={onClose}>
          <Icones Icon={CloseIcon} fontSize={24} />
        </button>
        {children}
      </div>
    </div>
  )
}

export function ModalTitle({ className, ...props }
  : React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
) {
  const title = tv({ base: 'text-primary font-bold text-xl mb-3' })
  return <h2 {...props} className={title({ className })} />
}