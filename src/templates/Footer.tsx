import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'
import { Button, Input, Textarea } from '../components'

const base = 'flex w-full justify-center bg-violet-50' as ClassNameValue

export type FooterProps = ComponentProps<'footer'>

export function Footer({ className, ...props }: FooterProps) {
  return (
    <footer className={twMerge(base, className)} {...props}>
      <section className="flex w-full flex-col justify-center gap-12 px-6 py-16">
        <h2 className="text-3xl font-semibold">Entre em contato</h2>

        <form action="#" className="flex w-full flex-col justify-center gap-10">
          <fieldset className="flex w-full flex-col gap-6">
            <Input.Control
              required
              placeholder="Nome"
              type="text"
              name="name"
              id="name"
            />
            <Input.Control
              required
              placeholder="Email"
              type="email"
              name="email"
              id="email"
            />
            <Textarea.Control
              required
              placeholder="Assunto da mensagem"
              name="message"
              id="message"
            />
          </fieldset>
          <Button className="h-12 text-base" type="submit">
            entrar em contato
          </Button>
        </form>
      </section>
    </footer>
  )
}
