import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar'
import { CgProfile } from 'react-icons/cg'
import { CiSettings, CiLogout } from 'react-icons/ci'
import axiosInstance from '@/axiosConfig'
import { useNavigate } from 'react-router-dom'

type Props = {}

export default function NavBar({}: Props) {
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await axiosInstance.get('/api/v1/auth/logout')
      navigate('/')
    } catch (error) {
      console.log('User is not authenticated\n' + error)
    }
  }

  return (
    <div className="h-14 flex flex-row justify-between p-2 items-center bg-[#DDE6ED] shadow-[rgba(0,0,15,0.1)_5px_5px_4px_0px] border-b-[1px] border-gray-300">
      <div>center</div>
      <div>right</div>
      <div className="flex flex-row items-center space-x-4">
        {/* <div className="border-r-2 border-gray-300">&nbsp;</div> */}
        <DropdownMenu>
          <DropdownMenuTrigger className="flex flex-row space-x-1 items-center outline-none focus:outline-none">
            <Avatar className="drop-shadow-sm">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <CgProfile />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CiSettings />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-red-500 focus:text-red-500"
              onClick={handleLogout}
            >
              <CiLogout />
              LogOut
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
