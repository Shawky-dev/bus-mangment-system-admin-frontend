import React, { useEffect, useState } from 'react'
import StudentDisplay from './Students/StudentDisplay'
import axiosInstance from '@/axiosConfig'
import { Parent, Student } from 'public/types'
import ParentDisplay from './Parent/ParentDisplay'
import StudentTable from './Students/StudentTable'

type Props = {}

export default function StudentSection({}: Props) {
  const [students, setStudents] = useState<Array<Student>>([])
  const [selectedStudent, setSelectedStudent] = useState<number>(0)
  const [parents, setParents] = useState<Array<Parent>>([])
  const [selectParent, setSelectedParent] = useState<number>(0)
  useEffect(() => {
    const getAllStudents = async () => {
      try {
        const response = await axiosInstance.get(
          'http://localhost:8080/dev/user/getAllUsers?type=STUDENT'
        )
        setStudents(response.data.users)
        console.log(response.data)
      } catch (error) {
        console.log('Err getting students\n' + error)
      }
    }
    const getAllParents = async () => {
      try {
        const response = await axiosInstance.get(
          'http://localhost:8080/dev/user/getAllUsers?type=PARENT'
        )
        setParents(response.data.users)
        console.log(response.data)
      } catch (error) {
        console.log('Err getting parents\n' + error)
      }
    }
    getAllParents()
    getAllStudents()
  }, [])
  return (
    <div className="flex flex-col p-4 overflow-y-scroll space-y-5">
      <div className="flex flex-row justify-between space-x-2">
        <StudentTable />
        <StudentDisplay />
      </div>
      <div className="flex flex-row justify-between space-x-2">
        {/* <ParentList parents={parents} />
        <ParentDisplay /> */}
      </div>
    </div>
  )
}
