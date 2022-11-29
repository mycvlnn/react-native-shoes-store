import { storeImage1, storeImage2, storeImage3, storeImage4 } from '~/assets/img'
import { IShoesCategory, IShop } from '~/models/Shops'
import sd1 from '~assets/img/item_shoes/sd1.jpeg'
import sd2 from '~assets/img/item_shoes/sd2.jpeg'
import sd3 from '~assets/img/item_shoes/sd3.jpeg'
import sd4 from '~assets/img/item_shoes/sd4.jpeg'
import sd5 from '~assets/img/item_shoes/sd5.jpeg'
import sd6 from '~assets/img/item_shoes/sd6.jpeg'
import sd7 from '~assets/img/item_shoes/sd7.jpeg'
import sd8 from '~assets/img/item_shoes/sd8.jpeg'
import sd9 from '~assets/img/item_shoes/sd9.jpeg'
import sd10 from '~assets/img/item_shoes/sd10.jpeg'
import se1 from '~assets/img/item_shoes/se1.jpeg'
import se2 from '~assets/img/item_shoes/se2.jpeg'
import se3 from '~assets/img/item_shoes/se3.jpeg'
import se4 from '~assets/img/item_shoes/se4.jpeg'
import se5 from '~assets/img/item_shoes/se5.jpeg'
import se6 from '~assets/img/item_shoes/se6.jpeg'
import se7 from '~assets/img/item_shoes/se7.jpeg'
import se8 from '~assets/img/item_shoes/se8.jpeg'
import se9 from '~assets/img/item_shoes/se9.jpeg'
import se10 from '~assets/img/item_shoes/se10.jpeg'

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

export const DATA_SHOES_OF_CATEGORIES: IShoesCategory[] = [
  {
    id: 101,
    name: 'Popular',
    data: [
      {
        id: 576,
        name: 'Jordan Luka 1 - Reverse Orca',
        description: 'Giày chất lượng cao',
        price: 1000,
        active: true,
        image: sd1,
      },
      {
        id: 577,
        name: 'Nike ZoomX Invincible Run Flyknit 2 WMNS ',
        description: 'Giày chính hãng',
        price: 100,
        active: true,
        image: sd2,
      },
      {
        id: 578,
        name: 'Air Jordan 1 High Retro OG - Starfish',
        description: 'Đậm chất dân chơi',
        price: 3000,
        active: true,
        image: sd3,
      },
      {
        id: 579,
        name: 'Nike Air Max 1 - Dirty Denim',
        description: 'Giày mang đẳng cấp quý tộc',
        price: 1000,
        active: true,
        image: sd4,
      },
    ],
  },
  {
    id: 102,
    name: 'Nike',
    data: [
      {
        id: 579,
        name: 'UNDEFEATED x Nike Dunk Low SP - 5 On It',
        description: 'Giày cao cấp',
        price: 1000,
        active: true,
        image: sd5,
      },
      {
        id: 580,
        name: 'Nike Dunk Low - Black Graffiti',
        description: 'Giày cao cấp, chính hãng',
        price: 100,
        active: true,
        image: sd6,
      },
      {
        id: 581,
        name: 'Nike Dunk Low - Patent Orange',
        description: 'Giày cao cấp, chính hãng',
        price: 3000,
        active: true,
        image: sd7,
      },
      {
        id: 582,
        name: 'Nike Go FlyEase - Black/White',
        description: 'Giày mang đẳng cấp quý tộc',
        price: 1000,
        active: true,
        image: sd8,
      },
    ],
  },
  {
    id: 103,
    name: 'Nike Version 2',
    data: [
      {
        id: 583,
        name: 'NOCTA x Nike Air Force 1 Low - Certified Lover',
        description: 'Giày cao cấp',
        price: 1000,
        active: true,
        image: sd9,
      },
      {
        id: 584,
        name: 'FAUST x Nike SB Dunk High - Black/Metallic Gold',
        description: 'Giày cao cấp, chính hãng thời trang',
        price: 2000,
        active: true,
        image: sd10,
      },
    ],
  },
  {
    id: 104,
    name: 'Convert medium',
    data: [
      {
        id: 10,
        name: 'Chuck 70 Counter Climate GORE-TEX',
        description: 'Giày cao cấp',
        price: 1000,
        active: true,
        image: se1,
      },
      {
        id: 11,
        name: 'Custom Chuck Taylor All Star By You',
        description: 'Giày cao cấp, chính hãng thời trang',
        price: 2000,
        active: true,
        image: se2,
      },
    ],
  },
  {
    id: 105,
    name: 'Convert vip',
    data: [
      {
        id: 12,
        name: 'Custom Chuck Taylor All Star By You',
        description: 'Giày cao cấp',
        price: 1000,
        active: true,
        image: se3,
      },
      {
        id: 13,
        name: 'Custom Chuck Taylor All Star By You',
        description: 'Giày cao cấp, chính hãng thời trang',
        price: 2000,
        active: true,
        image: se4,
      },
    ],
  },
  {
    id: 106,
    name: 'Convert legacy',
    data: [
      {
        id: 14,
        name: 'Custom Chuck Taylor All Star By You',
        description: 'Giày cao cấp',
        price: 1000,
        active: true,
        image: se5,
      },
      {
        id: 15,
        name: 'Chuck Taylor All Star CX Explore Edge Glow',
        description: 'Giày cao cấp, chính hãng thời trang',
        price: 2000,
        active: true,
        image: se6,
      },
    ],
  },
  {
    id: 107,
    name: 'Convert v3',
    data: [
      {
        id: 16,
        name: 'Run Star Legacy CX',
        description: 'Giày cao cấp',
        price: 1000,
        active: true,
        image: se7,
      },
      {
        id: 17,
        name: 'Run Star Legacy CX',
        description: 'Giày cao cấp, chính hãng thời trang',
        price: 2000,
        active: true,
        image: se8,
      },
    ],
  },
  {
    id: 108,
    name: 'Convert v1',
    data: [
      {
        id: 18,
        name: 'Custom Chuck Taylor All Star By You',
        description: 'Giày cao cấp',
        price: 1000,
        active: true,
        image: se9,
      },
      {
        id: 19,
        name: 'Custom Chuck Taylor All Star By You',
        description: 'Giày cao cấp, chính hãng thời trang',
        price: 2000,
        active: true,
        image: se10,
      },
    ],
  },
]
