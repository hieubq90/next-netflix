// 'use client'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

import { redirect } from 'next/navigation'

export default async function Home() {
  redirect('/browse')
  // return <div></div>
}
