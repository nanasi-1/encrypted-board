type UIProps = {
  className?: string,
  children?: React.ReactNode
}

export function Header2({ children, className }: UIProps) {
  return (
    <h2 className={`font-bold bg-black px-7 py-2 border-b border-primary ${className ?? ''}`}>
      <span className="text-primary text-[1.7rem]">{children}</span>
    </h2>
  )
}

export function ColorStrong({ children, color, className }: UIProps & {
  color?: string
}) {
  return (
    <strong className={`text-${color ?? 'primary'} ${className ?? ''}`}>{children}</strong>
  )
}

export function Section({ children, className, title, id }: UIProps & {
  title: React.ReactNode
  id: string
}) {
  return (
    <section id={id} className={`mb-10 ${className ?? ''}`}>
      <Header2 className="mb-5">{title}</Header2>
      <div className="px-3 relative">
        {children}
      </div>
    </section>
  )
}