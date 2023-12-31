import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'
import * as Templates from '../templates'

const base =
  'flex min-h-screen w-full flex-col items-center bg-white text-neutral-900 antialiased' as ClassNameValue
const dark = 'dark:bg-zinc-900 dark:text-gray-50' as ClassNameValue

export type DefaultProps = ComponentProps<'div'>

export function Default({ className, ...props }: DefaultProps) {
  return (
    <div className={twMerge(base, dark, className)} {...props}>
      <Templates.Header />

      <main className="flex w-full justify-center">{props.children}</main>

      <Templates.Footer />
    </div>
  )
}
