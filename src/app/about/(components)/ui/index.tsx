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

export function Header3({ children, className }: UIProps) {
  return (
    <h3 className={`text-primary font-bold text-xl mb-4 ${className ?? ''}`}>
      <span className="text-primary font-bold text-[1.35rem] bg-black px-2 py-1.5">{children}</span>
    </h3>
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

export function Section2({ children, className, title, id }: UIProps & {
  title?: React.ReactNode
  id?: string
}) {
  return (
    <section id={id} className={`mb-5 ${className ?? ''}`}>
      {title ? <Header3 className="mb-3">{title}</Header3> : null}
      <div className="relative">
        {children}
      </div>
    </section>
  )
}