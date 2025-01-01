import { TableCell, TableRow } from '@/components/ui/table'
import { Student } from 'public/types'
import React from 'react'

type Props = {
  student: Student
}

export default function StudentListRow({ student }: Props) {
  return (
    <TableRow>
      <TableCell className="font-medium">
        <img src="https://placehold.co/50x50/png" />
      </TableCell>
      <TableCell>{student.name}</TableCell>
      <TableCell>{student.email}</TableCell>
      <TableCell>xxxx</TableCell>
      <TableCell></TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
  )
}
