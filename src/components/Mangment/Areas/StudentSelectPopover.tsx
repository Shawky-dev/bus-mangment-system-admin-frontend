// StudentSelectPopover.tsx
import React from 'react'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from '@/components/ui/table'
import { Student } from 'public/types'

interface StudentSelectPopoverProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  selectedStudent: Student | null
  setSelectedStudent: (student: Student | null) => void
  students: Student[]
  areaId: number
}

export function StudentSelectPopover({
  open,
  onOpenChange,
  selectedStudent,
  setSelectedStudent,
  students,
  areaId,
}: StudentSelectPopoverProps) {
  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-[150px] justify-start">
          {selectedStudent ? <>{selectedStudent.name}</> : <>+ Set Student</>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0" side="right" align="start">
        <Command>
          <CommandInput placeholder="search student by id.." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Student Id</TableHead>
                    <TableHead>Student Name</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {students
                    .filter((student) => student.areaId !== areaId)
                    .map((student) => (
                      <TableRow key={student.id}>
                        <TableCell>
                          <CommandItem
                            value={student.id.toString()}
                            onSelect={(id) => {
                              setSelectedStudent(
                                students.find(
                                  (student) => student.id === Number(id)
                                ) || null
                              )
                              onOpenChange(false)
                            }}
                          >
                            {student.id}
                          </CommandItem>
                        </TableCell>
                        <TableCell>
                          <CommandItem
                            value={student.id.toString()}
                            onSelect={(id) => {
                              setSelectedStudent(
                                students.find(
                                  (student) => student.id === Number(id)
                                ) || null
                              )
                              onOpenChange(false)
                            }}
                          >
                            {student.name}
                          </CommandItem>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
