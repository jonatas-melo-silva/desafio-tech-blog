import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

const base =
  'flex h-12 w-full truncate rounded border border-gray-200 bg-white px-4 py-4 text-sm font-normal outline-none placeholder:text-gray-500 focus-within:border-violet-500 focus-within:ring-4 focus-within:ring-violet-500/20 md:h-14 md:px-6 md:py-5 md:text-lg' as ClassNameValue
const dark = 'dark:bg-zinc-900 dark:border-zinc-700' as ClassNameValue

export type InputProps = ComponentProps<'input'>

export function Input({ className, ...props }: InputProps) {
  return <input className={twMerge(base, dark, className)} {...props} />
}
