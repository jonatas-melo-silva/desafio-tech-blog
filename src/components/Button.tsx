import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

const base =
  'flex h-11 w-full items-center justify-center rounded bg-violet-500 px-8 py-3.5 text-center text-sm font-bold uppercase text-white outline-none focus-within:ring-4 focus-within:ring-violet-500/20' as ClassNameValue

export type ButtonProps = ComponentProps<'button'>

export function Button({ className, ...props }: ButtonProps) {
  return <button className={twMerge(base, className)} {...props} />
}
