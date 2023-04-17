import React from 'react'
import MenuItem from './MenuItem'

interface MobileMenuProps {
  visible: Boolean
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  if (!visible) return null
  return (
    <div
      className="
        absolute
        left-0
        top-8
        flex w-56
        flex-col
        border
        border-gray-800
        bg-transparent
        py-0
      "
    >
      <div className="flex flex-col bg-transparent">
        <MenuItem
          href="/browse"
          label="Home"
        />
        <MenuItem
          href="/browse/series"
          label="Series"
        />
        <MenuItem
          href="/browse/films"
          label="Films"
        />
        <MenuItem
          href="/browse/new_popular"
          label="New & Popular"
        />
        <MenuItem
          href="/browse/my_list"
          label="My List"
        />
      </div>
    </div>
  )
}

export default MobileMenu
