import React from 'react'
import TimeSlotList from './TimeSlotList'
import RouteList from './Route/RouteList'

type Props = {}

export default function TimeSlotSection({}: Props) {
  return (
    <div className="flex flex-col p-4 overflow-y-scroll space-y-5">
      <div className="flex flex-row justify-between space-x-2">
        <TimeSlotList />
      </div>
    </div>
  )
}
