import Link from 'next/link'

import { ProfileCardSection } from '@/entities/profile/ui/card-section'

import { Input } from '@/shared/ui/input'
import { Label } from '@/shared/ui/label'
import { H3 } from '@/shared/ui/typography'

export default function Settings() {
  return (
    <ProfileCardSection size={'full'}>
      <H3>Настройки</H3>

      <div className="w-fit flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
        <form className="space-y-1">
          <Label htmlFor="email">Изменить Email?</Label>
          <Input type="email" id="email" placeholder="**************" />
        </form>

        <form className="space-y-1">
          <Label>Изменить номер телефона?</Label>
          <Input type="tel" id="phoneNumber" placeholder="+7**********" />
        </form>

        <div>
          <Label htmlFor="services">Привязанные сервисы</Label>
          <div className="flex space-y-0" id="services">
            <Link href={'/connect/telegram'} target="_blank" className=''>
              Telegram
            </Link>
          </div>
        </div>
      </div>
    </ProfileCardSection>
  )
}
