import Link from 'next/link'
import { redirect } from 'next/navigation'

import { AuthForm } from '../form/component'

import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { H3 } from '@/shared/ui/typography'

export function SignupForm() {
  return (
    <AuthForm
      action={async (data: FormData) => {
        'use server'

        console.log(data.get('info'))

        redirect('/')
      }}
    >
      <H3>Регистрация</H3>
      <Input placeholder="Введите Email или номер телефона" />

      <Button type="submit">Зарегистрироваться</Button>
      <Link href={'/signin'}>
        <Button variant={'link'}>Войти в аккаунт</Button>
      </Link>
    </AuthForm>
  )
}
