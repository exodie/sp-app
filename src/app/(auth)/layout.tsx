import { PropsWithChildren } from 'react'

import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Авторизация | RD',
  description:
    'Войдите или зарегистрируйте аккаунт на нашем сайте чтобы воспользоваться услугами'
}

export default function AuthorizationLayout({ children }: PropsWithChildren) {
  return <section>{children}</section>
}
