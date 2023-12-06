import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

const base =
  'h-44 rounded-tl-lg rounded-tr-lg bg-violet-50 object-cover object-top' as ClassNameValue
const dark = 'dark:opacity-80' as ClassNameValue

export type ImageProps = ComponentProps<'img'>

export function Image({ alt, className, ...props }: ImageProps) {
  return <img alt={alt} className={twMerge(base, dark, className)} {...props} />
}
