import React from 'react'
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from '@/components/ui/table'
import RouteListRow from './RouteListRow'
import { Route } from 'public/types'
import { Card } from '@/components/ui/card'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { IoAddCircleOutline } from 'react-icons/io5'
import AreaCreate from '../../Areas/AreaCreate'
import { Route } from 'react-router-dom'
import RouteCreate from './RouteCreate'

type Props = {
  routes: Route[]
  handleRouteClick: (id: number) => void
  selectedRoute: Route | null
}

export default function RoutesList({
  routes,
  handleRouteClick,
  selectedRoute,
}: Props) {
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
            .filter((route) => route.status === 'PENDING')
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
