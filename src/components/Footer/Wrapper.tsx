import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

const base =
  'flex w-full flex-col justify-center gap-12 px-6 py-16 lg:max-w-[590px] lg:items-center' as ClassNameValue

export type WrapperProps = ComponentProps<'section'>

export function Wrapper({ className, ...props }: WrapperProps) {
  return <section className={twMerge(base, className)} {...props} />
}
