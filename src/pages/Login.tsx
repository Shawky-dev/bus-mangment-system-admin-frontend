import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import axiosInstance from '../axiosConfig'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await axiosInstance.post('/auth/authenticateAdmin', {
        email,
        password,
      })
      console.log('Login successful', response.data)
      // Navigate to another page on successful login
      navigate('/dashboard')
    } catch (error) {
      console.error('Login failed', error)
      setError('Invalid email or password')
    }

    console.log('Logging in with', email, password)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email:
            </label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password:
            </label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            {error && <p className="text-red-500">{error}</p>}
            <Button
              type="submit"
              className="w-full px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Login
            </Button>
            <div className="align-center text-center">
              don't have an account?{' '}
              <Link to="/signup" className="text-blue-500 hover:underline">
                Sign up
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
