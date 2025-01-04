import React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from '@/components/ui/card'
import { Route } from 'public/types'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { getValueOrDefault } from '../../Areas/AreaDisplay'
import { Separator } from '@/components/ui/separator'
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog'
import { MdOutlineEdit } from 'react-icons/md'
import RouteEdit from './RouteEdit'
import { Button } from '@/components/ui/button'
import axiosInstance from '@/axiosConfig'
import { useNavigate } from 'react-router-dom'

type Props = {
  selectedRoute: Route | null
}

export default function RouteDisplay({ selectedRoute }: Props) {
  const navigate = useNavigate()
  if (!selectedRoute) {
    return (
      <Card className="w-3/6 flex justify-center items-center">
        <p>No route selected</p>
      </Card>
    )
  }
  const handleStartRoute = async () => {
    try {
      const response = await axiosInstance.post(
        `route/startRoute/${selectedRoute.id}`
      )
      console.log('Route started', response.data)
      navigate(0)
    } catch (error) {
      console.error('Error starting route', error)
    }
  }

  return (
    <Card className="w-3/6">
      <CardHeader>
        <CardTitle className="text-center">Route {selectedRoute.id}</CardTitle>
        <Button className="bg-green-400 text-black" onClick={handleStartRoute}>
          Start bus
        </Button>
      </CardHeader>
      <CardDescription className="flex flex-row-reverse pl-6 pr-6 justify-between items-center">
        <Dialog>
          <DialogTrigger>
            <MdOutlineEdit className="text-[30px] hover:cursor-pointer hover:bg-gray-100 rounded-lg" />
          </DialogTrigger>
          <DialogContent className="h-[calc(100dvh-50px)] overflow-y-scroll max-w-4xl">
            <RouteEdit route={selectedRoute} />
          </DialogContent>
        </Dialog>
      </CardDescription>
      <CardContent>
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
        <Separator
          orientation="horizontal"
          className="bg-orange-900 mt-2 mb-2"
        />
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
      </CardContent>
    </Card>
  )
}
