import React, { useEffect, useState } from 'react'
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
import { Area, Student } from 'public/types'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '@/axiosConfig'
import { getValueOrDefault } from './AreaDisplay'
import { IoIosRemoveCircleOutline } from 'react-icons/io'
import { CgRemove } from 'react-icons/cg'
type Props = {
  area: Area
}

export default function AreaEdit({ area }: Props) {
  const [open, setOpen] = React.useState(false)
  const [areaName, setAreaName] = useState(area.name)
  const [error, setError] = useState('')
  const [Students, setStudents] = useState<Array<Student>>([])
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null)
  const navigate = useNavigate()

  const handleChangeAreaName = async () => {
    if (!areaName.trim()) {
      setError('Area name cannot be empty')
      return
    }

    try {
      const response = await axiosInstance.put('/area/editAreaName', null, {
        params: {
          areaId: area.id,
          name: areaName,
        },
      })
      console.log(response)
      navigate(0)
    } catch (e) {
      console.error(e)
    }
  }
  const handleRemoveStudent = async (studentId: number) => {
    try {
      const response = await axiosInstance.put(
        '/area/removeStudentFromArea',
        null,
        {
          params: {
            areaId: area.id,
            studentId: studentId,
          },
        }
      )
      console.log(response)
      navigate(0)
    } catch (e) {
      console.error(e)
    }
  }
  useEffect(() => {
    const getStudents = async () => {
      try {
        const response = await axiosInstance.get('/user/student/getAllStudents')
        console.log(response.data)
        setStudents(response.data.students)
      } catch (error) {
        console.log('Err getting students\n' + error)
      }
    }
    getStudents()
  }, [])

  return (
    <div className="flex flex-col space-y-4">
      <div>
        <Label htmlFor="Area Name">Area Name:</Label>
        <div className="flex flex-row items-center space-x-4">
          <Input
            type="AreaName"
            id="AreaName"
            placeholder="ex: Nasr City, Maadi, etc."
            value={areaName}
            onChange={(e) => setAreaName(e.target.value)}
          />
          <Button onClick={handleChangeAreaName}>Edit Name</Button>
        </div>
        {error && <p className="text-red-500">{error}</p>}
      </div>
      <div>
        <h1>Student List:</h1>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Student Id</TableHead>
              <TableHead>Student email</TableHead>
              <TableHead>Student Name</TableHead>
              <TableHead>Parent Id</TableHead>
              <TableHead className="text-right">StopId</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {area.students.map((student) => (
              <TableRow>
                <TableCell className="font-medium">
                  {getValueOrDefault(student.id)}
                </TableCell>
                <TableCell>{getValueOrDefault(student.email)}</TableCell>
                <TableCell>{getValueOrDefault(student.name)}</TableCell>
                <TableCell>{getValueOrDefault(student.parentId)}</TableCell>
                <TableCell className="text-right">
                  {getValueOrDefault(student.stopId)}
                </TableCell>
                <TableCell>
                  <Button
                    onClick={() => handleRemoveStudent(student.id)}
                    className="bg-white w-10 h-10 hover:bg-red-200"
                  >
                    <CgRemove className="text-red-800 text-[20px]" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex items-center space-x-4">
          <p className="text-sm text-muted-foreground">Status</p>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-[150px] justify-start">
                {selectedStudent ? (
                  <>{selectedStudent.name}</>
                ) : (
                  <>+ Set Student</>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0" side="right" align="start">
              <Command>
                <CommandInput placeholder="Change status..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup>
                    {Students.map((student) => (
                      <CommandItem
                        key={student.id}
                        value={student.id.toString()}
                        onSelect={(id) => {
                          setSelectedStudent(
                            Students.find(
                              (student) => student.id === Number(id)
                            ) || null
                          )
                          setOpen(false)
                        }}
                      >
                        {student.id}:{student.name}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  )
}
