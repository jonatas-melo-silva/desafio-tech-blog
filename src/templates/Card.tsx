import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'
import { Card as C } from '../components'
import { Article } from '../types/Article'

const base = '' as ClassNameValue

export type CardProps = ComponentProps<'a'> & {
  article: Article
}

export function Card({ article, className, ...props }: CardProps) {
  return (
    <C.Root className={twMerge(base, className)} {...props}>
      <C.Image src={article.image} alt="" />
      <C.Content>
        <C.Title>{article.title}</C.Title>
        <C.Description>{article.description}</C.Description>
      </C.Content>
    </C.Root>
  )
}
