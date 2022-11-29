import { ImageSourcePropType } from 'react-native'

export interface IShop {
  id: string | number
  name: string
  description: string
  distance: number
  rating: number
  image: ImageSourcePropType
  ratingNumber: number
  openTime: string
}

export interface IShopDetail extends IShop {
  lat: number
  long: number
  products: string[]
}

export interface IShoesItem {
  id: string | number
  image: ImageSourcePropType
  name: string
  description: string
  price: number
  active: boolean
}

export interface IShoesCategory {
  id: string | number
  name: string
  data: IShoesItem[]
}
