/*Xử dụng để can thiệp sâu vào ref của navigation */
import { createNavigationContainerRef } from '@react-navigation/native'
import { RootStackParamList } from './types'

export const navigationRef = createNavigationContainerRef<RootStackParamList>()

export const navigate = (name: keyof RootStackParamList, params?: any) => {
  if (navigationRef.isReady()) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    navigationRef.navigate(name, params)
  }
}
