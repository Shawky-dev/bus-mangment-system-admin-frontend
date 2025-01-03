import { TableCell, TableRow } from '@/components/ui/table'
import { Student } from 'public/types'
import React from 'react'
import { getValueOrDefault } from '../../Areas/AreaDisplay'

type Props = {
  student: Student
  handleStudentClick: (id: number) => void
}

export default function StudentListRow({ student, handleStudentClick }: Props) {
  return (
    <TableRow
      onClick={() => handleStudentClick(student.id)}
      className="cursor-pointer"
    >
      <TableCell className="font-medium">
        <img src="https://placehold.co/50x50/png" />
      </TableCell>
      <TableCell>{getValueOrDefault(student.name)}</TableCell>
      <TableCell>{getValueOrDefault(student.email)}</TableCell>
      <TableCell>{getValueOrDefault(student.parentId)}</TableCell>
      <TableCell>{getValueOrDefault(student.areaId)}</TableCell>
      <TableCell className="text-right">
        {getValueOrDefault(student.stopId)}
      </TableCell>
    </TableRow>
  )
}
