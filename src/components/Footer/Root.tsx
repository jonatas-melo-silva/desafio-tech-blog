import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

const base = 'flex w-full justify-center bg-violet-50' as ClassNameValue

export type RootProps = ComponentProps<'footer'>

export function Root({ className, ...props }: RootProps) {
  return <footer className={twMerge(base, className)} {...props} />
}
