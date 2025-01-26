export function Header2({ children, className }: {
  className?: string,
  children?: React.ReactNode
}) {
  return (
    <h2 className={`font-bold bg-black px-7 py-2 border-b border-primary mb-5 ${className}`}>
      <span className="text-primary text-[1.7rem]">{children}</span>
    </h2>
  )
}