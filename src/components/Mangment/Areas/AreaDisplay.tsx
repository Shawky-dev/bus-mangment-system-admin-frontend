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

type Props = {}

export default function AreaDisplay({}: Props) {
  return (
    <Card className="w-2/6">
      <CardHeader className="pb-2">
        <CardTitle className=" text-center">Area</CardTitle>
        <img src="https://placehold.co/200x100/png" />
      </CardHeader>
      <CardDescription className="flex flex-row-reverse pl-6 pr-6 justify-between items-center">
        <Dialog>
          <DialogTrigger>
            <MdOutlineEdit className="text-[30px] hover:cursor-pointer hover:bg-gray-100 rounded-lg" />
          </DialogTrigger>
          <DialogContent className="h-[calc(100dvh-50px)] overflow-y-scroll max-w-4xl">
            <AreaEdit />
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
                <TableHead className="w-[100px]">Stop Name</TableHead>
                <TableHead>Location</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Stop 1</TableCell>
                <TableCell>Tagamo3</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Stop 1</TableCell>
                <TableCell>Tagamo3</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <p>Student List</p>
        <div className="overflow-y-scroll h-30">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Student Name</TableHead>
                <TableHead>DropOff</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
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
