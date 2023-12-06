import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

const base =
  'h-12 overflow-hidden text-lg font-semibold leading-normal' as ClassNameValue

export type TitleProps = ComponentProps<'h3'>

export function Title({ className, ...props }: TitleProps) {
  return <h3 className={twMerge(base, className)} {...props} />
}