import { classnameBuilder } from "@/utils/classname-builder"

export function FormLabel({ className, ...props }
  : React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>
) {
  const _className = classnameBuilder()
    .addByArray(['block', 'font-bold', 'text-base'])
    .addByArray(className?.split(' '))
    .build()
    
  return (
    <label className={_className} {...props} />
  )
}