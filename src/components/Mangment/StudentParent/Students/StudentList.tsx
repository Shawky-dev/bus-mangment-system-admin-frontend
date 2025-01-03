import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import React from 'react'
import { IoAddCircleOutline } from 'react-icons/io5'
import AreaEdit from '../../Areas/AreaEdit'
import { Student } from 'public/types'
import StudentListRow from './StudentListRow'
import StudentCreate from './StudentCreate'

type Props = {
  students: Array<Student>
  handleStudentClick: (id: number) => void
}

export default function StudentList({ students, handleStudentClick }: Props) {
  return (
    <Card className="p-2 grow">
      <Table>
        <TableCaption>
          <Dialog>
            <DialogTrigger>
              <Button>
                <IoAddCircleOutline />
                Add Student
              </Button>
            </DialogTrigger>
            <DialogContent>
              <StudentCreate />
            </DialogContent>
          </Dialog>
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Student Pic</TableHead>
            <TableHead>Student Name</TableHead>
            <TableHead>Student Email</TableHead>
            <TableHead>Parent</TableHead>
            <TableHead>Area</TableHead>
            <TableHead className="text-right">Stop</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student) => (
            <StudentListRow
              student={student}
              key={student.id}
              handleStudentClick={handleStudentClick}
            />
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}
