import React from 'react'
import { ImLocation } from 'react-icons/im'
import { IoMdPerson } from 'react-icons/io'
import { MdOutlineEdit } from 'react-icons/md'
import { RiBusFill } from 'react-icons/ri'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '../../ui/card'
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '../../ui/table'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import AreaEdit from './AreaEdit'
import { Area } from 'public/types'
import { get } from 'http'

type Props = {
  selectedArea: Area | null
}
export const getValueOrDefault = (
  value,
  defaultValue = <p className="italic text-gray-400 ">No Value</p>
) => (value ? value : defaultValue)

export default function AreaDisplay({ selectedArea }: Props) {
  if (!selectedArea) {
    return (
      <Card className="w-3/6 flex justify-center items-center">
        <p className="">No area selected</p>
      </Card>
    )
  }
  return (
    <Card className="w-3/6">
      <CardHeader className="pb-2">
        <CardTitle className=" text-center">{selectedArea.name}</CardTitle>
        <img src="https://placehold.co/200x100/png" />
      </CardHeader>
      <CardDescription className="flex flex-row-reverse pl-6 pr-6 justify-between items-center">
        <Dialog>
          <DialogTrigger>
            <MdOutlineEdit className="text-[30px] hover:cursor-pointer hover:bg-gray-100 rounded-lg" />
          </DialogTrigger>
          <DialogContent className="h-[calc(100dvh-50px)] overflow-y-scroll max-w-4xl">
            <AreaEdit area={selectedArea} />
          </DialogContent>
        </Dialog>

        <div className="flex flex-row">
          <RiBusFill className="text-[20px]" />
          <p>: 0</p>
        </div>
        <div className="flex flex-row">
          <IoMdPerson className="text-[20px]" />
          <p>: 0</p>
        </div>
        <div className="flex flex-row">
          <ImLocation className="text-[20px]" />
          <p>: 0</p>
        </div>
      </CardDescription>
      <CardContent>
        <p>Stop Locations</p>
        <div className="overflow-y-scroll h-30">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">id</TableHead>
                <TableHead>Stop Name</TableHead>
                <TableHead className="text-right">Priority</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {selectedArea.stops.map((stop) => (
                <TableRow>
                  <TableCell className="font-medium">
                    {getValueOrDefault(stop.id)}
                  </TableCell>
                  <TableCell>{getValueOrDefault(stop.name)}</TableCell>
                  <TableCell className="text-right">
                    {getValueOrDefault(stop.priority)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <p>Student List</p>
        <div className="overflow-y-scroll h-30">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Student id</TableHead>
                <TableHead>Student Email</TableHead>
                <TableHead>Student Name</TableHead>
                <TableHead>Student ParentId</TableHead>
                <TableHead className="text-right">Stop Id</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {selectedArea.students.map((student) => (
                <TableRow>
                  <TableCell className="font-medium">
                    {getValueOrDefault(student.id)}
                  </TableCell>
                  <TableCell>{getValueOrDefault(student.email)}</TableCell>
                  <TableCell>{getValueOrDefault(student.name)}</TableCell>
                  <TableCell>{getValueOrDefault(student.parentId)}</TableCell>
                  <TableCell className="text-right">
                    {getValueOrDefault(student.stopId)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  )
}
