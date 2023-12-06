import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

const base =
  'flex w-full flex-col items-center justify-start gap-6 lg:max-w-[580px] lg:items-start lg:justify-start lg:gap-8' as ClassNameValue

export type ContentProps = ComponentProps<'div'>

export function Content({ className, ...props }: ContentProps) {
  return <div className={twMerge(base, className)} {...props} />
}
