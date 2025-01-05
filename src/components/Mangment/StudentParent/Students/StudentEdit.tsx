// StudentEdit.tsx
import React, { useEffect, useState } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '@/axiosConfig'
import { Button } from '@/components/ui/button'
import { AreaSelectPopover } from './AreaSelectPopover'
import { StopSelectPopover } from './StopSelectPopover'
import { RouteSelectPopover } from './RouteSelectPopover'
import { Stop, Area, Route, Student } from 'public/types'
import { Separator } from '@/components/ui/separator'

type Props = {
  student: Student
}

export default function StudentEdit({ student }: Props) {
  const navigate = useNavigate()
  const [name, setName] = useState(student.name || '')
  const [email, setEmail] = useState(student.email || '')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [error2, setError2] = useState('')
  const [selectedStop, setSelectedStop] = useState<Stop | null>(null)
  const [selectedArea, setSelectedArea] = useState<Area | null>(null)
  const [selectedRoute, setSelectedRoute] = useState<Route | null>(null)

  const [areas, setAreas] = useState<Area[]>([])

  useEffect(() => {
    const getAllAreas = async () => {
      try {
        const response = await axiosInstance.get('/area/getAllAreas')
        console.log(response.data)
        setAreas(response.data.areas)
      } catch (error) {
        console.log('Err getting area\n' + error)
      }
    }
    getAllAreas()
  }, [])

  // States to control popover visibility
  const [isStopPopoverOpen, setIsStopPopoverOpen] = useState(false)
  const [isAreaPopoverOpen, setIsAreaPopoverOpen] = useState(false)
  const [isRoutePopoverOpen, setIsRoutePopoverOpen] = useState(false)

  const handleEditStudent = async () => {
    try {
      const requestData = {
        name,
        email,
        ...(password && { password }), // Only include password if it's provided
      }

      const response = await axiosInstance.post(
        `/auth/editStudent/${student.id}`,
        requestData
      )
      console.log(response)
      navigate(0) // Refresh the page
    } catch (e) {
      console.error(e)
      setError('Failed to edit student. Please try again.')
    }
  }
  const handleSelectAreaStopRoute = async () => {
    try {
      const response = await axiosInstance.put(
        `http://localhost:8080/user/student/selectAreaStop?studentId=${student.id}&areaId=${selectedArea?.id}&stopId=${selectedStop?.id}`
      )
      const response2 = await axiosInstance.post(
        `http://localhost:8080/route/addStudentToRoute/${selectedRoute?.id}/${student.id}`
      )
      console.log(response)
      console.log(response2)
      navigate(0)
    } catch (e) {
      console.log(e)
      setError2('Failed to edit Student Stop Route')
    }
  }

  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center">
        <h1>Edit Student Account Information</h1>
      </div>
      <div>
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
              value={email}
            />
          </div>
          <Label>Change Student Password:</Label>
          <div className="flex flex-row items-center space-x-4">
            <Input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <Button
            onClick={handleEditStudent}
            className="w-40 place-self-center"
          >
            Edit Student Details
          </Button>
          {error && <p className="text-red-500">{error}</p>}
        </div>
        <Separator orientation="horizontal" className="mt-5 mb-5 bg-gray-700" />
        <div>
          <div className="flex justify-center items-center">
            <h1>Select Student Area</h1>
          </div>
          <div className="flex flex-row space-x-4 items-center mt-7">
            <Label>Select Area:</Label>
            <AreaSelectPopover
              open={isAreaPopoverOpen}
              onOpenChange={setIsAreaPopoverOpen}
              selectedArea={selectedArea}
              setSelectedArea={setSelectedArea}
              areas={areas}
            />
            {}
            {selectedArea && (
              <>
                <Label>
                  Select Stop from{' '}
                  <span className=" italic font-semibold text-base">
                    {selectedArea.name}
                  </span>
                  :
                </Label>
                <StopSelectPopover
                  open={isStopPopoverOpen}
                  onOpenChange={setIsStopPopoverOpen}
                  selectedStop={selectedStop}
                  setSelectedStop={setSelectedStop}
                  stops={selectedArea?.stops || []}
                />
                <Label>
                  Select Route From{' '}
                  <span className=" italic font-semibold text-base">
                    {selectedArea.name}
                  </span>
                  :
                </Label>
                <RouteSelectPopover
                  open={isRoutePopoverOpen}
                  onOpenChange={setIsRoutePopoverOpen}
                  selectedRoute={selectedRoute}
                  setSelectedRoute={setSelectedRoute}
                  routes={
                    selectedArea?.routes.filter(
                      (route) => route.status === 'PENDING'
                    ) || []
                  }
                />
                <div>
                  <Button
                    onClick={handleSelectAreaStopRoute}
                    className="w-40 place-self-center"
                  >
                    Edit Student Details
                  </Button>
                  {error && <p className="text-red-500">{error}</p>}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
