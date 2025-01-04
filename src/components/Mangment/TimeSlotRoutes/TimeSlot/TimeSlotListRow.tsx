import React from 'react'
import { TableRow, TableCell } from '../../../ui/table'
import { TimeSlot } from 'public/types'
import axiosInstance from '@/axiosConfig'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { RiDeleteBin6Line } from 'react-icons/ri'

type Props = {
  timeSlot: TimeSlot
}

export default function TimeSlotListRow({ timeSlot }: Props) {
  const navigate = useNavigate()
  const deleteTimeSlot = async (id: number) => {
    try {
      const response = await axiosInstance.delete(
        `/timeSlot/deleteTimeSlot/${id}`
      )
      console.log('Time slot deleted', response.data)
      navigate(0)
    } catch (error) {
      console.error('Error deleting time slot', error)
    }
  }
  return (
    <TableRow>
      <TableCell className="font-medium justify-center">
        {timeSlot.id}
      </TableCell>
      <TableCell className="flex justify-between">
        {timeSlot.date}
        <Button
          onClick={() => deleteTimeSlot(timeSlot.id)}
          className="bg-white w-10 h-10 hover:bg-red-200 "
        >
          <RiDeleteBin6Line className="text-red-800 text-[20px]" />
        </Button>
      </TableCell>
      <TableCell></TableCell>
    </TableRow>
  )
}
