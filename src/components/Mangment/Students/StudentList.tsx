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
import AreaEdit from '../Areas/AreaEdit'
import AreaListRow from '../Areas/AreaListRow'

type Props = {}

export default function StudentList({}: Props) {
  return (
    <Card className="p-2 grow">
      <Table>
        <TableCaption>
          <Dialog>
            <DialogTrigger>
              <Button>
                <IoAddCircleOutline />
                Add Area
              </Button>
            </DialogTrigger>
            <DialogContent className="h-[calc(100dvh-50px)] overflow-y-scroll max-w-4xl">
              <AreaEdit />
            </DialogContent>
          </Dialog>
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Student Pic</TableHead>
            <TableHead>Student Name</TableHead>
            <TableHead>Area</TableHead>
            <TableHead>Parent</TableHead>
            <TableHead>DropOffPickUp</TableHead>
            <TableHead className="text-right">No. of Spots</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody></TableBody>
      </Table>
    </Card>
  )
}
