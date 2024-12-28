import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card'
import { MdOutlineEdit } from 'react-icons/md'
import { RiBusFill } from 'react-icons/ri'
import { IoMdPerson } from 'react-icons/io'
import { ImLocation } from 'react-icons/im'
type Props = {}

export default function AreasSection({}: Props) {
  return (
    <div className="flex flex-col p-4 overflow-y-scroll">
      <div className="flex flex-row justify-between space-x-2">
        <Card className="p-2 grow">
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Area Location</TableHead>
                <TableHead>Area Name</TableHead>
                <TableHead>No. of Students</TableHead>
                <TableHead>No. of Buses</TableHead>
                <TableHead>No. of Buses</TableHead>
                <TableHead className="text-right">No. of Spots</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium justify-center">
                  <img src="https://placehold.co/50x50/png" />
                </TableCell>
                <TableCell>Tagamo3</TableCell>
                <TableCell>40</TableCell>
                <TableCell>3</TableCell>
                <TableCell>3</TableCell>
                <TableCell className="text-right">5</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium justify-center">
                  <img src="https://placehold.co/50x50/png" />
                </TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
        <Card className="w-2/6">
          <CardHeader className="pb-2">
            <CardTitle className=" text-center">Area</CardTitle>
            <img src="https://placehold.co/200x100/png" />
          </CardHeader>
          <CardDescription className="flex flex-row-reverse pl-6 pr-6 justify-between items-center">
            <MdOutlineEdit className="text-[30px] hover:cursor-pointer hover:bg-gray-100 rounded-lg" />
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
      </div>
    </div>
  )
}
