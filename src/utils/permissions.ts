import type { Rationale } from 'react-native' // Cơ sở lý luận
import {
  RESULTS,
  check,
  request,
  checkNotifications,
  requestNotifications,
  AndroidPermission,
  IOSPermission,
  PermissionStatus,
} from 'react-native-permissions'

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
