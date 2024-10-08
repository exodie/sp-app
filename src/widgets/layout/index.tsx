import { PropsWithChildren } from 'react'

import { Footer } from '../footer/component'
import { Header } from '../header'

export function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col px-4 md:px-6 py-2 my-16">{children}</main>
      <Footer />
    </>
  )
}
