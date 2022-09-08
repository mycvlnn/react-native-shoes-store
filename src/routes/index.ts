import { RootStackParamList } from '~/navigations/types'

type Entries<T> = {
  [K in keyof T]: K
}

export const routes: Entries<RootStackParamList> = {
  Address: 'Address',
  BottomTab: 'BottomTab',
  Authen: 'Authen',
  Checkout: 'Checkout',
  EditProfile: 'EditProfile',
  Language: 'Language',
  Location: 'Location',
  NotFound: 'NotFound',
  Notifications: 'Notifications',
  OrderHistory: 'OrderHistory',
  Privacy: 'Privacy',
  ProductDetail: 'ProductDetail',
  Term: 'Term',
  TermAndCondition: 'TermAndCondition',
  YourCart: 'YourCart',
}
