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
  password: string
  role: string
  parent: string
  location: string
  enabled: boolean
  accountNonLocked: boolean
  credentialsNonExpired: boolean
  accountNonExpired: boolean
  authorities: Array<Authority>
  username: string
}
export type Authority = {
  authority: string
}

export type Route = {}
