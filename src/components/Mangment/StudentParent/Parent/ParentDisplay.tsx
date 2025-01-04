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
import ParentEdit from './ParentEdit'
import { Parent } from 'public/types'
import { getValueOrDefault } from '../../Areas/AreaDisplay'

type Props = {
  selectedParent: Parent | null
}

export default function ParentDisplay({ selectedParent }: Props) {
  if (!selectedParent)
    return (
      <Card className="w-3/6 flex justify-center items-center">
        <p className="">No Parent selected</p>
      </Card>
    )

  return (
    <Card className="w-3/6">
      <CardHeader className="pb-2 items-center">
        <CardTitle className=" text-center">{selectedParent.name}</CardTitle>
      </CardHeader>
      <CardDescription className="flex flex-row-reverse pl-6 pr-6 justify-between items-center">
        <Dialog>
          <DialogTrigger>
            <MdOutlineEdit className="text-[30px] hover:cursor-pointer hover:bg-gray-100 rounded-lg" />
          </DialogTrigger>
          <DialogContent className="h-[calc(100dvh-50px)] overflow-y-scroll max-w-4xl">
            <ParentEdit parent={selectedParent} />
          </DialogContent>
        </Dialog>
      </CardDescription>
      <CardContent>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Id :</TableCell>
              <TableCell className="text-right">
                {getValueOrDefault(selectedParent.id)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Name :</TableCell>
              <TableCell className="text-right">
                {getValueOrDefault(selectedParent.name)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Email :</TableCell>
              <TableCell className="text-right">
                {getValueOrDefault(selectedParent.email)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Student :</TableCell>
              <TableCell className="text-right">
                {getValueOrDefault(selectedParent.studentId)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
