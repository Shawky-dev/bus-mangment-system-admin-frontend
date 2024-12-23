import axiosInstance from '@/axiosConfig'
import { Button } from '@/components/ui/button'
import React from 'react'

export default function Dashboard() {
  const handledemoSecure = async () => {
    try {
      const response = await axiosInstance.get('/demo')
      console.log('demo ', response.data)
    } catch (error) {
      console.error('Login failed', error)
    }
  }
  const handledemoAdminSecure = async () => {
    try {
      const response = await axiosInstance.get('/admin/hi')
      console.log('admin demo ', response.data)
    } catch (error) {
      console.error('Login failed', error)
    }
  }
  return (
    <div>
      Dashboard
      <Button onClick={handledemoSecure}>demo secure</Button>
      <Button onClick={handledemoAdminSecure}>demo admin secure</Button>
    </div>
  )
}
