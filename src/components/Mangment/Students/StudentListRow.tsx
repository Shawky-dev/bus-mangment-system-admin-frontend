import { TableCell, TableRow } from '@/components/ui/table'
import React from 'react'

type Props = {}

export default function StudentListRow({}: Props) {
  return (
    <TableRow>
      <TableCell className="font-medium">
        <img src="https://placehold.co/50x50/png" />
      </TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
  )
}
