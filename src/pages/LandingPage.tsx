import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function LandingPage() {
  const navigate = useNavigate()

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
