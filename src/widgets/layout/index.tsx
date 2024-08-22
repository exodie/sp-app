import { PropsWithChildren } from 'react'

import Link from 'next/link'

import { Header } from '../header'

export function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col justify-between px-4 md:px-6 py-2 my-16">
        {children}
      </main>
      <footer className="flex w-full space-x-2 px-4 md:px-6 py-2">
        <Link href={'https://github.com/exodie'}>@exodie</Link>
        <Link href={'https://github.com/bracerr'}>@bracerr</Link>
      </footer>
    </>
  )
}
