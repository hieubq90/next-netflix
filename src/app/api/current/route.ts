import { getServerSession } from 'next-auth/next'
import { NextResponse } from 'next/server'

import { authOptions } from '~/app/api/auth/options'
import prismadb from '~/lib/prismadb'

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || !session?.user?.email) {
      return new NextResponse(JSON.stringify({ message: 'You must be logged in.' }), {
        status: 401,
      })
    }

    const currentUser = await prismadb.user.findUnique({
      where: {
        email: session.user.email,
      },
    })

    if (!currentUser) {
      return new NextResponse(JSON.stringify({ message: 'You must be logged in.' }), {
        status: 401,
      })
    }
    return new NextResponse(JSON.stringify(currentUser), { status: 200 })
  } catch (error) {
    console.log('error', error)
    return new NextResponse(JSON.stringify({ message: 'Something went wrong' }), { status: 500 })
  }
}
