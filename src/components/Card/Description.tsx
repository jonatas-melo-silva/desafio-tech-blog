import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

const base =
  'h-11 overflow-hidden text-sm font-normal leading-tight' as ClassNameValue

export type DescriptionProps = ComponentProps<'p'>

export function Description({ className, ...props }: DescriptionProps) {
  return <p className={twMerge(base, className)} {...props} />
}
