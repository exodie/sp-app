import { type ReactNode } from 'react'

type Props = {
  children: ReactNode
  action: (formData: FormData) => Promise<void>
}

export function AuthForm({ children, action }: Props) {
  return (
    <form
      action={action}
      className="flex flex-col mx-auto space-y-2 max-w-md w-full my-16"
    >
      {children}
    </form>
  )
}
