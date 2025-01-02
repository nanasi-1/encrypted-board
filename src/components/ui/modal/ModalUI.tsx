import { Icones, CloseIcon } from "../icons"
import styles from './index.module.css'

export default function ModalUI({ children, onClose }: {
  children?: React.ReactNode
  dialogRef?: React.RefObject<HTMLDialogElement | null>
  onClose?: () => void
}) {
  // TODO align-centerをどうするか考える
  return (
    <div className={styles['overlay']} onClick={onClose}>
      {/* stopPropagation: コンテンツをクリックするとモーダルが閉じるのを防止 */}
      <div className={styles['wrapper']} onClick={e => e.stopPropagation()}>
        <button className={styles['close-button']} onClick={onClose}>
          <Icones Icon={CloseIcon} fontSize={24} />
        </button>
        {children}
      </div>
    </div>
  )
}