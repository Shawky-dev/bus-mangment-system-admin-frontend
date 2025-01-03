import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import axiosInstance from '@/axiosConfig'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@radix-ui/react-dropdown-menu'

type Props = {}

export default function AreaCreate({}: Props) {
  const [areaName, setAreaName] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleCreateArea = async () => {
    if (!areaName.trim()) {
      setError('Area name cannot be empty')
      return
    }

    try {
      const response = await axiosInstance.post('/area/createArea', {
        name: areaName,
      })
      console.log(response)
      navigate(0) // Refresh the page
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className="flex flex-col space-y-4">
      <Label>Area Name:</Label>
      <div className="flex flex-row items-center space-x-4">
        <Input
          type="text"
          id="AreaName"
          placeholder="ex: Nasr City, Maadi, etc."
          onChange={(e) => setAreaName(e.target.value)}
          value={areaName}
        />
        <Button onClick={handleCreateArea}>Create Area</Button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  )
}
