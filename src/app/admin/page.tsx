// 'use client'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '~/app/api/auth/options'

export default async function AdminPage() {
  // redirect('/browse')
  return <div>ADMIN</div>
}
