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
import TimeSlotCreate from './TimeSlotCreate'
import { TimeSlot } from 'public/types'
import TimeSlotListRow from './TimeSlotListRow'

type Props = {
  timeSlots: Array<TimeSlot>
}

export default function TimeSlotList({ timeSlots }: Props) {
  return (
    <Card className="p-2 w-2/12">
      <Table>
        <TableCaption>
          <Dialog>
            <DialogTrigger>
              <Button>
                <IoAddCircleOutline />
                Add Time Slot
              </Button>
            </DialogTrigger>
            <DialogContent>
              <TimeSlotCreate />
            </DialogContent>
          </Dialog>
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Time Slot ID</TableHead>
            <TableHead>Time Slot Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {timeSlots.map((timeSlot) => (
            <TimeSlotListRow key={timeSlot.id} timeSlot={timeSlot} />
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}
