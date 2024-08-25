import type { ReactNode } from 'react'

type Props = {
  teams: ReactNode
  settings: ReactNode
  bookings: ReactNode
}

export default function ProfileLayout({ teams, settings, bookings }: Props) {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-row items-center space-x-4 w-full">
        {teams}
        {settings}
      </div>

      {bookings}
    </div>
  )
}
