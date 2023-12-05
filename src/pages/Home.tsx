import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

const base =
  'flex w-full flex-col justify-center gap-10 px-6 py-16' as ClassNameValue

export type HomeProps = ComponentProps<'section'>

export function Home({ className, ...props }: HomeProps) {
  return (
    <section className={twMerge(base, className)} {...props}>
      <h2 className="text-2xl font-semibold">Artigos recomendados</h2>
      <div className="grid w-full grid-cols-1 gap-8">
        <a
          href="#"
          className="flex w-full flex-col rounded-lg outline-none focus-within:ring-2 focus-within:ring-violet-500"
        >
          <img
            className="h-44 rounded-tl-lg rounded-tr-lg bg-violet-50 object-cover object-top"
            src="https://source.unsplash.com/425x176/?programming=1"
            alt="imagem"
          />
          <article className="flex h-40 w-full flex-col items-start justify-between gap-3 rounded-b-lg border-b-2 border-l-2 border-r-2 border-violet-50 px-4 py-6">
            <div className="h-12 overflow-hidden text-lg font-semibold leading-normal">
              O que é linguagem de programação? Conheça as principais
            </div>
            <p className="h-11 overflow-hidden text-sm font-normal leading-tight">
              Uma das mais populares vertentes da tecnologia da informação, a
              área de...
            </p>
          </article>
        </a>
        <a
          href="#"
          className="flex w-full flex-col rounded-lg outline-none focus-within:ring-2 focus-within:ring-violet-500"
        >
          <img
            className="h-44 rounded-tl-lg rounded-tr-lg bg-violet-50 object-cover object-top"
            src="https://source.unsplash.com/425x176/?programming=2"
            alt="imagem"
          />
          <article className="flex h-40 w-full flex-col items-start justify-between gap-3 rounded-b-lg border-b-2 border-l-2 border-r-2 border-violet-50 px-4 py-6">
            <div className="h-12 overflow-hidden text-lg font-semibold leading-normal">
              O que é linguagem de programação? Conheça as principais
            </div>
            <p className="h-11 overflow-hidden text-sm font-normal leading-tight">
              Uma das mais populares vertentes da tecnologia da informação, a
              área de...
            </p>
          </article>
        </a>
        <a
          href="#"
          className="flex w-full flex-col rounded-lg outline-none focus-within:ring-2 focus-within:ring-violet-500"
        >
          <img
            className="h-44 rounded-tl-lg rounded-tr-lg bg-violet-50 object-cover object-top"
            src="https://source.unsplash.com/425x176/?programming=3"
            alt="imagem"
          />
          <article className="flex h-40 w-full flex-col items-start justify-between gap-3 rounded-b-lg border-b-2 border-l-2 border-r-2 border-violet-50 px-4 py-6">
            <div className="h-12 overflow-hidden text-lg font-semibold leading-normal">
              O que é linguagem de programação? Conheça as principais
            </div>
            <p className="h-11 overflow-hidden text-sm font-normal leading-tight">
              Uma das mais populares vertentes da tecnologia da informação, a
              área de...
            </p>
          </article>
        </a>
        <a
          href="#"
          className="flex w-full flex-col rounded-lg outline-none focus-within:ring-2 focus-within:ring-violet-500"
        >
          <img
            className="h-44 rounded-tl-lg rounded-tr-lg bg-violet-50 object-cover object-top"
            src="https://source.unsplash.com/425x176/?programming=4"
            alt="imagem"
          />
          <article className="flex h-40 w-full flex-col items-start justify-between gap-3 rounded-b-lg border-b-2 border-l-2 border-r-2 border-violet-50 px-4 py-6">
            <div className="h-12 overflow-hidden text-lg font-semibold leading-normal">
              O que é linguagem de programação? Conheça as principais
            </div>
            <p className="h-11 overflow-hidden text-sm font-normal leading-tight">
              Uma das mais populares vertentes da tecnologia da informação, a
              área de...
            </p>
          </article>
        </a>
        <a
          href="#"
          className="flex w-full flex-col rounded-lg outline-none focus-within:ring-2 focus-within:ring-violet-500"
        >
          <img
            className="h-44 rounded-tl-lg rounded-tr-lg bg-violet-50 object-cover object-top"
            src="https://source.unsplash.com/425x176/?programming=5"
            alt="imagem"
          />
          <article className="flex h-40 w-full flex-col items-start justify-between gap-3 rounded-b-lg border-b-2 border-l-2 border-r-2 border-violet-50 px-4 py-6">
            <div className="h-12 overflow-hidden text-lg font-semibold leading-normal">
              O que é linguagem de programação? Conheça as principais
            </div>
            <p className="h-11 overflow-hidden text-sm font-normal leading-tight">
              Uma das mais populares vertentes da tecnologia da informação, a
              área de...
            </p>
          </article>
        </a>
        <a
          href="#"
          className="flex w-full flex-col rounded-lg outline-none focus-within:ring-2 focus-within:ring-violet-500"
        >
          <img
            className="h-44 rounded-tl-lg rounded-tr-lg bg-violet-50 object-cover object-top"
            src="https://source.unsplash.com/425x176/?programming=6"
            alt="imagem"
          />
          <article className="flex h-40 w-full flex-col items-start justify-between gap-3 rounded-b-lg border-b-2 border-l-2 border-r-2 border-violet-50 px-4 py-6">
            <div className="h-12 overflow-hidden text-lg font-semibold leading-normal">
              O que é linguagem de programação? Conheça as principais
            </div>
            <p className="h-11 overflow-hidden text-sm font-normal leading-tight">
              Uma das mais populares vertentes da tecnologia da informação, a
              área de...
            </p>
          </article>
        </a>
      </div>
    </section>
  )
}
