import { useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { Route } from 'public/types'
import axiosInstance from '@/axiosConfig'
import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table'
import { MdOutlineEdit } from 'react-icons/md'
import { getValueOrDefault } from '../Mangment/Areas/AreaDisplay'
import RouteEdit from '../Mangment/TimeSlotRoutes/Route/RouteEdit'
import { Separator } from '../ui/separator'
import { LuFlag, LuFlagOff } from 'react-icons/lu'

type Props = {
  selectedRoute: Route | null
}

export default function ActiveRoutesDisplay({ selectedRoute }: Props) {
  const navigate = useNavigate()
  const [stopPosition, setStopPosition] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)
  useEffect(() => {
    if (selectedRoute && selectedRoute.stopPosition !== null) {
      const currentStop = selectedRoute.stops.find(
        (s) => s.id === selectedRoute.stopPosition
      )
      if (currentStop) {
        setStopPosition(currentStop.priority)
      } else {
        setStopPosition(null)
      }
    } else {
      setStopPosition(null)
    }
  }, [selectedRoute])

  if (!selectedRoute) {
    return (
      <Card className="w-3/6 flex justify-center items-center">
        <p>No route selected</p>
      </Card>
    )
  }

  const handleCompleteRoute = async () => {
    try {
      const response = await axiosInstance.put(
        `/route/completeRouteStop/${selectedRoute.id}`
      )
      console.log('Route Completed', response.data)
      navigate(0)
    } catch (error) {
      console.error('Error completing route', error)
      setError(error.response.data.message)
    }
  }

  const handleUpdateStopPosition = async (stopId: number) => {
    try {
      const response = await axiosInstance.put(
        `/route/updateRouteStopPosition/${selectedRoute.id}/${stopId}`
      )
      console.log('Stop Position Updated', response.data)

      // Update stopPosition with the new priority
      const updatedStop = selectedRoute.stops.find((stop) => stop.id === stopId)
      if (updatedStop) {
        setStopPosition(updatedStop.priority)
      }
    } catch (error) {
      console.error('Error updating stop position', error)
    }
  }

  return (
    <Card className="w-3/6">
      <CardHeader>
        <CardTitle className="text-center">
          <div>Route {selectedRoute.id}</div>
        </CardTitle>
        {selectedRoute.status === 'IN_PROGRESS' && (
          <Button
            className="bg-green-400 text-black"
            onClick={handleCompleteRoute}
          >
            Complete Route
          </Button>
        )}
        {error && <p className="text-red-500">{error}</p>}
      </CardHeader>
      <Separator orientation="horizontal" className="bg-orange-900" />
      <div className="flex flex-col items-center pt-3">
        <h1>Edit Stop Position below</h1>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[20px]">id</TableHead>
              <TableHead>name</TableHead>
              <TableHead>priority</TableHead>
              <TableHead>status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {selectedRoute.stops
              .sort((a, b) => a.priority - b.priority)
              .map((stop) => (
                <TableRow key={stop.id}>
                  <TableCell>{stop.id}</TableCell>
                  <TableCell>{stop.name}</TableCell>
                  <TableCell>{stop.priority}</TableCell>
                  <TableCell>
                    {stopPosition !== null && stop.priority <= stopPosition
                      ? 'Completed'
                      : 'Pending'}
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => handleUpdateStopPosition(stop.id)}
                      disabled={
                        stopPosition !== null && stop.priority <= stopPosition
                      }
                      className={
                        stopPosition !== null && stop.priority <= stopPosition
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-green-500 hover:bg-green-600'
                      }
                    >
                      {stopPosition !== null &&
                      stop.priority <= stopPosition ? (
                        <LuFlagOff />
                      ) : (
                        <LuFlag />
                      )}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
      <Separator orientation="horizontal" className="bg-orange-900" />
      <Table>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Id :</TableCell>
            <TableCell className="text-right">
              {getValueOrDefault(selectedRoute.id)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">TimeSlot :</TableCell>
            <TableCell className="text-right">
              {getValueOrDefault(selectedRoute.timeSlot.date)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Type :</TableCell>
            <TableCell className="text-right">
              {getValueOrDefault(selectedRoute.type)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Status :</TableCell>
            <TableCell className="text-right">
              {getValueOrDefault(selectedRoute.status)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Area :</TableCell>
            <TableCell className="text-right">
              {getValueOrDefault(selectedRoute.areaId)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Driver :</TableCell>
            <TableCell className="text-right">
              {getValueOrDefault(selectedRoute.driverId)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Bus :</TableCell>
            <TableCell className="text-right">
              {getValueOrDefault(selectedRoute.busId)}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Separator orientation="horizontal" className="bg-orange-900 mt-2 mb-2" />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[20px]">id</TableHead>
            <TableHead>name</TableHead>
            <TableHead>email</TableHead>
            <TableHead>stop Id</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {selectedRoute.students.map((student) => (
            <TableRow key={student.id}>
              <TableCell>{student.id}</TableCell>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.email}</TableCell>
              <TableCell>{student.stopId}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}
