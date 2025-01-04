import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '@/axiosConfig'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

type Area = {
  id: number
  name: string
}

type TimeSlot = {
  id: number
  date: string
}

export default function RouteCreate() {
  const [areas, setAreas] = useState<Area[]>([])
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([])
  const [areaId, setAreaId] = useState<number | ''>('')
  const [date, setDate] = useState<string>('')
  const [timeSlotId, setTimeSlotId] = useState<number | ''>('')
  const [type, setType] = useState<'PICKUP' | 'DROPOFF'>('PICKUP')
  const [error, setError] = useState<string>('')
  const navigate = useNavigate()

  // Fetch all areas and time slots on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch areas
        const areasResponse = await axiosInstance.get('/area/getAllAreas')
        setAreas(areasResponse.data.areas)

        // Fetch time slots
        const timeSlotsResponse = await axiosInstance.get(
          '/timeSlot/getAllTimeSlots'
        )
        setTimeSlots(timeSlotsResponse.data.timeSlots)
      } catch (error) {
        console.error('Error fetching data:', error)
        setError('Failed to fetch areas or time slots. Please try again.')
      }
    }

    fetchData()
  }, [])

  const handleCreateRoute = async () => {
    // Validate inputs
    if (!areaId || !date || !timeSlotId || !type) {
      setError('Please fill all fields')
      return
    }

    try {
      const response = await axiosInstance.post('/route/createRoute', {
        areaId,
        date,
        timeSlotId,
        type,
      })
      console.log('Route created:', response.data)
      navigate(0) // Redirect to the routes page after creation
    } catch (error) {
      console.error('Error creating route:', error)
      setError('Failed to create route. Please try again.')
    }
  }

  return (
    <div className="flex flex-col space-y-4 p-4">
      <h1 className="text-2xl font-bold">Create New Route</h1>

      {/* Area Selection */}
      <div>
        <Label>Area:</Label>
        <Select onValueChange={(value) => setAreaId(Number(value))}>
          <SelectTrigger>
            <SelectValue placeholder="Select an area" />
          </SelectTrigger>
          <SelectContent>
            {areas.map((area) => (
              <SelectItem key={area.id} value={area.id.toString()}>
                {area.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Date Input */}
      <div>
        <Label>Date:</Label>
        <Input
          type="date"
          placeholder="Select Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      {/* Time Slot Selection */}
      <div>
        <Label>Time Slot:</Label>
        <Select onValueChange={(value) => setTimeSlotId(Number(value))}>
          <SelectTrigger>
            <SelectValue placeholder="Select a time slot" />
          </SelectTrigger>
          <SelectContent>
            {timeSlots.map((timeSlot) => (
              <SelectItem key={timeSlot.id} value={timeSlot.id.toString()}>
                {timeSlot.date}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Type Dropdown */}
      <div>
        <Label>Type:</Label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value as 'PICKUP' | 'DROPOFF')}
          className="w-full p-2 border rounded"
        >
          <option value="PICKUP">Pickup</option>
          <option value="DROPOFF">Dropoff</option>
        </select>
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Create Route Button */}
      <Button onClick={handleCreateRoute}>Create Route</Button>
    </div>
  )
}
