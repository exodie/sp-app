import Link from 'next/link'

import { ProfileCardSection } from '@/entities/profile/ui/card-section'

import { Button } from '@/shared/ui/button'
import { Label } from '@/shared/ui/label'
import { H3 } from '@/shared/ui/typography'

export default function Settings() {
  return (
    <ProfileCardSection size={'full'}>
      <H3>Настройки</H3>

      <div className="w-fit flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
        <div className="space-y-1 flex flex-col">
          <Label htmlFor="email">Изменить Email?</Label>
          <Button>Изменить</Button>
        </div>

        <div className="space-y-1 flex flex-col">
          <Label>Изменить номер телефона?</Label>
          <Button>Изменить</Button>
        </div>

        <div className="space-y-1 flex flex-col">
          <Label htmlFor="services">Привязанные сервисы</Label>
          <div className="flex space-y-0" id="services">
            <Link href={'/connect/telegram'} target="_blank">
              Telegram
            </Link>
          </div>
        </div>
      </div>
    </ProfileCardSection>
  )
}
