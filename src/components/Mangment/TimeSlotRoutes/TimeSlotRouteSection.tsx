import React, { useEffect, useState } from 'react'
import TimeSlotList from './TimeSlot/TimeSlotList'
import axiosInstance from '@/axiosConfig'
import RouteList from './Route/RouteList'
import RouteDisplay from './Route/RouteDisplay'
import { Route } from 'public/types'

type Props = {}

export default function TimeSlotRouteSection({}: Props) {
  const [timeSlots, setTimeSlots] = useState([])
  useEffect(() => {
    const getTimeSlots = async () => {
      const response = await axiosInstance.get('/timeSlot/getAllTimeSlots')
      console.log('Time slots', response.data)
      setTimeSlots(response.data.timeSlots)
    }
    const getAllRoutes = async () => {
      try {
        const response = await axiosInstance.get('/route/getAllRoutes')
        console.log('Routes', response.data)
        setRoutes(response.data.routes)
      } catch (error) {
        console.error('Error fetching routes:', error)
      }
    }
    getAllRoutes()
    getTimeSlots()
  }, [])

  const [routes, setRoutes] = useState<Route[]>([])
  const [selectedRouteId, setSelectedRouteId] = useState<number>(0)
  const [selectedRoute, setSelectedRoute] = useState<Route | null>(null)

  const handleRouteClick = (id: number) => {
    setSelectedRouteId(id)
    setSelectedRoute(routes.find((route) => route.id === id) || null)
  }

  return (
    <div className="flex flex-col p-4 overflow-y-scroll space-y-5">
      <div className="flex flex-row justify-between space-x-2">
        <RouteList
          routes={routes}
          handleRouteClick={handleRouteClick}
          selectedRoute={selectedRoute}
        />
        <RouteDisplay selectedRoute={selectedRoute} />
      </div>
      <TimeSlotList timeSlots={timeSlots} />
    </div>
  )
}
