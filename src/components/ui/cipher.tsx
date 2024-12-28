import { classnameBuilder } from "@/utils/classname-builder"

export default function Cipher({ children, ...props }: React.HTMLProps<HTMLElement> & {
  children: React.ReactNode
}) {
  const classname = classnameBuilder()
    .add('text-primary')
    .add('break-words')
    .addByArray(props.className?.split(' '))
    .build()

  return (
    <code className={classname}>{children}</code>
  )
}