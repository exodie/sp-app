import Link from 'next/link'

import { Button } from '@/shared/ui/button'
import { H1, H3, Paragraph } from '@/shared/ui/typography'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center my-auto gap-y-2">
      <H1>404</H1>
      <H3>Кажется вы забрели куда-то не туда...</H3>
      <Paragraph>Ваш запрос не может быть обработан в данный момент</Paragraph>
      <Link href="/">
        <Button>Вернуться домой</Button>
      </Link>
    </div>
  )
}
