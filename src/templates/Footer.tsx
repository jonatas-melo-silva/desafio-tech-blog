import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

const base = 'flex w-full justify-center bg-violet-50' as ClassNameValue

export type FooterProps = ComponentProps<'footer'>

export function Footer({ className, ...props }: FooterProps) {
  return (
    <footer className={twMerge(base, className)} {...props}>
      <section className="flex w-full flex-col justify-center gap-12 px-6 py-16">
        <h2 className="text-3xl font-semibold">Entre em contato</h2>

        <form action="#" className="flex w-full flex-col justify-center gap-10">
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
  )
}
