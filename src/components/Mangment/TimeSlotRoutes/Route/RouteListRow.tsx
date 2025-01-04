import React from 'react'
import { TableRow, TableCell } from '@/components/ui/table'
import { Route } from 'public/types'
import { getValueOrDefault } from '../../Areas/AreaDisplay'

type Props = {
  route: Route
  handleRouteClick: (id: number) => void
}

export default function RouteListRow({ route, handleRouteClick }: Props) {
  return (
    <TableRow
      onClick={() => handleRouteClick(route.id)}
      className="cursor-pointer"
    >
      <TableCell className="font-medium">{route.id}</TableCell>
      <TableCell>{getValueOrDefault(route.timeSlot.date)}</TableCell>
      <TableCell>{getValueOrDefault(route.date)}</TableCell>
      <TableCell>{getValueOrDefault(route.status)}</TableCell>
      <TableCell>xxBusIDxx</TableCell>
      <TableCell>xxDriverxx</TableCell>
      <TableCell>{getValueOrDefault(route.students.length)}</TableCell>
      <TableCell>{getValueOrDefault(route.type)}</TableCell>
      <TableCell className="text-right">
        {getValueOrDefault(route.areaId)}
      </TableCell>
    </TableRow>
  )
}
