import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'
import { articles } from '../store'
import { Card } from '../templates'

const base =
  'flex w-full flex-col justify-center gap-10 px-6 py-16' as ClassNameValue

export type HomeProps = ComponentProps<'section'>

export function Home({ className, ...props }: HomeProps) {
  return (
    <section className={twMerge(base, className)} {...props}>
      <h2 className="text-2xl font-semibold">Artigos recomendados</h2>
      <div className="grid w-full grid-cols-1 gap-8">
        {articles?.map((article) => {
          return <Card key={article.id} href="#" article={article} />
        })}
      </div>
    </section>
  )
}
