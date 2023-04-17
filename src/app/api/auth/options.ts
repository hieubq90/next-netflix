import type { NextAuthOptions } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
import { compare } from 'bcrypt'

import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prismadb from '~/lib/prismadb'

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || '',
      clientSecret: process.env.GOOGLE_SECRET || '',
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID || '',
      clientSecret: process.env.FACEBOOK_SECRET || '',
    }),
    Credentials({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            // throw new Error('Email and Password are required')
            return null
          }
          const user = await prismadb.user.findUnique({
            where: {
              email: credentials.email,
            },
          })

          if (!user || !user.hashedPassword) {
            // throw new Error('Email does not exist')
            return null
          }

          const isCorrectPassword = await compare(credentials.password, user.hashedPassword)

          if (!isCorrectPassword) {
            // throw new Error('Incorrect password')
            return null
          }

          return user
        } catch (error) {
          console.log('error')
          return null
        }
      },
    }),
  ],
  pages: {
    signIn: '/auth',
  },
  debug: process.env.NODE_ENV === 'development',
  adapter: PrismaAdapter(prismadb),
  session: {
    strategy: 'jwt',
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  callbacks: {
    session: ({ session, token }) => {
      // console.log('Session Callback', { session, token })
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          isAdmin: token.isAdmin,
        },
      }
    },
    jwt: ({ token, user }) => {
      // console.log('JWT Callback', { token, user })
      if (user) {
        const u = user as unknown as any
        return {
          ...token,
          id: u.id,
          isAdmin: u.isAdmin,
        }
      }
      return token
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}
