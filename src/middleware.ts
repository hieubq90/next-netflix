// export { default } from 'next-auth/middleware'

import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    console.log('middleware', req.nextauth.token, req.nextUrl.pathname)
    if (req.nextUrl.pathname.startsWith('/admin') && !req.nextauth.token?.isAdmin) {
      return NextResponse.redirect(new URL('/browse', req.url))
    }
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        if (req.nextUrl.pathname.startsWith('/admin')) {
          return !!token
          // return token?.isAdmin === true
        } else {
          return !!token
        }
      },
    },
  }
)

export const config = {
  matcher: ['/browse', '/admin/:path*'],
}
