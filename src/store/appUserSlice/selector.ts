import { RootState, store } from '~/store/index'

export const appUserSelector = (state: RootState) => state.appUser

// Lấy ra thông tin user ở mọi nơi mà không cần dùng hook
export const getInforUser = () => store.getState().appUser
