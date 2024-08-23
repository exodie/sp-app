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
