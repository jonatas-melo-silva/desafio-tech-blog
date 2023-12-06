import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

const base =
  'flex w-full flex-col items-center justify-center gap-6 px-6 py-16' as ClassNameValue

export type WrapperProps = ComponentProps<'section'>

export function Wrapper({ className, ...props }: WrapperProps) {
  return <section className={twMerge(base, className)} {...props} />
}
