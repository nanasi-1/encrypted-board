import Cipher from "./cipher"
import { tv } from "tailwind-variants"

export function CipherBox({ children, className, cipherColor, boxColor }: {
  children?: React.ReactNode
  className?: string
  cipherColor?: string
  boxColor?: string
}) {
  const box = tv({
    base: [
      'border px-3 py-2 break-words overflow-y-scroll',
      `border-${boxColor ?? 'primary'}`
    ]
  })

  return (
    <div className={box({ className })}>
      <Cipher color={cipherColor ?? 'white'}>{children}</Cipher>
    </div>
  )
}

export function TextBox({ children, color, className }: {
  children?: React.ReactNode,
  color?: string
  className?: string
}) {
  const box = tv({
    base: ['border px-3 py-2', `border-${color ?? 'primary'}`]
  })

  return (
    <div className={box({ className })}>
      {children}
    </div>
  )
}