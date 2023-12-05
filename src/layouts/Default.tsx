import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'
import Image from '../assets/image.png'

const base =
  'flex min-h-screen w-full flex-col items-center bg-white text-neutral-900 antialiased' as ClassNameValue

export type DefaultProps = ComponentProps<'div'>

export function Default({ className, ...props }: DefaultProps) {
  return (
    <div className={twMerge(base, className)} {...props}>
      <header className="flex w-full justify-center bg-violet-50">
        <section className="flex w-full flex-col items-center justify-center gap-6 px-6 py-16">
          <img className="h-60" src={Image} alt="image" />
          <h1 className="text-center text-2xl font-semibold leading-7">
            Encontre os{' '}
            <span className="text-violet-500">melhores artigos</span> de
            programação em um só lugar
          </h1>
          <p className="text-center text-base font-normal leading-normal">
            Explore o topo da programação em um só lugar! Seu destino único para
            dicas e tendências atuais.
          </p>
          <button className="flex h-11 w-full items-center justify-center rounded bg-violet-500 px-8 py-3.5 text-sm font-bold uppercase text-white outline-none focus-within:ring-2 focus-within:ring-violet-500">
            Buscar artigos
          </button>
        </section>
      </header>

      <main className="flex w-full justify-center">
        <section className="flex w-full flex-col justify-center gap-10 px-6 py-16">
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
                  Uma das mais populares vertentes da tecnologia da informação,
                  a área de...
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
                  Uma das mais populares vertentes da tecnologia da informação,
                  a área de...
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
                  Uma das mais populares vertentes da tecnologia da informação,
                  a área de...
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
                  Uma das mais populares vertentes da tecnologia da informação,
                  a área de...
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
                  Uma das mais populares vertentes da tecnologia da informação,
                  a área de...
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
                  Uma das mais populares vertentes da tecnologia da informação,
                  a área de...
                </p>
              </article>
            </a>
          </div>
        </section>
      </main>

      <footer className="flex w-full justify-center bg-violet-50">
        <section className="flex w-full flex-col justify-center gap-12 px-6 py-16">
          <h2 className="text-3xl font-semibold">Entre em contato</h2>

          <form
            action="#"
            className="flex w-full flex-col justify-center gap-10"
          >
            <fieldset className="flex w-full flex-col gap-6">
              <input
                className="flex h-12 w-full items-center justify-start gap-3 truncate rounded border border-gray-200 px-4 py-4 text-sm font-normal text-gray-500 outline-none focus-within:ring-2 focus-within:ring-violet-500"
                placeholder="Nome"
                type="text"
                name="name"
                id="name"
              />
              <input
                className="flex h-12 w-full items-center justify-start gap-3 truncate rounded border border-gray-200 px-4 py-4 text-sm font-normal text-gray-500 outline-none focus-within:ring-2 focus-within:ring-violet-500"
                placeholder="Email"
                type="email"
                name="email"
                id="email"
              />
              <textarea
                className="flex h-36 w-full items-center justify-start gap-3 rounded border border-gray-200 px-4 py-4 text-sm font-normal text-gray-500 outline-none focus-within:ring-2 focus-within:ring-violet-500"
                placeholder="Assunto da mensagem"
                name="message"
                id="message"
              />
            </fieldset>
            <button
              type="submit"
              className="flex h-12 w-full items-center justify-center gap-2 rounded bg-violet-500 px-8 py-3.5 text-center text-base font-bold uppercase text-white outline-none focus-within:ring-2 focus-within:ring-violet-500"
            >
              entrar em contato
            </button>
          </form>
        </section>
      </footer>
    </div>
  )
}
