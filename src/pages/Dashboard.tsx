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

import React, { useEffect } from 'react'
import { CiLogout, CiSettings } from 'react-icons/ci'
import { CgProfile } from 'react-icons/cg'
import NavBar from '@/components/NavBar'
import MainArea from '@/components/Management'
import { useNavigate } from 'react-router-dom'
import SideBar from '@/components/SideBar'
import Management from '@/components/Management'
import ActiveRoutes from '@/components/ActiveRoutes'
import LoggedRoutes from '@/components/LoggedRoutes'

export default function Dashboard() {
  const [selected, setSelected] = React.useState(0)
  const navigate = useNavigate()
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axiosInstance.get('/auth/check')
        console.log(response.data.status)
      } catch (e) {
        console.log(e)
        navigate('/')
      }
    }
    checkAuth()
  }, [])

  return (
    <div className="flex flex-row justify-between h-svh">
      <SideBar selected={selected} setSelected={setSelected} />
      <div className="bg-gray-300 grow overflow-hidden">
        {/*  */}
        {selected === 0 && <MainArea />}
        {selected === 1 && <ActiveRoutes />}
        {selected === 2 && <LoggedRoutes />}
      </div>
    </div>
  )
}
