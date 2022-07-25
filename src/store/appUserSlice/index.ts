import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { UserProfile } from '~/services/models'

// Define a type for the slice state
interface AppUserState extends UserProfile {
  localeCode?: string
  accessToken?: string | null
  isLogin?: boolean
}

const initialState: AppUserState = {
  localeCode: 'en',
  accessToken: null,
  name: '',
  email: '',
  phone: '',
  isLogin: false,
}

export const appUserSlice = createSlice({
  name: 'appUser',
  initialState,
  reducers: {
    saveInfoUser: (state, action: PayloadAction<AppUserState>) => ({ ...state, ...action.payload }),
    logoutUser: () => initialState,
  },
})

export const { saveInfoUser, logoutUser } = appUserSlice.actions

export default appUserSlice.reducer
