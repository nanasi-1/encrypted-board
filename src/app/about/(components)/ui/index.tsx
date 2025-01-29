import { tv } from "tailwind-variants"

type UIProps = {
  className?: string,
  children?: React.ReactNode
}

type HeaderProps = UIProps & {
  id?: string
}

type SectionProps = HeaderProps & {
  title?: string
}

export function Header2({ children, className, id }: HeaderProps) {
  const classes = 'text-primary text-[1.7rem]'
  return (
    <h2 className={`font-bold bg-black px-7 py-2 border-b border-primary ${className ?? ''}`}>
      {id ?
        <a href={`#${id}`} className={`${classes} cursor-pointer`}>{children}</a> :
        <span className={classes}>{children}</span>
      }
    </h2>
  )
}

export function Header3({ children, className, id }: HeaderProps) {
  const classes = 'text-primary font-bold text-[1.35rem] bg-black px-2 py-1.5'
  return (
    <h3 className={`text-primary font-bold text-xl mb-4 ${className ?? ''}`}>
      {id ?
        <a href={`#${id}`} className={`${classes} cursor-pointer`}>{children}</a> :
        <span className={classes}>{children}</span>
      }
    </h3>
  )
}

export function ColorStrong({ children, color, className }: UIProps & {
  color?: string
}) {
  const strong = tv({ base: `text-${color ?? 'primary'}` })
  return (
    <strong className={strong({ className })}>{children}</strong>
  )
}

export function Section({ children, className, title, id }: SectionProps & {
  title: string,
  id: string
}) {
  return (
    <section id={id} className={`mb-10 ${className ?? ''}`}>
      <Header2 id={id} className="mb-5">{title}</Header2>
      <div className="px-3 relative">
        {children}
      </div>
    </section>
  )
}

export function Section2({ children, className, title, id }: SectionProps) {
  return (
    <section id={id} className={`mb-5 ${className ?? ''}`}>
      {title ? <Header3 id={id} className="mb-3">{title}</Header3> : null}
      <div className="relative">
        {children}
      </div>
    </section>
  )
}

export function EffectWrapper({ children, className }: UIProps) {
  return (
    <div className={`absolute top-0 right-0 select-none opacity-40 -z-10 ${className}`}>
      {children}
    </div>
  )
}