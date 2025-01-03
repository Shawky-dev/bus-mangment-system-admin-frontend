import { TableCell, TableRow } from '@/components/ui/table'
import { Parent } from 'public/types'
import React from 'react'
import { getValueOrDefault } from '../../Areas/AreaDisplay'

type Props = {
  parent: Parent
  handleParentClick: (id: number) => void
}

export default function ParentListRow({ parent, handleParentClick }: Props) {
  return (
    <TableRow
      onClick={() => handleParentClick(parent.id)}
      className="cursor-pointer"
    >
      <TableCell className="font-medium">
        <img src="https://placehold.co/50x50/png" />
      </TableCell>
      <TableCell>{getValueOrDefault(parent.name)}</TableCell>
      <TableCell>{getValueOrDefault(parent.email)}</TableCell>
      <TableCell>{getValueOrDefault(parent.studentId)}</TableCell>
    </TableRow>
  )
}
