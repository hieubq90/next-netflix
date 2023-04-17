'use client'
import { useCallback, useState } from 'react'
import MobileMenu from './MobileMenu'
import NavbarItem from './NavbarItem'
import { BsChevronDown, BsSearch, BsBell } from 'react-icons/bs'
import UserMenu from './UserMenu'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const toggleMenu = useCallback(() => {
    setShowMenu((current) => !current)
  }, [])
  const toggleUserMenu = useCallback(() => {
    setShowUserMenu((current) => !current)
  }, [])
  return (
    <nav className="fixed z-40 w-full">
      <div
        className="
          flex
          flex-row items-center
          bg-transparent
          px-4 py-6
          transition duration-500
          md:px-16
        "
      >
        <img
          className="h-5 lg:h-7"
          src="/imgs/logo.png"
          alt="Logo"
        />
        <div
          className="
          ml-8
          hidden
          flex-row
          gap-7
          lg:flex
        "
        >
          <NavbarItem
            href="/browse"
            label="Home"
          />
          <NavbarItem
            href="/browse/series"
            label="Series"
          />
          <NavbarItem
            href="/browse/films"
            label="Films"
          />
          <NavbarItem
            href="/browse/new_popular"
            label="New & Popular"
          />
          <NavbarItem
            href="/browse/my_list"
            label="My List"
          />
        </div>
        <div
          onClick={toggleMenu}
          className="
            relative
            ml-8 flex
            cursor-pointer
            flex-row
            items-center
            gap-2
            lg:hidden
          "
        >
          <p className="text-sm text-white">Browse</p>
          <BsChevronDown className={`text-white transition ${showMenu ? 'rotate-180' : 'rotate-0'}`} />
          <MobileMenu visible={showMenu} />
        </div>
        <div className="ml-auto flex flex-row items-center gap-7">
          <div className="cursor-pointer text-gray-200 transition hover:text-gray-300">
            <BsSearch />
          </div>
          <div className="cursor-pointer text-gray-200 transition hover:text-gray-300">
            <BsBell />
          </div>
          <div
            onClick={toggleUserMenu}
            className="relative flex cursor-pointer flex-row items-center gap-2"
          >
            <div className="h-6 w-6 overflow-hidden rounded-md lg:h-10 lg:w-10">
              <img
                src="/imgs/default-blue.png"
                alt="Avatar"
              />
            </div>
            <BsChevronDown
              className={`w-4 fill-white text-white transition ${showUserMenu ? 'rotate-180' : 'rotate-0'}`}
            />
            <UserMenu visible={showUserMenu} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
