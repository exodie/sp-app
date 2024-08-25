import type { ReactNode } from 'react'

type Props = {
  teams: ReactNode
  settings: ReactNode
  bookings: ReactNode
}

export default function ProfileLayout({ teams, settings, bookings }: Props) {
  return (
    <div className="flex flex-col space-y-4">
      {bookings}
      {settings}
      {teams}
    </div>
  )
}
