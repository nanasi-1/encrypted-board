import { classnameBuilder } from "@/utils/classname-builder";
import { SVGProps } from "react";

// by https://icones.js.org/collection/all

export function Icones({ Icon, color, position, ...props }: SVGProps<SVGSVGElement> & {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
  color?: string
  position?: 'left-of-text'
}) {
  const classname = classnameBuilder()
    .add('inline-block')
    .add(`text-${color ?? 'primary'}`)
    .add('mb-0.5')
    .addByArray(props.className?.split(' '))
    .build()

  const wrapperClassname = classnameBuilder()
    .add(position === 'left-of-text' ? 'pr-1' : '')
    .build()

  return (
    <span className={wrapperClassname}>
      <Icon {...props} className={classname} />
    </span>
  )
}

export function LockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V10q0-.825.588-1.412T6 8h1V6q0-2.075 1.463-3.537T12 1t3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v10q0 .825-.587 1.413T18 22zm6-5q.825 0 1.413-.587T14 15t-.587-1.412T12 13t-1.412.588T10 15t.588 1.413T12 17M9 8h6V6q0-1.25-.875-2.125T12 3t-2.125.875T9 6z"></path></svg>
  )
}

export function MentionIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><g fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="4"></circle><path strokeLinecap="round" strokeLinejoin="round" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10c2.252 0 4.33-.744 6.001-2"></path><path strokeLinecap="round" d="M16 8v4c0 1 .6 3 3 3s3-2 3-3"></path></g></svg>
  )
}

export function KeyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="m18.977 5.023l.53-.53zm0 9.767l.53.53zM7.146 12.668l-.53-.53zM3.433 16.38l.53.53zm4.187 4.187l-.53-.53zm3.712-3.713l-.53-.53zm-8.323.736l-.745.083zm.232 2.089l-.745.083zm1.08 1.08l-.083.745zm2.089.232l.082-.745zm-2.886-.723l.53-.53zm.208.208l-.53.53zm3.672-8.845l-.726.187zm4.965 4.965l-.187.726zm-4.73.467a.75.75 0 1 0-1.055 1.066zm12.373-8.857a.75.75 0 1 0 1.442-.412zm1.38 4.02a.75.75 0 0 0-1.43-.453zm-8.276-1.342a1.25 1.25 0 0 1 0-1.768l-1.06-1.06a2.75 2.75 0 0 0 0 3.889zm1.768 0a1.25 1.25 0 0 1-1.768 0l-1.06 1.06a2.75 2.75 0 0 0 3.889 0zm0-1.768a1.25 1.25 0 0 1 0 1.768l1.06 1.06a2.75 2.75 0 0 0 0-3.889zm1.06-1.06a2.75 2.75 0 0 0-3.889 0l1.061 1.06a1.25 1.25 0 0 1 1.768 0zm3.563-3.563a7.657 7.657 0 0 0-10.828 0l1.06 1.06a6.157 6.157 0 0 1 8.708 0zM6.615 12.138L2.903 15.85l1.06 1.06l3.714-3.71zm1.535 8.959l1.24-1.24l-1.06-1.061l-1.24 1.24zm1.24-1.24l2.472-2.472l-1.06-1.061l-2.472 2.472zm-7.126-2.184l.232 2.089l1.49-.166l-.232-2.088zm1.974 3.831l2.089.232l.165-1.49l-2.088-.232zm-1.244-.706l.208.208l1.06-1.06l-.208-.209zm1.41-.784a.24.24 0 0 1-.141-.068l-1.061 1.06c.279.28.644.455 1.036.498zm-1.908-.252c.043.392.219.757.498 1.036l1.06-1.06a.24.24 0 0 1-.067-.142zm4.593.274a.73.73 0 0 1-.597.21l-.165 1.49a2.23 2.23 0 0 0 1.823-.64zM2.903 15.85a2.23 2.23 0 0 0-.64 1.823l1.491-.165a.73.73 0 0 1 .21-.597zm5.228-4.405A6.15 6.15 0 0 1 9.74 5.553l-1.06-1.06a7.65 7.65 0 0 0-2.002 7.325zm10.316 2.815a6.15 6.15 0 0 1-5.892 1.61l-.373 1.452a7.65 7.65 0 0 0 7.325-2.001zm-6.585 3.124c.056-.055.17-.1.32-.062l.373-1.453c-.588-.15-1.27-.028-1.753.455zM7.676 13.2c.483-.483.606-1.166.455-1.754l-1.453.373c.038.15-.007.264-.063.32zm1.711 5.594l-1.749-1.73l-1.054 1.066l1.749 1.73zm9.06-13.24a6.1 6.1 0 0 1 1.565 2.653l1.442-.412a7.6 7.6 0 0 0-1.947-3.301zm1.515 6.22a6.1 6.1 0 0 1-1.515 2.487l1.06 1.06a7.6 7.6 0 0 0 1.885-3.093z"></path></svg>
  )
}


export function GitHubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"></path></svg>
  )
}