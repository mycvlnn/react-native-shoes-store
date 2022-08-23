export interface IOrderDetailItem {
  productId: string
  quantity: number
}

export interface IOrder {
  email: string
  orderDetail: IOrderDetailItem[]
}
