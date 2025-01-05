import { classnameBuilder } from "@/utils/classname-builder"
import styles from './index.module.css'

export function FormLabel({ className, ...props }
  : React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>
) {
  const _className = classnameBuilder()
    .addByArray(['font-bold', 'text-base', 'mb-3'])
    .addByArray(className?.split(' '))
    .build()

  return (
    <div className={_className}>
      <label className="cursor-pointer" {...props} />
    </div>
  )
}

const inputBaseClass = [
  'border-primary', 'w-full', 'border', 'px-3', 'placeholder:text-gray-200', // base
  'transition', 'focus:outline-none', 'focus:border-secondary-400', // focus
] as const

export function FormInput({ className, ...props }
  : React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
) {
  const _className = classnameBuilder()
    .addByArray(inputBaseClass)
    .add('py-2')
    .addByArray(className?.split(' '))
    .build()

  return (
    <input className={_className} {...props} />
  )
}

export function FormTextarea({ className, ...props }
  : React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>
) {
  const _className = classnameBuilder()
    .addByArray(inputBaseClass)
    .addByArray(['py-2', 'h-32', 'resize-none'])
    .addByArray(className?.split(' '))
    .build()

  return (
    <textarea className={_className} {...props} />
  )
}

export function SubmitButton({ className, ...props }
  : React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
) {
  const _className = classnameBuilder()
    .add(styles['submit-button'])
    .addByArray(className?.split(' '))
    .build()

  return (
    <button type="submit" className={_className} {...props} />
  )
}

export function FormSection({ className, ...props }
  : React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
) {
  const _className = classnameBuilder()
    .addByArray(['mb-5'])
    .addByArray(className?.split(' '))
    .build()

  return (
    <div className={_className} {...props} />
  )
}

export function ValidationError({ className, ...props }
  : React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>
) {
  const _className = classnameBuilder()
    .addByArray(['text-red-500', 'text-sm', 'mt-1', 'block'])
    .addByArray(className?.split(' '))
    .build()

  return (
    <span className={_className} {...props}>
      ERROR: {props.children}
    </span>
  )
}

export function OptionText({ className, ...props }
  : React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>
) {
  const _className = classnameBuilder()
    .addByArray(['text-xs', 'text-stone-400', 'mt-1'])
    .addByArray(className?.split(' '))
    .build()

  return (
    <span className={_className} {...props}>
      {props.children ?? '（オプション）'}
    </span>
  )
}