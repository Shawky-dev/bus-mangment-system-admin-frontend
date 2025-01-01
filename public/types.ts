export type Area = {
  id: number
  name: string
  routes: Array<Route>
  students: Array<Student>
}
export type Student = {
  id: number
  name: string
  email: string
  role: string
  parentId: number
  areaId: number
}
export type Parent = {
  id: number
  name: string
  email: string
  role: string
  studentId: number
}
export type Authority = {
  authority: string
}

export type Route = {}
