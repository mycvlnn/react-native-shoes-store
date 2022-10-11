import { storeImage1, storeImage2, storeImage3, storeImage4 } from '~/assets/img'
import { IShop } from '~/models/Shops'

export const DATA_SHOP: IShop[] = [
  {
    name: 'Sneaker 1999',
    description: 'Mang cả thế giới giày về cho bạn',
    distance: 6.7,
    id: 1,
    image: storeImage1,
    openTime: '07:00-12:00',
    rating: 5,
    ratingNumber: 1000,
  },
  {
    id: 2,
    name: 'Adidas Pro',
    description: 'Ông vua giày dép',
    distance: 6.5,
    image: storeImage2,
    openTime: '07:00-18:00',
    rating: 5,
    ratingNumber: 5000,
  },
  {
    id: 3,
    name: 'Superme sport',
    description: 'Đẳng cấp với tất cả các mặt hàng dành cho người giàu',
    distance: 1.2,
    image: storeImage3,
    openTime: '07:00-22:00',
    rating: 5,
    ratingNumber: 100,
  },
  {
    id: 4,
    name: 'New Balance',
    description:
      'Những đôi giày New Balance tại Mỹ được làm thủ công một cách rất tỉ mỉ từ cách chọn chất liệu, đường may, keo dán, màu sắc…',
    distance: 1.5,
    image: storeImage4,
    openTime: '07:00-22:00',
    rating: 4.7,
    ratingNumber: 100,
  },
]
