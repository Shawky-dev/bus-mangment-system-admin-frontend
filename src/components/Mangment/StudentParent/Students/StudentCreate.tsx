import React from 'react'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '@/axiosConfig'

type Props = {}

export default function StudentCreate({}: Props) {
  const navigate = useNavigate()
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState('')

  const handleCreateStudent = async () => {
    try {
      const response = await axiosInstance.post('/auth/registerStudent', {
        name,
        email,
        password,
      })
      console.log(response)
      navigate(0) // Refresh the page
    } catch (e) {
      console.error(e)
      setError('Failed to create student. Please try again.')
    }
  }
  return (
    <div className="flex flex-col space-y-4">
      <Label>Student Name:</Label>
      <div className="flex flex-row items-center space-x-4">
        <Input
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <Label>Student Email:</Label>
      <div className="flex flex-row items-center space-x-4">
        <Input
          type="text"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={name}
        />
      </div>
      <Label>Student Password:</Label>
      <div className="flex flex-row items-center space-x-4">
        <Input
          type="text"
          id="email"
          onChange={(e) => setPassword(e.target.value)}
          value={name}
        />
      </div>
      <Button onClick={handleCreateStudent}>Create Area</Button>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  )
}
