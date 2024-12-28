import axiosInstance from '@/axiosConfig'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from '@/components/ui/sidebar'
import { IoIosArrowDown } from 'react-icons/io'
import { FaBars } from 'react-icons/fa'

import React from 'react'
import { CiLogout, CiSettings } from 'react-icons/ci'
import { CgProfile } from 'react-icons/cg'
import NavBar from '@/components/NavBar'
import MainArea from '@/components/MainArea'

export default function Dashboard() {
  // const handledemoSecure = async () => {
  //   try {
  //     const response = await axiosInstance.get('/demo')
  //     console.log('demo ', response.data)
  //   } catch (error) {
  //     console.error('Login failed', error)
  //   }
  // }
  // const handledemoAdminSecure = async () => {
  //   try {
  //     const response = await axiosInstance.get('/admin/hi')
  //     console.log('admin demo ', response.data)
  //   } catch (error) {
  //     console.error('Login failed', error)
  //   }
  // }

  return (
    <div className="flex flex-row justify-between h-svh">
      <div className="bg-gray-100 w-2/12 p-3 flex flex-col border-gray-200 border-r-[1px]">
        <div className="flex items-center space-x-2"></div>
      </div>
      <div className="bg-gray-300 grow overflow-hidden">
        {/*  */}
        <NavBar />
        <MainArea />
      </div>
    </div>
  )
}
