import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

const base =
  'overflow-hidden text-lg font-semibold leading-normal lg:text-xl lg:leading-relaxed' as ClassNameValue
const dark = 'dark:text-gray-200' as ClassNameValue

export type TitleProps = ComponentProps<'h3'>

export function Title({ className, ...props }: TitleProps) {
  return <h3 className={twMerge(base, dark, className)} {...props} />
}
