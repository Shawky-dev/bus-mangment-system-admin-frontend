import { TableRow, TableCell } from '@/components/ui/table'
import { Parent } from 'public/types'
import React from 'react'

type Props = {
  parent: Parent
}

export default function ParentListRow({ parent }: Props) {
  return (
    <TableRow>
      <TableCell className="font-medium">
        <img src="https://placehold.co/50x50/png" />
      </TableCell>
      <TableCell>{parent.name}</TableCell>
      <TableCell>{parent.email}</TableCell>
      <TableCell className="text-right">student</TableCell>
    </TableRow>
  )
}
