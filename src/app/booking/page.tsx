import { Label } from '@radix-ui/react-dropdown-menu'

import { FormFields } from '@/entities/booking/ui/form-fields'
import { ToggleCity } from '@/entities/booking/ui/toggle-city'
import { ToggleDate } from '@/entities/booking/ui/toggle-date'

import { Input } from '@/shared/ui/input'
import { H3, H4, Paragraph } from '@/shared/ui/typography'

export default function Booking() {
  return (
    <div className="flex flex-col gap-4 my-12">
      <div className="mx-auto text-center">
        <H3>Бронируй базу в несколько кликов</H3>
        <Paragraph>
          Выбери город, время и дату репетиции. Отправь запрос и получи подтверждение.
        </Paragraph>
      </div>

      <form className="flex flex-col gap-y-2">
        <H4>Форма</H4>

        <FormFields>
          <Label>Город</Label>
          <ToggleCity />
        </FormFields>

        <FormFields>
          <Label>Дата</Label>
          <ToggleDate />
        </FormFields>

        <FormFields>
          <Label>Время</Label>
          <FormFields>
            <Input type="time" step={'3600'} max="00:59" min="00:00" />
            <span>-</span>
            <Input type="time" step={'3600'} max="00:59" min="00:00" />
          </FormFields>
        </FormFields>
      </form>
    </div>
  )
}
