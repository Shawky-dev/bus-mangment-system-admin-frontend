import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import axiosInstance from '@/axiosConfig'
import { useNavigate } from 'react-router-dom'

interface StopAddPopoverProps {
  areaId: number
}

export function StopAddPopover({ areaId }: StopAddPopoverProps) {
  const [stopName, setStopName] = useState('')
  const [stopPriority, setStopPriority] = useState(0) // State for stop priority
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleAddStop = async () => {
    if (!stopName.trim()) {
      setError('Stop name cannot be empty')
      return
    }

    try {
      const response = await axiosInstance.post('/area/addStopToArea', null, {
        params: {
          areaId: areaId,
          stopName: stopName,
          stopPriority: stopPriority, // Include stopPriority in the request
        },
      })
      console.log(response)
      navigate(0) // Refresh the page to reflect the changes
    } catch (e) {
      console.error(e)
      setError('Failed to add stop. Please try again.')
    }
  }

  return (
    <div className="flex flex-col space-y-4">
      <div>
        <Label htmlFor="stopName">Stop Name:</Label>
        <div className="flex flex-row items-center space-x-4">
          <Input
            type="text"
            id="stopName"
            placeholder="ex: Stop 1, Stop 2, etc."
            value={stopName}
            onChange={(e) => setStopName(e.target.value)}
          />
          <Input
            type="number"
            id="stopPriority"
            placeholder="Priority"
            value={stopPriority}
            min="0"
            onChange={(e) => setStopPriority(Number(e.target.value))} // Update stopPriority state
          />
          <Button onClick={handleAddStop}>Add Stop</Button>
        </div>
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  )
}
