export interface ICartItem {
  id: number
  primaryKey: string // Dùng để phân biệt sự khác nhau đối với sản phẩm
  name: string
  shortDescription: string
  image: string
  size: number
  price: number
  quantity: number
}
