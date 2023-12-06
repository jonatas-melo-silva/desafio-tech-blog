import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

const base = 'flex w-full justify-center bg-violet-50' as ClassNameValue
const dark = 'dark:bg-zinc-800' as ClassNameValue

export type RootProps = ComponentProps<'header'>

export function Root({ className, ...props }: RootProps) {
  return <header className={twMerge(base, dark, className)} {...props} />
}
