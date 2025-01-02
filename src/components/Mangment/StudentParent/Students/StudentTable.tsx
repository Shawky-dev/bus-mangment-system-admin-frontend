import React, { useEffect, useState } from 'react'
import { Student } from 'public/types'
import { columns } from './colums'
import { DataTable } from './dataTable'

async function fetchData(): Promise<Student[]> {
  // Fetch data from your API here.
  return [
    {
      id: 5,
      name: 'ahmed',
      email: '13',
      role: '13',
      parentId: 5,
      areaId: 5,
    },
    {
      id: 5,
      name: 'ahmed',
      email: '13',
      role: '13',
      parentId: 5,
      areaId: 5,
    },
    {
      id: 5,
      name: 'ahmed',
      email: '13',
      role: '13',
      parentId: 5,
      areaId: 5,
    },
    {
      id: 5,
      name: 'ahmed',
      email: '13',
      role: '13',
      parentId: 5,
      areaId: 5,
    },
    {
      id: 5,
      name: 'ahmed',
      email: '13',
      role: '13',
      parentId: 5,
      areaId: 5,
    },
    {
      id: 5,
      name: 'ahmed',
      email: '13',
      role: '13',
      parentId: 5,
      areaId: 5,
    },
    {
      id: 5,
      name: 'ahmed',
      email: '13',
      role: '13',
      parentId: 5,
      areaId: 5,
    },
    {
      id: 5,
      name: 'zhmed',
      email: '13',
      role: '13',
      parentId: 5,
      areaId: 5,
    },
    {
      id: 5,
      name: 'ahmed',
      email: '13',
      role: '13',
      parentId: 5,
      areaId: 5,
    },
    {
      id: 5,
      name: 'ahmed',
      email: '13',
      role: '13',
      parentId: 5,
      areaId: 5,
    },
    {
      id: 5,
      name: 'ahmed',
      email: '13',
      role: '13',
      parentId: 5,
      areaId: 5,
    },
    {
      id: 5,
      name: 'ahmed',
      email: '13',
      role: '13',
      parentId: 5,
      areaId: 5,
    },
    // ...
  ]
}

const StudentTable: React.FC = () => {
  const [data, setData] = useState<Student[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData()
      setData(result)
      setLoading(false)
    }

    getData()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default StudentTable
