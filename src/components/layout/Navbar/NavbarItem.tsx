'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavbarItemProps {
  href: any
  label: string
}

const NavbarItem: React.FC<NavbarItemProps> = ({ href = '#', label }) => {
  const pathname = usePathname()
  return (
    <Link
      href={href}
      className={[
        'cursor-pointer text-white transition hover:text-gray-300',
        pathname === href ? 'font-semibold' : '',
      ].join(' ')}
    >
      <span>{label}</span>
    </Link>
  )
}

export default NavbarItem
