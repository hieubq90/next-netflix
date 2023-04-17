import bcrypt from 'bcrypt'
import { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'
import prismadb from '~/lib/prismadb'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { email, name, password } = body
    if (!email || !name || !password) {
      return new NextResponse(JSON.stringify({ error: 'Invalid email/name/password value' }), {
        status: 400,
      })
    }

    const existingUser = await prismadb.user.findUnique({
      where: {
        email,
      },
    })

    if (existingUser) {
      return new NextResponse(JSON.stringify({ error: 'This email has been used' }), {
        status: 422,
      })
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    const user = await prismadb.user.create({
      data: {
        email,
        name,
        hashedPassword,
        image: '',
        emailVerified: new Date(),
        isAdmin: false,
      },
    })

    return new NextResponse(JSON.stringify(user), { status: 200 })
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: 'Something went wrong' }), { status: 500 })
  }
}
