import React from 'react'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '@/axiosConfig'

type Props = {}

export default function ParentCreate({}: Props) {
  const navigate = useNavigate()
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState('')

  const handleCreateParent = async () => {
    try {
      const response = await axiosInstance.post('/auth/registerParent', {
        name,
        email,
        password,
      })
      console.log(response)
      navigate(0) // Refresh the page
    } catch (e) {
      console.error(e)
      setError('Failed to create parent. Please try again.')
    }
  }

  return (
    <div className="flex flex-col space-y-4">
      <Label>Parent Name:</Label>
      <div className="flex flex-row items-center space-x-4">
        <Input
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <Label>Parent Email:</Label>
      <div className="flex flex-row items-center space-x-4">
        <Input
          type="text"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <Label>Parent Password:</Label>
      <div className="flex flex-row items-center space-x-4">
        <Input
          type="text"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <Button onClick={handleCreateParent}>Create Parent</Button>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  )
}
