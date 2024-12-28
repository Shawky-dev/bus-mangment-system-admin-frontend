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

type Props = {}

export default function AreasSection({}: Props) {
  return (
    <div className="flex flex-col p-4">
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
          <CardHeader>
            <CardTitle className=" text-center">Area</CardTitle>
            <img src="https://placehold.co/200x100/png" />
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <p>Student List</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
