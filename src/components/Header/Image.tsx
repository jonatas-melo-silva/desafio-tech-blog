import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

const base = 'h-60 md:h-[380px] lg:h-[460px]' as ClassNameValue

export type ImageProps = ComponentProps<'img'>

export function Image({ alt, className, ...props }: ImageProps) {
  return <img alt={alt} className={twMerge(base, className)} {...props} />
}
