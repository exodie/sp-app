import Link from 'next/link'

import { NavigationList } from '../list'

import { Button } from '@/shared/ui/button'

export function DesktopNavigation() {
  return (
    <div className="hidden mx-auto lg:flex flex-row items-center w-full space-x-4 justify-between">
      <ul className="lg:flex mx-auto lg:flex-row lg:items-center space-x-4 bg-background px-4 py-2 rounded-full">
        <NavigationList />
      </ul>

      <Link href={'/signin'}>
        <Button size={'lg'}>Войти</Button>
      </Link>
    </div>
  )
}
