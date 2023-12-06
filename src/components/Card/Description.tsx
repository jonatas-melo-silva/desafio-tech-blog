import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

const base =
  'overflow-hidden text-sm font-normal leading-tight lg:text-lg lg:leading-relaxed' as ClassNameValue
const dark = 'dark:text-gray-200' as ClassNameValue

export type DescriptionProps = ComponentProps<'p'>

export function Description({ className, ...props }: DescriptionProps) {
  return <p className={twMerge(base, dark, className)} {...props} />
}
