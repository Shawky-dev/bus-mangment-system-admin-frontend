import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import axiosInstance from '@/axiosConfig'

export default function LandingPage() {
  const navigate = useNavigate()

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axiosInstance.get('/auth/check')
        const { role } = response.data.user
        console.log(response)
        if (role === 'ADMIN') {
          navigate('/dashboard')
        } else {
          console.log('User is not an admin')
        }
      } catch (error) {
        console.log('User is not authenticated\n' + error)
      }
    }
    checkAuth()
  }, [navigate])

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to the Bus Management System
      </h1>
      <p className="text-lg mb-8">
        Please log in to access your admin profile and manage the system.
      </p>
      <div className="flex space-x-4">
        <Button onClick={() => navigate('/login')} className="w-48">
          Log In
        </Button>
        <Button onClick={() => navigate('/signup')} className="w-48">
          Sign Up
        </Button>
      </div>
    </div>
  )
}
