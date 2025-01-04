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
import { Button } from './ui/button'

type Props = {
  selected: number
  setSelected: (selected: number) => void
}
export default function SideBar({ selected, setSelected }: Props) {
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
      <div className="flex flex-col items-center space-y-5">
        <Button
          className="text-red-500 focus:text-red-500 text-xl"
          onClick={handleLogout}
          variant="ghost"
        >
          <CiLogout style={{ height: '1.3em', width: '1.3em' }} />
        </Button>
        <Button
          variant="outline"
          className={`text-sm ${
            selected === 0 ? 'bg-gray-500 text-white hover:bg-gray-500' : ''
          }`}
          onClick={() => setSelected(0)}
        >
          Managment
        </Button>
        <Button
          variant="outline"
          className={`text-sm ${
            selected === 1 ? 'bg-gray-500 text-white hover:bg-gray-500' : ''
          }`}
          onClick={() => setSelected(1)}
        >
          Active Routes
        </Button>
        <Button
          variant="outline"
          className={`text-sm ${
            selected === 2 ? 'bg-gray-500 text-white hover:bg-gray-500' : ''
          }`}
          onClick={() => setSelected(2)}
        >
          Logged Routes
        </Button>
      </div>
    </div>
  )
}
