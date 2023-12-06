import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

const base =
  'flex w-full flex-col rounded-lg outline-none focus-within:ring-4 focus-within:ring-violet-500/20' as ClassNameValue

export type RootProps = ComponentProps<'a'>

export function Root({ className, ...props }: RootProps) {
  return (
    <a className={twMerge(base, className)} {...props}>
      {props.children}
    </a>
  )
}
