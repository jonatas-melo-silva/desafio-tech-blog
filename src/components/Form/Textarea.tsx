import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

const base =
  'flex h-36 w-full items-center rounded bg-white border border-gray-200 px-4 py-4 text-sm font-normal placeholder:text-gray-500 outline-none focus-within:border-violet-500 focus-within:ring-4 focus-within:ring-violet-500/20 md:px-6 md:py-5 md:text-lg' as ClassNameValue

export type TextareaProps = ComponentProps<'textarea'>

export function Textarea({ className, ...props }: TextareaProps) {
  return <textarea className={twMerge(base, className)} {...props} />
}
