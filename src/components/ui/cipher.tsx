import { classnameBuilder } from "@/utils/classname-builder"

export default function Cipher({ children, color = 'primary', ...props }: React.HTMLProps<HTMLElement> & {
  children: React.ReactNode
  color?: string
}) {
  const classname = classnameBuilder()
    .add(`text-${color}`)
    .add('break-words')
    .addByArray(props.className?.split(' '))
    .build()

  return (
    <code className={classname}>{children}</code>
  )
}