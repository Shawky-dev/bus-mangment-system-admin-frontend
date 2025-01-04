import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import React from 'react'
import { IoAddCircleOutline } from 'react-icons/io5'

type Props = {}

export default function TimeSlotList({}: Props) {
  return (
    <Card className="p-2 grow">
      <Table>
        <TableCaption>
          <Dialog>
            <DialogTrigger>
              <Button>
                <IoAddCircleOutline />
                Add Time Slot
              </Button>
            </DialogTrigger>
            <DialogContent></DialogContent>
          </Dialog>
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Time Slot</TableHead>
            <TableHead>Time Slot Name</TableHead>
            <TableHead>Time Slot Email</TableHead>
            <TableHead>Parent</TableHead>
            <TableHead>Area</TableHead>
            <TableHead className="text-right">Stop</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody></TableBody>
      </Table>
    </Card>
  )
}
