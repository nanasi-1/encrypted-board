import { Icones } from '../icons'
import { tv } from 'tailwind-variants'

export default function RoundedIconButton({ Icon, onClick, className }: {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  onClick?: () => void
  className?: string
}) {
  const button = tv({
    base: 'border-primary border-2 rounded-full w-14 h-14 bg-black'
  })
    
  return (
    <button className={button({ className })} onClick={onClick}>
      <Icones Icon={Icon} fontSize={24} />
    </button>
  )
}