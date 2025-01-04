import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { CgProfile } from 'react-icons/cg'
import { CiSettings, CiLogout } from 'react-icons/ci'
import axiosInstance from '@/axiosConfig'
import { useNavigate } from 'react-router-dom'

type Props = {}
export default function SideBar({}: Props) {
  const navigate = useNavigate()
  const handleLogout = async () => {
    try {
      await axiosInstance.get('/auth/logout')
      navigate('/')
    } catch (error) {
      console.log('User is not authenticated\n' + error)
    }
  }
  return (
    <div className="bg-gray-100 w-1/12 p-3 flex flex-col border-gray-200 border-r-[1px]">
      <div className="flex items-center space-x-2">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex flex-row space-x-1 items-center outline-none focus:outline-none">
            <Avatar className="drop-shadow-sm">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-gray-100">
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
