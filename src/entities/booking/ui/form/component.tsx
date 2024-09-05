import { FormFields } from '../form-fields'
import { ToggleCity } from '../toggle-city'
import { ToggleDate } from '../toggle-date'

import { Input } from '@/shared/ui/input'
import { Label } from '@/shared/ui/label'
import { H4 } from '@/shared/ui/typography'

export function BookingForm() {
  return (
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
  )
}
