import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableCaption,
} from '@/components/ui/table'
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog'
import React from 'react'
import { MdOutlineEdit } from 'react-icons/md'
import StudentEdit from './StudentEdit'
import { Student } from 'public/types'
import { getValueOrDefault } from '../../Areas/AreaDisplay'

type Props = {
  selectedStudent: Student | null
}

export default function StudentDisplay({ selectedStudent }: Props) {
  if (!selectedStudent)
    return (
      <Card className="w-3/6 flex justify-center items-center">
        <p className="">No Student selected</p>
      </Card>
    )
  return (
    <Card className="w-3/6">
      <CardHeader className="pb-2 items-center">
        <CardTitle className=" text-center">{selectedStudent.name}</CardTitle>
        <img src="https://placehold.co/50x50/png" className="h-52 w-52" />
      </CardHeader>
      <CardDescription className="flex flex-row-reverse pl-6 pr-6 justify-between items-center">
        <Dialog>
          <DialogTrigger>
            <MdOutlineEdit className="text-[30px] hover:cursor-pointer hover:bg-gray-100 rounded-lg" />
          </DialogTrigger>
          <DialogContent className="h-[calc(100dvh-50px)] overflow-y-scroll max-w-4xl">
            <StudentEdit />
          </DialogContent>
        </Dialog>
      </CardDescription>
      <CardContent>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Id :</TableCell>
              <TableCell className="text-right">
                {getValueOrDefault(selectedStudent.id)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Name :</TableCell>
              <TableCell className="text-right">
                {getValueOrDefault(selectedStudent.name)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Area</TableCell>
              <TableCell className="text-right">
                {getValueOrDefault(selectedStudent.areaId)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Stop</TableCell>
              <TableCell className="text-right">
                {getValueOrDefault(selectedStudent.stopId)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Route</TableCell>
              <TableCell className="text-right">
                {getValueOrDefault(selectedStudent.routeId)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Parent Email</TableCell>
              <TableCell className="text-right">
                {getValueOrDefault(selectedStudent.parentId)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Student Email</TableCell>
              <TableCell className="text-right">
                {getValueOrDefault(selectedStudent.email)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
