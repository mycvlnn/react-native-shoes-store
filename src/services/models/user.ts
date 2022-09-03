export interface IOrderDetail {
  name: string
  alias: string
  description: string
  shortDescription: string
  image: string
}

export interface IOrderHistory {
  id: number
  date: string
  status: string | null
  email: string
  alias: string
  orderDetail: IOrderDetail[]
}

export interface IUserProfile {
  ordersHistory: IOrderHistory[]
  email: string
  name: string
  password: string
  gender: boolean
  phone: string
  facebookId: string
  deleted: boolean
  avatar: string
}
