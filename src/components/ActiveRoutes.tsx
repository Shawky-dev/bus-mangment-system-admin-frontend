import axiosInstance from '@/axiosConfig'
import { Area, Route } from 'public/types'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import ActiveRoutesList from './ActiveRoutes/ActiveRoutesList'
import ActiveRoutesDisplay from './ActiveRoutes/ActiveRouteDisplay'

type Props = {}

export default function ActiveRoutes({}: Props) {
  const [areas, setAreas] = useState<Array<Area>>([])
  const [selectedArea, setSelectedArea] = useState<Area | null>(null)
  const [selectedRoute, setSelectedRoute] = useState<Route | null>(null)
  const handleRouteClick = (id: number) => {
    setSelectedRoute(
      selectedArea?.routes.find((route) => route.id === id) || null
    )
  }
  useEffect(() => {
    const fetchAreas = async () => {
      try {
        const response = await axiosInstance.get('/area/getAllAreas')
        setAreas(response.data.areas)
      } catch (error) {
        console.error('Error fetching areas:', error)
      }
    }
    fetchAreas()
  }, [])

  return (
    <div className="overflow-scroll h-full ">
      <div className="flex flex-row sticky top-0 bg-gray-100 z-10 p-3 overflow-x-scroll space-x-4">
        {areas.map((area) => (
          <Button
            variant="outline"
            className={`text-sm ${
              selectedArea === area
                ? 'bg-red-300 text-black hover:bg-red-300'
                : ''
            }`}
            onClick={() => {
              setSelectedRoute(null)
              setSelectedArea(area)
            }}
          >
            {area.name}
          </Button>
        ))}
      </div>
      <div className="m-5">
        <div className="flex flex-col p-4 overflow-y-scroll space-y-5">
          <div className="flex flex-row justify-between space-x-2">
            <ActiveRoutesList
              area={selectedArea}
              handleRouteClick={handleRouteClick}
            />
            <ActiveRoutesDisplay selectedRoute={selectedRoute} />
          </div>
        </div>
      </div>
    </div>
  )
}
