import React, { useEffect, useState } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '@/axiosConfig'
import { Button } from '@/components/ui/button'
import { Parent } from 'public/types'
import { Separator } from '@/components/ui/separator'

type Props = {
  parent: Parent
}

export default function ParentEdit({ parent }: Props) {
  const navigate = useNavigate()
  const [name, setName] = useState(parent.name || '')
  const [email, setEmail] = useState(parent.email || '')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleEditParent = async () => {
    try {
      const requestData = {
        name,
        email,
        ...(password && { password }), // Only include password if it's provided
      }

      const response = await axiosInstance.post(
        `/auth/editParent/${parent.id}`,
        requestData
      )
      console.log(response)
      navigate(0) // Refresh the page
    } catch (e) {
      console.error(e)
      setError('Failed to edit parent. Please try again.')
    }
  }

  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center">
        <h1>Edit Parent Account Information</h1>
      </div>
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
        <Label>Change Parent Password:</Label>
        <div className="flex flex-row items-center space-x-4">
          <Input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <Button onClick={handleEditParent} className="w-40 place-self-center">
          Edit Parent Details
        </Button>
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  )
}
