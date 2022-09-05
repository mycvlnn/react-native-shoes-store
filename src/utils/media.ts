import { Permission, Platform } from 'react-native'
import { check, PERMISSIONS, Rationale, RESULTS } from 'react-native-permissions'
import { IResponseRequestPermission, requestPermission } from './permissions'

export const permisstionCamera = Platform.select({
  ios: PERMISSIONS.IOS.CAMERA,
  android: PERMISSIONS.ANDROID.CAMERA,
}) as Permission

/** func check quyền camera
 * nếu denied thì hiển thị popup mặc định hỏi quyền truy cập setting
 * còn lại trả về đúng result
 */
export const checkAndRequestCameraPermission: (
  rationale?: Rationale,
) => IResponseRequestPermission = async (rationale) => {
  const result = await check(permisstionCamera)
  switch (result) {
    case RESULTS.DENIED: {
      return requestPermission(permisstionCamera, rationale)
    }

    default:
      return result
  }
}

/** func check quyền library photo
 * nếu denied thì hiển thị popup mặc định hỏi quyền
 * trường hợp còn lại trả về đúng result
 */
export const permisstionLibrary = Platform.select({
  ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
  android: PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
}) as Permission

export const checkAndRequestLibraryPermission: (
  rationale?: Rationale,
) => IResponseRequestPermission = async (rationale) => {
  const result = await check(permisstionLibrary)
  switch (result) {
    case RESULTS.DENIED: {
      return requestPermission(permisstionLibrary, rationale)
    }

    default:
      return result
  }
}
