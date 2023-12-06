import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'
import { Card as C } from '../components'

const base = '' as ClassNameValue

export type CardProps = ComponentProps<'a'> & {
  alt: string
  src: string
}

export function Card({ alt, src, className, ...props }: CardProps) {
  return (
    <C.Root className={twMerge(base, className)} {...props}>
      <C.Image src={src} alt={alt} />
      <C.Content>
        <C.Title>
          O que é linguagem de programação? Conheça as principais
        </C.Title>
        <C.Description>
          Uma das mais populares vertentes da tecnologia da informação, a área
          de...
        </C.Description>
      </C.Content>
    </C.Root>
  )
}
