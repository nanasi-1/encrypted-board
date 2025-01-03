import { classnameBuilder } from "@/utils/classname-builder"
import { Icones, CloseIcon } from "../icons"
import styles from './index.module.css'

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
  const _className = classnameBuilder()
    .addByArray(['text-primary', 'font-bold', 'text-xl', 'mb-3'])
    .addByArray(className?.split(' '))
    .build()

  return <h2 className={_className} {...props} />
}