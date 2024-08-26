import { PropsWithChildren } from 'react'

import { type Metadata } from 'next'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Авторизация | RD',
  description:
    'Войдите или зарегистрируйте аккаунт на нашем сайте чтобы воспользоваться услугами'
}

export default function AuthorizationLayout({ children }: PropsWithChildren) {
  if (cookies().get('session')) {
    return redirect('/profile')
  }

  return <section>{children}</section>
}
