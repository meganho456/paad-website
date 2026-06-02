import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { searchParams, pathname } = request.nextUrl

  if (searchParams.has('page_id')) {
    const clean = new URL(pathname, request.url)
    return NextResponse.redirect(clean, { status: 301 })
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/',
}
