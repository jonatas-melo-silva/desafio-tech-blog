import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'
import Image from '../assets/image.png'
import { Button, Header as H } from '../components'

const base = '' as ClassNameValue

export type HeaderProps = ComponentProps<'header'>

export function Header({ className, ...props }: HeaderProps) {
  return (
    <H.Root className={twMerge(base, className)} {...props}>
      <H.Wrapper>
        <H.Image src={Image} alt="image" />
        <H.Title>
          Encontre os <span className="text-violet-500">melhores artigos</span>{' '}
          de programação em um só lugar
        </H.Title>
        <H.Subtitle>
          Explore o topo da programação em um só lugar! Seu destino único para
          dicas e tendências atuais.
        </H.Subtitle>
        <Button>Buscar artigos</Button>
      </H.Wrapper>
    </H.Root>
  )
}
