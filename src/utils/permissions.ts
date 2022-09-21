import { Platform, Rationale } from 'react-native' // Rationale:  Cơ sở lý luận
import {
  RESULTS,
  check,
  request,
  checkNotifications,
  requestNotifications,
  AndroidPermission,
  IOSPermission,
  PermissionStatus,
  PERMISSIONS,
} from 'react-native-permissions'

import Geolocation, { GeolocationResponse } from '@react-native-community/geolocation'

// Migrating from the core react-native module
Geolocation.setRNConfiguration({
  skipPermissionRequests: true, // Trong trường hợp là true. bạn phải yêu cầu quyền trước khi sử dụng API vị trí địa lý.
  authorizationLevel: 'whenInUse',
})
export interface IPayloadRequestPermission {
  permission: AndroidPermission | IOSPermission
  needRequest?: boolean
}

export type IResponseRequestPermission = Promise<PermissionStatus>

// Function yêu cầu quền gì đó ví dụ như quền mở thư mục ảnh
// Tham khảo: https://github.com/zoontek/react-native-permissions#request
export const requestPermission: (
  permission: AndroidPermission | IOSPermission,
  rationale?: Rationale,
) => Promise<'blocked' | 'granted'> = async (permission, rationale) => {
  const result = await request(permission, rationale)
  if (result === RESULTS.GRANTED) return result
  return RESULTS.BLOCKED
}

/**
 * func kiểm tra xem có quền hay không
 *  trong trường hợp denied : và
 */
export const checkPermission: (
  payload: IPayloadRequestPermission,
) => IResponseRequestPermission = async ({ permission, needRequest }) => {
  const result = await check(permission)
  switch (result) {
    case RESULTS.DENIED: {
      if (!needRequest) return RESULTS.BLOCKED // Trong trường hợp không yêu cầu => trả về status blocked
      return requestPermission(permission) // Trong trường hợp yêu cầu request => granted | blocked
    }
    default:
      return result // "unavailable" | "blocked" | "granted" | "limited"
  }
}

//  Khi nào làm đến phần push notification thì sẽ giải thích cái này sau:
export const requestNotificationPermission = async () => {
  const { status } = await requestNotifications(['alert', 'sound', 'badge', 'criticalAlert'])
  return status
}

export const checkNotificationPermission: () => IResponseRequestPermission = async () => {
  const { status } = await checkNotifications()
  switch (status) {
    case RESULTS.DENIED: {
      return requestNotificationPermission()
    }
    default:
      return status
  }
}

//============ LOCATION - PERMISSION ==================

const locationPermission = Platform.select({
  ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
  android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
}) as AndroidPermission | IOSPermission

export const checkAndRequestLocationPermission: (
  rationale?: Rationale,
) => IResponseRequestPermission = async (rationale) => {
  const result = await check(locationPermission)
  switch (result) {
    case RESULTS.DENIED:
      return requestPermission(locationPermission, rationale)

    default:
      return result
  }
}

// Hàm xử lý lấy vị trí hiện tại
export const getCurrentLocation: () => Promise<GeolocationResponse> = () => {
  return new Promise<GeolocationResponse>((resolve, reject) => {
    Geolocation.getCurrentPosition(
      (success) => {
        resolve(success)
      },
      (error) => {
        reject(error)
      },
      {
        enableHighAccuracy: Platform.OS === 'ios',
        timeout: 30000,
        maximumAge: 36000,
      },
    )
  })
}
