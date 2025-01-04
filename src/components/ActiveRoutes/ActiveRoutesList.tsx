import { Area, Route } from 'public/types'
import React from 'react'
import { Card } from '../ui/card'
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import { IoAddCircleOutline } from 'react-icons/io5'
import { Button } from '../ui/button'
import RouteListRow from '../Mangment/TimeSlotRoutes/Route/RouteListRow'

type Props = {
  area: Area | null
  handleRouteClick: (id: number) => void
}

export default function ActiveRoutesList({ area, handleRouteClick }: Props) {
  if (!area) {
    return <p>No area selected</p>
  }
  return (
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
            <DialogContent></DialogContent>
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
          {area.routes
            //.filter((student) => student.areaId !== areaId)
            .filter((route) => route.status === 'IN_PROGRESS')
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
  )
}
