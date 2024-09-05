'use client'

import { useState } from 'react'

import { useSearchParams, usePathname, useRouter } from 'next/navigation'

import { format, parse } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'

import { useToast } from '@/shared/hooks/use-toast'
import { cn } from '@/shared/lib/utils'
import { Button } from '@/shared/ui/button'
import { Calendar } from '@/shared/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover'

export function ToggleDate() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const [date, setDate] = useState<Date>(
    searchParams.get('date')
      ? parse(searchParams.get('date') as string, 'dd.MM.yyyy', new Date())
      : new Date()
  )
  const [open, setOpen] = useState<boolean>(false)

  const { toast } = useToast()

  const selectHandler = (date: Date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const hostDate = new Date(date)

    if (hostDate < today) {
      toast({
        title: 'Ошибка при заполнении формы',
        description: 'Вы не можете указать вчерашнюю дату',
        type: 'foreground'
      })

      return
    }

    const currentUrl = new URLSearchParams(Array.from(searchParams.entries()))
    const trimValue = date.toString().trim()

    if (!trimValue) {
      currentUrl.delete('date')
    } else {
      currentUrl.set('date', format(date, 'dd.MM.yyyy'))
    }

    const search = currentUrl.toString()
    const query = search ? `?${search}` : ''

    setDate(date)
    setOpen(false)

    router.push(`${pathname}${query}`)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-[280px] justify-start text-left font-normal',
            !date && 'text-muted-foreground'
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, 'dd.MM.yyyy') : <span>Выберите день</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(day) => selectHandler(day!)}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
