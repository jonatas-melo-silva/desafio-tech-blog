import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

const base =
  'flex h-12 w-full truncate rounded border border-gray-200 bg-white px-4 py-4 text-sm font-normal outline-none placeholder:text-gray-500 focus-within:border-violet-500 focus-within:ring-4 focus-within:ring-violet-500/20' as ClassNameValue

export type ControlProps = ComponentProps<'input'>

export function Control({ className, ...props }: ControlProps) {
  return <input className={twMerge(base, className)} {...props} />
}
