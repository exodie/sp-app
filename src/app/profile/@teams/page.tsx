import { ProfileCardSection } from '@/entities/profile/ui/card-section'

import { Button } from '@/shared/ui/button'
import { H3, Paragraph } from '@/shared/ui/typography'

export default function Teams() {
  return (
    <ProfileCardSection size={'full'}>
      <H3>Команда</H3>
      <Paragraph>
        Видимо у вас еще нет команды, но вы можете ее создать или вступить в открытую
      </Paragraph>

      <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-x-2 lg:space-y-0">
        <Button className="w-full lg:w-6/12">Создать</Button>
        <Button variant={'secondary'} className="w-full lg:w-6/12">
          Вступить в открытые команды
        </Button>
      </div>
    </ProfileCardSection>
  )
}
