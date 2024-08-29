import Image from 'next/image'

import { PencilIcon, XIcon } from 'lucide-react'

import { ProfileCardSection } from '@/entities/profile/ui/card-section'

import { Button } from '@/shared/ui/button'
import { H4, Paragraph } from '@/shared/ui/typography'

export default function Bookings() {
  return (
    <ProfileCardSection size={'full'}>
      <div className="flex flex-col lg:flex-row lg:items-center w-full gap-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex flex-col space-y-1">
            <Paragraph aria-label="Дата брони" title="Дата брони">
              24.04.2024
            </Paragraph>
            <Paragraph aria-label="Часы брони" title="Часы брони">
              15:00 - 18:00
            </Paragraph>
          </div>

          <div className="flex flex-row flex-wrap h-fit gap-2">
            <Image
              src={'https://generated.vusercontent.net/placeholder.svg'}
              alt="logo"
              width={75}
              height={75}
              className="rounded-sm"
            />

            <div className="flex flex-col space-y-0">
              <div className="flex flex-row items-center space-y-0 space-x-2">
                <H4>Название</H4>
                <Paragraph className="text-foreground/50">Адрес</Paragraph>
              </div>
              <Paragraph>Описание</Paragraph>
            </div>

            <div className="lg:mx-2 flex flex-row lg:flex-col gap-x-2 space-y-0">
              <H4>Команда</H4>

              <Paragraph>excors</Paragraph>
            </div>
          </div>
        </div>

        <div className="lg:ml-auto lg:mr-0 flex flex-col lg:flex-row gap-2">
          <Button aria-label="Редактировать" title="Редактировать" className="gap-2">
            <PencilIcon />
            Редактировать
          </Button>
          <Button
            aria-label="Отменить"
            title="Отменить"
            variant={'outline'}
            className="gap-2"
          >
            <XIcon />
            Отменить
          </Button>
        </div>
      </div>
    </ProfileCardSection>
  )
}
