import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

const base = 'text-3xl font-semibold' as ClassNameValue

export type TitleProps = ComponentProps<'h2'>

export function Title({ className, ...props }: TitleProps) {
  return <h2 className={twMerge(base, className)} {...props} />
}
