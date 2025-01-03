import React, { useEffect, useState } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import axiosInstance from '@/axiosConfig'
import { useNavigate } from 'react-router-dom'
import ParentStudentSelectPopover from './ParentStudentSelectPopover'
import { Student } from 'public/types'

type Props = {
  parent: Parent
}

export default function ParentEdit({ parent }: Props) {
  const navigate = useNavigate()
  const [name, setName] = useState(parent.name || '')
  const [email, setEmail] = useState(parent.email || '')
  const [password, setPassword] = useState('')
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null)
  const [students, setStudents] = useState<Student[]>([])
  const [error, setError] = useState('')

  const [popoverOpen, setPopoverOpen] = useState(false)

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axiosInstance.get('/user/student/getAllStudents')
        setStudents(response.data.students)
      } catch (error) {
        console.error('Error fetching students:', error)
      }
    }

    fetchStudents()
  }, [])

  const handleEditParent = async () => {
    try {
      const requestData = {
        name,
        email,
        password,
      }

      await axiosInstance.put(`/auth/editParent/${parent.id}`, requestData)
      navigate(0) // Refresh the page
    } catch (e) {
      console.error(e)
      setError('Failed to edit parent. Please try again.')
    }
  }
  const handleSelectStudent = async () => {
    try {
      const response = await axiosInstance.put(
        `user/parent/addStudentToParent?parentId=${parent.id}&studentId=${
          selectedStudent ? selectedStudent.id : parent.studentId
        }`
      )
      console.log(response)
      navigate(0) // Refresh the page
    } catch (error) {
      console.error('Failed to add student to parent:', error)
    }
  }

  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center">
        <h1>Edit Parent Account Information</h1>
      </div>
      <div className="flex flex-col space-y-4">
        <Label>Parent Name:</Label>
        <Input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Label>Parent Email:</Label>
        <Input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Label>Change Parent Password:</Label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleEditParent}>Edit Parent Details</Button>
        {error && <p className="text-red-500">{error}</p>}
        <Label>Assign Student:</Label>
        <ParentStudentSelectPopover
          open={popoverOpen}
          onOpenChange={setPopoverOpen}
          selectedStudent={selectedStudent}
          setSelectedStudent={setSelectedStudent}
          students={students}
        />
        <Button onClick={handleSelectStudent}>Assign Student</Button>
      </div>
    </div>
  )
}
