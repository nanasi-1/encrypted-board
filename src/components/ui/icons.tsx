// by https://icones.js.org/collection/all

export function Icones({ Icon, color, ...props }: React.SVGProps<SVGSVGElement> & {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
  color: string
}) {
  const classnames = [
    ...props.className?.split(' ') ?? [],
    'inline-block',
    `text-${color}`
  ]

  return <Icon className={classnames.join(' ')} />;
}

export function LockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m-6 9c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2m3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1z"></path></svg>
  )
}