import React, { useEffect, useState } from 'react'
import StudentList from './Students/StudentList'
import StudentDisplay from './Students/StudentDisplay'
import axiosInstance from '@/axiosConfig'
import { Parent, Student } from 'public/types'
import ParentDisplay from './Parent/ParentDisplay'
import ParentList from './Parent/ParentList'

type Props = {}

export default function StudentSection({}: Props) {
  const [students, setStudents] = useState<Array<Student>>([])
  const [parents, setParents] = useState<Array<Parent>>([])
  const [selectedParent, setSelectedParent] = useState<Parent | null>(null)
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null)
  useEffect(() => {
    const getAllStudents = async () => {
      try {
        const response = await axiosInstance.get('/user/student/getAllStudents')
        setStudents(response.data.students)
        console.log(response.data)
      } catch (error) {
        console.log('Err getting students\n' + error)
      }
    }
    const getAllParents = async () => {
      try {
        const response = await axiosInstance.get('/user/student/getallParents')
        setParents(response.data.parents)
        console.log(response.data)
      } catch (error) {
        console.log('Err getting parents\n' + error)
      }
    }
    getAllParents()
    getAllStudents()
  }, [])
  const handleStudentClick = (id: number) => {
    setSelectedStudent(students.find((student) => student.id === id) || null)
  }
  const handleParentClick = (id: number) => {
    setSelectedParent(parents.find((parent) => parent.id === id) || null)
  }

  return (
    <div className="flex flex-col p-4 overflow-y-scroll space-y-5">
      <div className="flex flex-row justify-between space-x-2">
        <StudentList
          students={students}
          handleStudentClick={handleStudentClick}
        />
        <StudentDisplay selectedStudent={selectedStudent} />
      </div>
      <div className="flex flex-row justify-between space-x-2">
        <ParentList parents={parents} />
        <ParentDisplay />
      </div>
    </div>
  )
}
