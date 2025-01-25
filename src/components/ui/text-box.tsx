import { classnameBuilder } from "@/utils/classname-builder"
import Cipher from "./cipher"

export function CipherBox({ children, className, cipherColor, boxColor }: {
  children?: React.ReactNode
  className?: string
  cipherColor?: string
  boxColor?: string
}) {
  const boxClassname = classnameBuilder()
    .addByArray(['border', 'px-3', 'py-2'])
    .add(`border-${boxColor ?? 'primary'}`)
    .addByArray(['break-words', 'overflow-y-scroll'])
    .add(className)
    .build()

  return (
    <div className={boxClassname}>
      <Cipher color={cipherColor ?? 'white'}>{children}</Cipher>
    </div>
  )
}

export function TextBox({ children, color, className }: {
  children?: React.ReactNode,
  color?: string
  className?: string
}) {
  const _classname = classnameBuilder()
    .addByArray(['border', 'px-3', 'py-2'] as const)
    .add(`border-${color ?? 'primary'}`)
    .add(className)
    .build()

  return (
    <div className={_classname}>
      {children}
    </div>
  )
}