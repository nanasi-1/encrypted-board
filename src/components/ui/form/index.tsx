import { classnameBuilder } from "@/utils/classname-builder"

export function FormLabel({ className, ...props }
  : React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>
) {
  const _className = classnameBuilder()
    .addByArray(['block', 'font-bold', 'text-base', 'mb-3'])
    .addByArray(className?.split(' '))
    .build()

  return (
    <label className={_className} {...props} />
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
    .addByArray(['bg-stone-750', 'py-1.5', 'px-3.5', 'rounded-md']) // base
    .addByArray(['border', 'border-primary', 'text-base', 'text-primary'])
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
  : React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
) {
  const _className = classnameBuilder()
    .addByArray([])
    .addByArray(className?.split(' '))
    .build()

  return (
    <span className={_className + ' text-red-500 text-sm mt-1 block'} {...props}>
      ERROR: {props.children}
    </span>
  )
}