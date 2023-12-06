import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'
import { articles } from '../store'
import { Card } from '../templates'

const base =
  'flex w-full flex-col justify-center gap-10 px-6 py-16 md:gap-14 md:py-20 md:max-w-[1216px] lg:gap-28' as ClassNameValue

export type HomeProps = ComponentProps<'section'>

export function Home({ className, ...props }: HomeProps) {
  return (
    <section className={twMerge(base, className)} {...props}>
      <h2 className="text-2xl font-semibold md:text-3xl">
        Artigos recomendados
      </h2>
      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:grid-cols-3 lg:gap-y-12">
        {articles?.map((article) => {
          return <Card key={article.id} href="#" article={article} />
        })}
      </div>
    </section>
  )
}
