import Link from 'next/link'

import { SwitchThemes } from '@/shared/ui/switch-themes'
import { Paragraph } from '@/shared/ui/typography'

export function Footer() {
  return (
    <footer className="flex flex-row items-center justify-between w-full space-x-2 px-4 md:px-6 py-2">
      <div className="flex flex-row items-center space-x-2">
        <Paragraph>Разработано: </Paragraph>
        <Link href={'https://github.com/exodie'} className='underline'>@exodie</Link>
        <Link href={'https://github.com/bracerr'} className='underline'>@bracerr</Link>
      </div>

      <div className="ml-auto mr-0">
        <SwitchThemes />
      </div>
    </footer>
  )
}
