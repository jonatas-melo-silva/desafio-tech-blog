import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

const base =
  'text-center text-2xl font-semibold leading-7 md:text-3xl md:leading-10 lg:text-start lg:text-4xl' as ClassNameValue

export type TitleProps = ComponentProps<'h1'>

export function Title({ className, ...props }: TitleProps) {
  return <h1 className={twMerge(base, className)} {...props} />
}
