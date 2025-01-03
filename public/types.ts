export type Area = {
  id: number
  name: string
  students: Array<Student>
  routes: Array<Route>
  stops: Array<Stop>
}

export type Student = {
  id: number
  name: string
  email: string
  role: string
  parentId: number
  areaId: number
  routeId: number
  stopId: number
}

export type Parent = {
  id: number
  name: string
  email: string
  role: string
  studentId: number
}

export type Stop = {
  id: number
  name: string
  priority: number
  AreaId: number
}

export type Route = {
  id: number
  date: string
  timeSlot: TimeSlot
  type: RouteType
  status: RouteStatus
  areaId: number
  students: Array<Student>
  stops: Array<Stop>
}

export type TimeSlot = {
  id: number
  date: string
}

export type RouteType = 'PICKUP' | 'DROPOFF'

export type RouteStatus = 'PENDING' | 'IN_PROGRESS' | 'COMPLETED'

export type Admin = {
  id: number
  name: string
  role: string
  email: string
}

export type Driver = {
  id: number
  name: string
  email: string
  role: string
  driverLicense: number
}
