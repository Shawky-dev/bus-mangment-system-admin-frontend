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
import { Parent } from 'public/types'
import ParentListRow from './ParentListRow'
import ParentCreate from './ParentCreate'

type Props = {
  parents: Array<Parent>
  handleParentClick: (id: number) => void
}

export default function ParentList({ parents, handleParentClick }: Props) {
  return (
    <Card className="p-2 grow">
      <Table>
        <TableCaption>
          <Dialog>
            <DialogTrigger>
              <Button>
                <IoAddCircleOutline />
                Add Parent
              </Button>
            </DialogTrigger>
            <DialogContent>
              <ParentCreate />
            </DialogContent>
          </Dialog>
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Parent Pic</TableHead>
            <TableHead>Parent Name</TableHead>
            <TableHead>Parent Email</TableHead>
            <TableHead>Student</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {parents.map((parent) => (
            <ParentListRow
              parent={parent}
              key={parent.id}
              handleParentClick={handleParentClick}
            />
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}
