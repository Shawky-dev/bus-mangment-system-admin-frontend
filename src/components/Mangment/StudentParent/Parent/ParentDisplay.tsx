import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Table, TableBody, TableRow, TableCell } from '@/components/ui/table'
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog'
import React from 'react'
import { MdOutlineEdit } from 'react-icons/md'
import StudentEdit from '../Students/StudentEdit'

type Props = {}

export default function ParentDisplay({}: Props) {
  return (
    <Card className="w-2/6">
      <CardHeader className="pb-2 items-center">
        <CardTitle className=" text-center">Selected Parent</CardTitle>
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
              <TableCell className="font-medium">Name :</TableCell>
              <TableCell className="text-right"></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Area</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Stop</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Parent Email</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Student Email</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  )
}
