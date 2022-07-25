// Định nghĩa kiểu dữ liệu của navigation tại đây: https://reactnavigation.org/docs/typescript/#type-checking-the-navigator
import type {
  CompositeScreenProps,
  NavigatorScreenParams,
  RouteProp,
} from '@react-navigation/native'

import type {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack'

import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs'

export type BottomTabParamList = {
  Home: undefined
  Search: undefined
  Favorite: undefined
  Setting: undefined
}

export type AuthenTabParamList = {
  SignIn: undefined
  SignUp: undefined
}

export type RootStackParamList = {
  BottomTab: NavigatorScreenParams<BottomTabParamList>
  ProductDetail: { id: string }
  Location: undefined
  EditProfile: undefined
  Language: undefined
  YourCart: undefined
  NotFound: undefined
  Authen: NavigatorScreenParams<AuthenTabParamList>
}

export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  T
>

export type HomeTabScreenProps<T extends keyof BottomTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<BottomTabParamList, T>,
  RootStackScreenProps<keyof RootStackParamList>
>

// Khi định nghĩa như thế này thì ở những nơi dùng hook useNavigation, useRoute thì ta không cần phải định nghĩa type
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface RootParamList extends RootStackParamList {}
  }
}

// Một cách khác khi sử dụng đối với useNavigation, useRoute

export type RootStackNavigationProps<T extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, T>

export type RootStackRouteProps<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>
