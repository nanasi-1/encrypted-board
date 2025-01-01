import { classnameBuilder } from '@/utils/classname-builder'
import styles from './button.module.css'
import { Icones } from '../icons'

export default function RoundedIconButton({ Icon, onClick, className }: {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  onClick?: () => void
  className?: string
}) {
  const _className = classnameBuilder()
    .add(styles['button'])
    .add(className)
    .build()
    
  return (
    <button className={_className} onClick={onClick}>
      <Icones Icon={Icon} fontSize={24} />
    </button>
  )
}