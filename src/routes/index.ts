import { AuthenTabParamList, BottomTabParamList, RootStackParamList } from '~/navigations/types'

type Entries<T> = {
  [K in keyof T]: K
}

export const routes: Entries<RootStackParamList & BottomTabParamList & AuthenTabParamList> = {
  Splash: 'Splash',
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
  AddressForm: 'AddressForm',
  PickLocation: 'PickLocation',
  Favorite: 'Favorite',
  Home: 'Home',
  Search: 'Search',
  Setting: 'Setting',
  SignIn: 'SignIn',
  SignUp: 'SignUp',
  Onboarding: 'Onboarding',
}
