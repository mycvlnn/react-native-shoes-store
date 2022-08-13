import { ICategory } from './category'

export interface IBaseItemProduct {
  id: number
  name: string
  alias: string
  price: number
  feature: boolean
  description: string
  shortDescription: string
  image: string
}

export interface IProductDetail extends IBaseItemProduct {
  size: string[]
  quantity: number
  categories: ICategory[]
  relatedProducts: IBaseItemProduct[]
}
