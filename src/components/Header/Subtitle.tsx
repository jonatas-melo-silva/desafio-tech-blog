import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

const base =
  'text-center text-base font-normal leading-normal' as ClassNameValue

export type SubtitleProps = ComponentProps<'p'>

export function Subtitle({ className, ...props }: SubtitleProps) {
  return <p className={twMerge(base, className)} {...props} />
}
