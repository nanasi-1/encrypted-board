import { tv } from "tailwind-variants"

export default function Cipher({ children, color = 'primary', ...props }: React.HTMLProps<HTMLElement> & {
  children: React.ReactNode
  color?: string
}) {
  const cipher = tv({ base: ['break-words', `text-${color}`], })
  return (
    <code className={cipher({ class: props.className })}>{children}</code>
  )
}