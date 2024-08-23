import Link from 'next/link'

import { NavigationList } from '../list'

import { BarcodeIcon } from 'lucide-react'

import { Button } from '@/shared/ui/button'
import { Sheet, SheetTrigger, SheetContent } from '@/shared/ui/sheet'

export function MobileNavigation() {
  return (
    <div className="lg:hidden flex flex-row items-center space-x-4 ml-auto mr-0">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={'ghost'} size={'icon'}>
            <BarcodeIcon width={40} height={40} />
          </Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col items-start">
          <NavigationList />
          <Link className="text-2xl lg:text-lg lg:hover:text-gray-600" href={'/signin'}>
            Войти
          </Link>
        </SheetContent>
      </Sheet>
    </div>
  )
}
