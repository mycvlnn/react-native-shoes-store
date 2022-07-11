import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface AppUserState {
  localeCode: string
  token: string | null
  userName: string
  email: string
  phoneNumber: number | null
}

const initialState: AppUserState = {
  localeCode: 'en',
  token: null,
  userName: 'chris',
  email: '',
  phoneNumber: null,
}

export const appUserSlice = createSlice({
  name: 'appUser',
  initialState,
  reducers: {
    saveInfoUser: (state, action: PayloadAction<AppUserState>) => {
      console.log({ payload: action.payload })
      state.localeCode = action.payload.localeCode
      state.token = action.payload.token
      state.userName = action.payload.userName
      state.email = action.payload.email
      state.phoneNumber = action.payload.phoneNumber
    },
  },
})

export const { saveInfoUser } = appUserSlice.actions

export default appUserSlice.reducer
