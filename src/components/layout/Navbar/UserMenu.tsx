import { useRouter } from 'next/navigation'
import { signOut } from 'next-auth/react'
import React from 'react'

import useCurrentUser from '~/hooks/useCurrentUser'
import MenuItem from './MenuItem'

interface UserMenuProps {
  visible?: boolean
}

const UserMenu: React.FC<UserMenuProps> = ({ visible }) => {
  const { data: currentUser } = useCurrentUser()

  if (!visible) {
    return null
  }

  return (
    <div className="absolute right-0 top-14 flex w-56 flex-col border border-gray-800">
      <div className="flex flex-col gap-3 bg-transparent">
        <div className="flex w-full flex-row items-center gap-3 bg-black bg-opacity-20 px-3 py-5 hover:bg-opacity-10">
          <img
            className="w-7 rounded-md"
            src="/imgs/default-blue.png"
            alt=""
          />
          <p className="text-sm text-white group-hover/item:underline">{currentUser?.name}</p>
        </div>
      </div>
      <hr className="my-0 h-px border-0 bg-gray-600" />
      {currentUser?.isAdmin ? (
        <>
          <MenuItem
            href="/admin"
            label="Administators"
          />
          <hr className="my-0 h-px border-0 bg-gray-600" />
        </>
      ) : null}
      <div
        onClick={() => signOut()}
        className="bg-black bg-opacity-20 px-3 py-6 text-center text-sm text-white hover:bg-opacity-10"
      >
        Sign out
      </div>
    </div>
  )
}

export default UserMenu
