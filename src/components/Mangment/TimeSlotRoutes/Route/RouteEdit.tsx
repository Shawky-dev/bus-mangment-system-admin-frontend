import React, { useEffect, useState } from 'react'
import { Route, Student, Driver, Bus } from 'public/types'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
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
import { CgRemove } from 'react-icons/cg'
import { CiCirclePlus } from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '@/axiosConfig'

type Props = {
  route: Route
}

export default function RouteEdit({ route }: Props) {
  const [students, setStudents] = useState<Array<Student>>([])
  const [drivers, setDrivers] = useState<Array<Driver>>([])
  const [buses, setBuses] = useState<Array<Bus>>([])
  const [selectedStudents, setSelectedStudents] = useState<Array<Student>>(
    route.students
  )
  const [selectedDriver, setSelectedDriver] = useState<Driver | null>(null)
  const [selectedBus, setSelectedBus] = useState<Bus | null>(null)
  const [error, setError] = useState('')
  const [studentPopoverOpen, setStudentPopoverOpen] = useState(false)
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null)
  const navigate = useNavigate()

  // Fetch all necessary data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const studentsResponse = await axiosInstance.get(
          '/user/student/getAllStudents'
        )
        setStudents(studentsResponse.data.students)

        const driversResponse = await axiosInstance.get('/driver/getAllDrivers')
        setDrivers(driversResponse.data.drivers)

        const busesResponse = await axiosInstance.get('/bus/getAllBuses')
        setBuses(busesResponse.data.buses)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])
  const handleRemoveStudent = async (studentId: number) => {
    setSelectedStudents(
      selectedStudents.filter((student) => student.id !== studentId)
    )
    try {
      const response = await axiosInstance.put(
        `/route/removeStudentFromRoute/${route.id}/${studentId}`
      )
      console.log(response)
      navigate(0)
    } catch (error) {
      console.log(error)
    }
  }

  const handleAddStudent = async (student: Student) => {
    if (!selectedStudents.find((s) => s.id === student.id)) {
      setSelectedStudents([...selectedStudents, student])
    }
    setSelectedStudent(null)
    try {
      const response2 = await axiosInstance.post(
        `http://localhost:8080/route/addStudentToRoute/${route.id}/${student.id}`
      )
      console.log(response2)
      navigate(0)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex flex-col space-y-4">
      {/* Driver Section */}
      <div>
        <Label>Driver:</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full justify-start">
              {selectedDriver ? selectedDriver.name : 'Select Driver'}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0">
            <Command>
              <CommandInput placeholder="Search drivers..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup>
                  {drivers.map((driver) => (
                    <CommandItem
                      key={driver.id}
                      onSelect={() => setSelectedDriver(driver)}
                    >
                      {driver.name}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>

      {/* Bus Section */}
      <div>
        <Label>Bus:</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full justify-start">
              {selectedBus ? selectedBus.id : 'Select Bus'}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0">
            <Command>
              <CommandInput placeholder="Search buses..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup>
                  {buses.map((bus) => (
                    <CommandItem
                      key={bus.id}
                      onSelect={() => setSelectedBus(bus)}
                    >
                      {bus.id}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>

      {/* Students Section */}
      <div>
        <Label>Students:</Label>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Student ID</TableHead>
              <TableHead>Student Name</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {selectedStudents.map((student) => (
              <TableRow key={student.id}>
                <TableCell>{student.id}</TableCell>
                <TableCell>{student.name}</TableCell>
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

        {/* Custom Student Popover */}
        <Popover open={studentPopoverOpen} onOpenChange={setStudentPopoverOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full justify-start mt-2">
              <CiCirclePlus className="mr-2" />
              Add Student
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0">
            <Command>
              <CommandInput placeholder="Search students..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup>
                  {students
                    .filter(
                      (student) =>
                        !selectedStudents.find((s) => s.id === student.id)
                    )
                    .map((student) => (
                      <CommandItem
                        key={student.id}
                        onSelect={() => {
                          handleAddStudent(student)
                          setStudentPopoverOpen(false) // Close the popover after selection
                        }}
                      >
                        {student.name}
                      </CommandItem>
                    ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Update Route Button */}
    </div>
  )
}
