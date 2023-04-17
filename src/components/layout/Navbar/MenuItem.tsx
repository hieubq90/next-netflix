'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface MenuItemProps {
  href: any
  label: string
}

const MenuItem: React.FC<MenuItemProps> = ({ href = '#', label }) => {
  const pathname = usePathname()
  return (
    <Link
      href={href}
      className={[
        'flex h-16 cursor-pointer select-none items-center justify-center bg-black bg-opacity-20 px-3 text-center text-white hover:bg-opacity-10',
        pathname === href ? 'font-semibold' : '',
      ].join(' ')}
    >
      <span>{label}</span>
    </Link>
  )
}

export default MenuItem
