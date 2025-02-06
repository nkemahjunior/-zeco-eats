import { FieldError } from 'react-hook-form'
import TextInput from '@/shared/components/inputs/TextInput'
import CustomSelectV2, { DataItem } from './CustomSelectV2'

type InputType = 'input' | 'textArea' | 'select'

interface FormFieldProps<T> {
  id: string
  label: string
  placeholder?: string
  errors?: FieldError
  className?: string
  inputAttrs?: React.InputHTMLAttributes<HTMLInputElement>
  textareaAttrs?: React.TextareaHTMLAttributes<HTMLTextAreaElement>
  inputType?: InputType
  selectData?: DataItem<T>[]
  selectOnchange?: (arg: T) => void
}

export function FormInput<T>({
  id,
  label,
  placeholder,
  errors,
  className = '',
  inputAttrs,
  textareaAttrs,
  inputType = 'input',
  selectData,
  selectOnchange,
}: FormFieldProps<T>) {
  return (
    <div className={`space-y-4 ${className}`}>
      <label htmlFor={id} className="font-medium">
        {label}
      </label>
      <div className="space-y-2">
        {inputType === 'input' && (
          <TextInput
            id={id}
            height="h-[2.8rem]"
            placeHolder={placeholder}
            className="placeholder-textTint"
            attributes={{
              ...inputAttrs,
            }}
          />
        )}

        {inputType === 'textArea' && (
          <textarea
            id={id}
            {...textareaAttrs}
            className="border-backgroundBorder placeholder-textTint focus:border-secondary bg-background h-20 w-full resize-none rounded-lg border border-transparent p-4 focus:bg-white"
            placeholder={placeholder}
          />
        )}

        {inputType === 'select' && selectData && selectOnchange && (
          <CustomSelectV2
            inheritWidth
            width="w-full"
            childrenFlexPos="items-start"
            dataContainerPx="px-6"
            dataContainerPy="py-6"
            data={selectData}
            onchange={selectOnchange}
          />
        )}
        {errors && <p className="text-xs text-red-500">{errors.message}</p>}
      </div>
    </div>
  )
}
