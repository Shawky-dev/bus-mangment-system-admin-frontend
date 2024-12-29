import React, { useEffect, useState } from 'react'
import StudentList from './StudentList'
import StudentDisplay from './StudentDisplay'
import axiosInstance from '@/axiosConfig'
import { Student } from 'public/types'

type Props = {}

export default function StudentSection({}: Props) {
  const [students, setStudents] = useState<Array<Student>>([])
  const [selectedStudent, setSelectedStudent] = useState<number>(0)
  useEffect(() => {
    const getAllAreas = async () => {
      try {
        const response = await axiosInstance.get('/dev/admin/area')
        setStudents(response.data)
        console.log(response.data)
      } catch (error) {
        console.log('Err getting area\n' + error)
      }
    }
    getAllAreas()
  }, [])
  return (
    <div className="flex flex-col p-4 overflow-y-scroll">
      <div className="flex flex-row justify-between space-x-2">
        <StudentList />
        <StudentDisplay />
      </div>
    </div>
  )
}
