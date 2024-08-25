import { cookies } from 'next/headers'
import Link from 'next/link'
import { redirect } from 'next/navigation'

import { AuthForm } from '../form/component'

import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { H3 } from '@/shared/ui/typography'

export function SigninForm() {
  return (
    <AuthForm
      action={async (data: FormData) => {
        'use server'

        console.log(data.get('info'))

        cookies().set('session', 'value12345', {
          httpOnly: true,
          expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          secure: true
        })

        redirect('/')
      }}
    >
      <H3>Авторизация</H3>
      <Input name="info" type="text" placeholder="Введите Email или номер телефона" />

      <Button type="submit">Войти</Button>
      <Link href={'/signup'}>
        <Button variant={'link'}>Зарегистрировать аккаунт</Button>
      </Link>
    </AuthForm>
  )
}
