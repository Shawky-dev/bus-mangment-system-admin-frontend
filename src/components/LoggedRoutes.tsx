import React, { useEffect, useState } from 'react'
import { Card } from './ui/card'
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table'
import { Dialog, DialogTrigger, DialogContent } from '@radix-ui/react-dialog'
import { IoAddCircleOutline } from 'react-icons/io5'
import RouteCreate from './Mangment/TimeSlotRoutes/Route/RouteCreate'
import RouteListRow from './Mangment/TimeSlotRoutes/Route/RouteListRow'
import { Button } from './ui/button'
import axiosInstance from '@/axiosConfig'
import { Route } from 'public/types'
import RouteDisplay from './Mangment/TimeSlotRoutes/Route/RouteDisplay'
import ActiveRoutesDisplay from './ActiveRoutes/ActiveRouteDisplay'

type Props = {}

export default function LoggedRoutes({}: Props) {
  const [routes, setRoutes] = useState<Route[]>([])
  const [selectedRoute, setSelectedRoute] = useState<Route | null>(null)
  const handleRouteClick = (id: number) => {
    setSelectedRoute(routes.find((route) => route.id === id) || null)
  }
  useEffect(() => {
    const fetchRoutes = async () => {
      const response = await axiosInstance.get('/route/getAllRoutes')
      setRoutes(response.data.routes)
      console.log('Routes', response.data.routes)
    }
    fetchRoutes()
  }, [])
  return (
    <div className="overflow-scroll h-full ">
      <div className="p-10 flex flex-row justify-between space-x-2">
        <Card className="w-3/6">
          <Table>
            <TableCaption>
              <Dialog>
                <DialogTrigger>
                  <Button>
                    <IoAddCircleOutline />
                    Add Route
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <RouteCreate />
                </DialogContent>
              </Dialog>
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[40px]">ID</TableHead>
                <TableHead>TimeSlot</TableHead>
                <TableHead>Day-Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Bus Id</TableHead>
                <TableHead>Driver</TableHead>
                <TableHead>No.Of Students</TableHead>
                <TableHead>Type</TableHead>
                <TableHead className="text-right">Area ID</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {routes
                //.filter((student) => student.areaId !== areaId)
                .filter((route) => route.status === 'COMPLETED')
                .map((route) => (
                  <RouteListRow
                    key={route.id}
                    route={route}
                    handleRouteClick={handleRouteClick}
                  />
                ))}
            </TableBody>
          </Table>
        </Card>
        <ActiveRoutesDisplay selectedRoute={selectedRoute} />
      </div>
    </div>
  )
}
