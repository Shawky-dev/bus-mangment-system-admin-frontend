import React, { useEffect, useState } from 'react'
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
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../ui/card'
import { MdOutlineEdit } from 'react-icons/md'
import { RiBusFill } from 'react-icons/ri'
import { IoMdPerson } from 'react-icons/io'
import { ImLocation } from 'react-icons/im'
import AreasList from './AreasList'
import AreaDisplay from './AreaDisplay'
import axiosInstance from '@/axiosConfig'
import { get } from 'http'
import { Area } from 'public/types'
type Props = {}

export default function AreasSection({}: Props) {
  const [areas, setAreas] = useState<Array<Area>>([])
  const [selectedArea, setSelectedArea] = useState<number>(0)
  useEffect(() => {
    const getAllAreas = async () => {
      try {
        const response = await axiosInstance.get('/dev/admin/area')
        setAreas(response.data)
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
        <AreasList areas={areas} />
        <AreaDisplay />
      </div>
    </div>
  )
}
