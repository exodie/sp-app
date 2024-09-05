'use client'

import { useState } from 'react'

import { useSearchParams, useRouter, usePathname } from 'next/navigation'

import { Check, ChevronsUpDown } from 'lucide-react'

import { cn } from '@/shared/lib/utils'
import { Button } from '@/shared/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/shared/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover'

// Get from API later...
const cities = [
  {
    value: 'samara',
    label: 'Самара'
  },
  {
    value: 'moscow',
    label: 'Москва'
  },
  {
    value: 'saintpeterbur',
    label: 'Санкт-Петербург'
  }
]

export function ToggleCity() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const [open, setOpen] = useState(false)
  const [value, setValue] = useState<string>(searchParams.get('city') || '')

  const selectHandler = (currentValue: string) => {
    const currentUrl = new URLSearchParams(Array.from(searchParams.entries()))
    const trimValue = currentValue.trim()

    if (!trimValue) {
      currentUrl.delete('city')
    } else {
      currentUrl.set('city', currentValue)
    }

    const search = currentUrl.toString()
    const query = search ? `?${search}` : ''

    setValue(currentValue === value ? '' : currentValue)
    setOpen(false)

    router.push(`${pathname}${query}`)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-fit justify-between"
        >
          {value
            ? cities.find((city) => city.value === value)?.label
            : 'Выберите город...'}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-fit p-0">
        <Command>
          <CommandInput placeholder="Найдите город..." />
          <CommandList>
            <CommandEmpty>Город не найден.</CommandEmpty>
            <CommandGroup>
              {cities.map((city) => (
                <CommandItem
                  key={city.value}
                  value={city.value}
                  onSelect={(currentValue: string) => selectHandler(currentValue)}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === city.value ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                  {city.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
