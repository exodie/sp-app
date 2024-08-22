import Link from 'next/link'

import { navHrefs } from '@/shared/constants/nav-hrefs'
import { Paragraph } from '@/shared/ui/typography'

export function NavigationList() {
  return navHrefs.map(({ title, href }, index) => (
    <Link href={href} key={index}>
      <Paragraph className="text-2xl lg:text-lg lg:hover:text-gray-600">{title}</Paragraph>
    </Link>
  ))
}
