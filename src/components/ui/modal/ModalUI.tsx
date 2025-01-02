import { Icones, CloseIcon } from "../icons"
import styles from './index.module.css'

export default function ModalUI({ children, dialogRef }: {
  children?: React.ReactNode
  dialogRef?: React.RefObject<HTMLDialogElement | null>
}) {
  const closeModal = () => dialogRef?.current?.close()

  // TODO align-centerをどうするか考える
  return (
    <dialog ref={dialogRef}>
      <div className={styles['overlay']} onClick={closeModal}>
        {/* stopPropagation: コンテンツをクリックするとモーダルが閉じるのを防止 */}
        <div className={styles['wrapper']} onClick={e => e.stopPropagation()}>
          <button className={styles['close-button']} onClick={closeModal}>
            <Icones Icon={CloseIcon} fontSize={24} />
          </button>
          {children}
        </div>
      </div>
    </dialog>
  )
}