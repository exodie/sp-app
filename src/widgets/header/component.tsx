import Image from 'next/image'
import Link from 'next/link'

import { DesktopNavigation } from './ui/desktop'
import { MobileNavigation } from './ui/mobile'

export function Header() {
  return (
    <header className="w-full px-4 lg:px-6 py-2 fixed top-0">
      <nav className="flex items-center">
        <Link href={'/'}>
          <Image src={'/logo.svg'} alt="logo" width={50} height={50} />
        </Link>

        <DesktopNavigation />

        <MobileNavigation />
      </nav>
    </header>
  )
}
