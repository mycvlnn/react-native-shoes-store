import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { UserProfile } from '~/services/types'

// Define a type for the slice state
interface AppUserState extends UserProfile {
  localeCode?: string
  accessToken?: string | null
}

const initialState: AppUserState = {
  localeCode: 'en',
  accessToken: null,
  name: 'chris',
  email: '',
  phone: '',
}

export const appUserSlice = createSlice({
  name: 'appUser',
  initialState,
  reducers: {
    saveInfoUser: (state, action: PayloadAction<AppUserState>) => {
      console.log({ payload: action.payload })
      state.localeCode = action.payload.localeCode
      state.accessToken = action.payload.accessToken
    },
  },
})

export const { saveInfoUser } = appUserSlice.actions

export default appUserSlice.reducer
