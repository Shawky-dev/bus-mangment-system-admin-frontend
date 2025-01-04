import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import axiosInstance from '@/axiosConfig'
import { useNavigate } from 'react-router-dom'

type Props = {}

export default function TimeSlotCreate({}: Props) {
  const navigate = useNavigate()
  const [hour, setHour] = useState<number>(12)
  const [minute, setMinute] = useState<number>(0)
  const [isAm, setIsAm] = useState<boolean>(true)
  const [err, setErr] = useState<string | null>(null)

  const handleHourChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10)
    if (value >= 1 && value <= 12) {
      setHour(value)
    }
  }

  const handleMinuteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10)
    if (value >= 0 && value <= 59) {
      setMinute(value)
    }
  }

  const toggleAmPm = () => {
    setIsAm(!isAm)
  }

  const handleSubmit = async () => {
    const formattedTime = `${hour.toString().padStart(2, '0')}:${minute
      .toString()
      .padStart(2, '0')} ${isAm ? 'AM' : 'PM'}`
    try {
      const response = await axiosInstance.post('/timeSlot/create', {
        timeSlot: formattedTime,
      })
      console.log('Time slot created', response.data)
      navigate(0)
    } catch (error) {
      console.error('Error creating time slot', error)
      setErr('Error creating time slot:' + error)
    }
  }

  return (
    <div className="p-4">
      <div className="flex flex-col space-y-4 items-center">
        <label className="text-sm font-medium">Select Time</label>
        <div className="flex space-x-2 items-center">
          {/* Hour Input */}
          <div className="flex flex-col">
            <label htmlFor="hour" className="text-xs text-gray-500">
              Hour
            </label>
            <input
              type="number"
              id="hour"
              value={hour}
              onChange={handleHourChange}
              min={1}
              max={12}
              className="p-2 border rounded-md w-16"
            />
          </div>

          {/* Minute Input */}
          <div className="flex flex-col ">
            <label htmlFor="minute" className="text-xs text-gray-500">
              Minute
            </label>
            <input
              type="number"
              id="minute"
              value={minute}
              onChange={handleMinuteChange}
              min={0}
              max={59}
              className="p-2 border rounded-md w-16"
            />
          </div>

          {/* AM/PM Toggle */}
          <div className="flex flex-col">
            <label htmlFor="am-pm" className="text-xs text-gray-500">
              AM/PM
            </label>
            <Button
              onClick={toggleAmPm}
              variant="outline"
              className="p-2 border rounded-md w-16"
            >
              {isAm ? 'AM' : 'PM'}
            </Button>
          </div>
        </div>

        {/* Submit Button */}
        <Button onClick={handleSubmit} className="mt-4">
          Submit
        </Button>
      </div>
    </div>
  )
}
