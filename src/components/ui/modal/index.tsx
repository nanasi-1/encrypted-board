import { Icones, CloseIcon } from '../icons'
import styles from './index.module.css'

export function ModalUI({ children }: {
  children?: React.ReactNode
}) {
  // TODO align-centerをどうするか考える
  return (
    <div className={styles['bg']}>
      <div className={styles['wrapper']}>
        <button className={styles['close-button']}>
          <Icones Icon={CloseIcon} fontSize={20} />
        </button>
        {children}
      </div>
    </div>
  )
}