import React from 'react'
import { TableRow, TableCell } from '../../ui/table'
import { Area } from 'public/types'

type Props = {
  area: Area
  handleAreaClick: (id: number) => void
}

export default function AreaListRow({ area, handleAreaClick }: Props) {
  return (
    <TableRow
      onClick={() => handleAreaClick(area.id)}
      className="cursor-pointer"
    >
      <TableCell className="font-medium justify-center">{area.id}</TableCell>
      <TableCell>{area.name}</TableCell>
      <TableCell>{area.students.length}</TableCell>
      <TableCell>{area.stops.length}</TableCell>
      <TableCell className="text-right">xxxx</TableCell>
    </TableRow>
  )
}
