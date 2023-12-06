import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

const base =
  'flex flex-1 w-full flex-col items-start justify-between gap-3 rounded-b-lg border-b border-l border-r border-violet-50 px-4 py-6' as ClassNameValue
const dark = 'dark:bg-zinc-800 dark:border-zinc-700' as ClassNameValue

export type ContentProps = ComponentProps<'article'>

export function Content({ className, ...props }: ContentProps) {
  return <article className={twMerge(base, dark, className)} {...props} />
}
