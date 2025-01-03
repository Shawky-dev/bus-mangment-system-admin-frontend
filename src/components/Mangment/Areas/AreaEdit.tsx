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
import { CiCirclePlus } from 'react-icons/ci'
import { StudentSelectPopover } from './StudentSelectPopover'
import { StopAddPopover } from './StopAddPopover'
import { RiDeleteBin6Line } from 'react-icons/ri'
type Props = {
  area: Area
}

export default function AreaEdit({ area }: Props) {
  const [open, setOpen] = React.useState(false)
  const [areaName, setAreaName] = useState(area.name)
  const [error, setError] = useState('')
  const [err2, setErr2] = useState('')
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
  const handleDeleteStop = async (stopId: number) => {
    try {
      const response = await axiosInstance.delete(
        `/area/deleteStopFromArea?areaId=${area.id}&stopId=${stopId}`
      )
      console.log(response)
      navigate(0)
    } catch (e) {
      console.error(e)
    }
  }
  const handleAddStudent = async () => {
    if (!selectedStudent) {
      setErr2('Please select a student')
      return
    }
    try {
      const response = await axiosInstance.put('/area/addStudentToArea', null, {
        params: {
          areaId: area.id,
          studentId: selectedStudent.id,
        },
      })
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
              <TableRow key={student.id}>
                <TableCell className="font-medium">
                  {getValueOrDefault(student.id)}
                </TableCell>
                <TableCell>{getValueOrDefault(student.email)}</TableCell>
                <TableCell>{getValueOrDefault(student.name)}</TableCell>
                <TableCell>{getValueOrDefault(student.parentId)}</TableCell>
                <TableCell className="text-right">
                  {getValueOrDefault(student.stopId)}
                </TableCell>
                <TableCell className="text-right">
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
          <p className="text-sm text-muted-foreground">Add Student to Area</p>
          <StudentSelectPopover
            open={open}
            onOpenChange={setOpen}
            selectedStudent={selectedStudent}
            setSelectedStudent={setSelectedStudent}
            students={Students}
            areaId={area.id}
          />
          <Button
            className="bg-white w-10 h-10 hover:bg-green-200"
            onClick={handleAddStudent}
          >
            <CiCirclePlus className="text-green-700" />
          </Button>
        </div>
        {err2 && <p className="text-red-500">{err2}</p>}
      </div>
      <div>
        <h1>Stop List:</h1>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Stop Id</TableHead>
              <TableHead>Stop Name</TableHead>
              <TableHead>Priority</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {area.stops.map((stop) => (
              <TableRow key={stop.id}>
                <TableCell className="font-medium">
                  {getValueOrDefault(stop.id)}
                </TableCell>
                <TableCell>{getValueOrDefault(stop.name)}</TableCell>
                <TableCell>{getValueOrDefault(stop.priority)}</TableCell>
                <TableCell className="text-right">
                  <Button
                    onClick={() => handleDeleteStop(stop.id)}
                    className="bg-white w-10 h-10 hover:bg-red-200"
                  >
                    <RiDeleteBin6Line className="text-red-800 text-[20px]" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <StopAddPopover areaId={area.id} />
      </div>
    </div>
  )
}
