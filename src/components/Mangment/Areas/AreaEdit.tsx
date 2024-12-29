import React from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { MdOutlineEdit } from 'react-icons/md'
import { Button } from '../../ui/button'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../ui/table'
type Props = {}

export default function AreaEdit({}: Props) {
  return (
    <div className="flex flex-col space-y-4">
      <img src="https://placehold.co/500x200/png" />
      <div>
        <Label htmlFor="Area Name">Area Name:</Label>
        <Input type="AreaName" id="AreaName" placeholder="{AreaName}" />
      </div>
      <div>
        <h1>Student List:</h1>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Student ID</TableHead>
              <TableHead className="w-[100px]">Student pic</TableHead>
              <TableHead>Student Name</TableHead>
              <TableHead>Stop</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
