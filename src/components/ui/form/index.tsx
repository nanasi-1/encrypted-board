import styles from './index.module.css'
import { tv } from "tailwind-variants"

export function FormLabel({ className, ...props }
  : React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>
) {
  const wrapper = tv({ base: 'font-bold text-base mb-3' })
  return (
    <div className={wrapper({ className })}>
      <label className="cursor-pointer" {...props} />
    </div>
  )
}

const inputBase = tv({
  base: [
    'border-primary', 'w-full', 'border', 'px-3', 'placeholder:text-gray-200', // base
    'transition', 'focus:outline-none', 'focus:border-secondary-400', // focus
  ]
})

export function FormInput({ className, ...props }
  : React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
) {
  const input = tv({
    extend: inputBase,
    base: 'py-2'
  })

  return (
    <input className={input({ className })} {...props} />
  )
}

export function FormTextarea({ className, ...props }
  : React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>
) {
  const input = tv({
    extend: inputBase,
    base: 'py-2 h-32 resize-none'
  })

  return (
    <textarea className={input({ className })} {...props} />
  )
}

export function SubmitButton({ className, ...props }
  : React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
) {
  const button = tv({ base: styles['submit-button'] })
  return (
    <button type="submit" className={button({ className })} {...props} />
  )
}

export function FormSection({ className, ...props }
  : React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
) {
  return (
    <div className={tv({ base: 'mb-5' })({ className })} {...props} />
  )
}

export function ValidationError({ className, ...props }
  : React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>
) {
  const text = tv({ base: 'text-red-500 text-sm mt-1 block' })
  return (
    <span className={text({ className })} {...props}>
      ERROR: {props.children}
    </span>
  )
}

export function OptionText({ className, ...props }
  : React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>
) {
  const text = tv({ base: 'text-xs text-stone-400 mt-1' })
  return (
    <span className={text({ className })} {...props}>
      {props.children ?? '（オプション）'}
    </span>
  )
}