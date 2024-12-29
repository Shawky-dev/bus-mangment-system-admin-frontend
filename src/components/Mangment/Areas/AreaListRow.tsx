import React from 'react'
import { TableRow, TableCell } from '../../ui/table'
import { Area } from 'public/types'

type Props = {
  area: Area
}

export default function AreaListRow({ area }: Props) {
  return (
    <TableRow>
      <TableCell className="font-medium justify-center">
        <img src="https://placehold.co/50x50/png" />
      </TableCell>
      <TableCell>{area.name}</TableCell>
      <TableCell>{area.students.length}</TableCell>
      <TableCell>{area.routes.length}</TableCell>
      <TableCell>3</TableCell>
      <TableCell className="text-right">5</TableCell>
    </TableRow>
  )
}
