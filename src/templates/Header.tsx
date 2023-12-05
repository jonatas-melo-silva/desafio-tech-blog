import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'
import Image from '../assets/image.png'

const base = 'flex w-full justify-center bg-violet-50' as ClassNameValue

export type HeaderProps = ComponentProps<'header'>

export function Header({ className, ...props }: HeaderProps) {
  return (
    <header className={twMerge(base, className)} {...props}>
      <section className="flex w-full flex-col items-center justify-center gap-6 px-6 py-16">
        <img className="h-60" src={Image} alt="image" />
        <h1 className="text-center text-2xl font-semibold leading-7">
          Encontre os <span className="text-violet-500">melhores artigos</span>{' '}
          de programação em um só lugar
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
  )
}
