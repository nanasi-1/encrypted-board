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

const inputBaseClass = ['border-primary', 'w-full', 'border', 'px-4'] as const

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
    .addByArray(['py-3', 'h-32'])
    .addByArray(className?.split(' '))
    .build()

  return (
    <textarea className={_className} {...props} />
  )
}