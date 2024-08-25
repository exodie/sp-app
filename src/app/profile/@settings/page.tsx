import { ProfileCardSection } from '@/entities/profile/ui/card-section'

import { Input } from '@/shared/ui/input'
import { Label } from '@/shared/ui/label'
import { H3 } from '@/shared/ui/typography'

export default function Settings() {
  return (
    <ProfileCardSection size={'full'}>
      <H3>Настройки</H3>

      <div className="w-fit flex flex-col lg:flex-row space-y-4">
        <form className="space-y-1">
          <Label htmlFor="email">Изменить Email?</Label>
          <Input type="email" id="email" placeholder="**************" />
        </form>

        <div>
          <Label htmlFor="services">Привязанные сервисы</Label>
          <div id="services"></div>
        </div>
      </div>
    </ProfileCardSection>
  )
}
