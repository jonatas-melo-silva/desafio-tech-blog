import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'
import { Button, Form, Footer as F } from '../components'

const base = '' as ClassNameValue

export type FooterProps = ComponentProps<'footer'>

export function Footer({ className, ...props }: FooterProps) {
  return (
    <F.Root className={twMerge(base, className)} {...props}>
      <F.Wrapper>
        <F.Title>Entre em contato</F.Title>

        <form action="#" className="flex w-full flex-col justify-center gap-10">
          <fieldset className="flex w-full flex-col gap-6">
            <Form.Input
              required
              placeholder="Nome"
              type="text"
              name="name"
              id="name"
            />
            <Form.Input
              required
              placeholder="Email"
              type="email"
              name="email"
              id="email"
            />
            <Form.Textarea
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
      </F.Wrapper>
    </F.Root>
  )
}
