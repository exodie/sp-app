import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const protectedRoutes = ['/profile', '/booked']
const publicRoutes = ['/signin', '/signup', '/base', '/info', '/connect']

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(path)

  const cookie = cookies().get('session')?.value

  if (isProtectedRoute && !cookie) {
    return NextResponse.redirect(new URL('/signin', req.nextUrl))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/profile']
}
