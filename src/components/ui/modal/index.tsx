import { Icones, LockIcon } from '../icons'
import styles from './index.module.css'

export function ModalUI({ children }: { 
  children?: React.ReactNode 
}) {
  return (
    <div className={styles['bg']}>
      <div className={styles['wrapper'] + ''}>
        <Icones Icon={LockIcon} color="white" className='absolute top-4 right-5' />
        {children}
      </div>
    </div>
  )
}