import { createSlice, nanoid } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { UserProfile } from '~/services/models'
import { IAddressItem } from '~/models'

// Define a type for the slice state
interface AppUserState extends UserProfile {
  localeCode?: string
  accessToken?: string | null
  isLogin?: boolean
  address: {
    popular: IAddressItem[]
    recentLocation?: IAddressItem[]
    currentLocation?: IAddressItem
  }
}

const initialState: AppUserState = {
  localeCode: 'en',
  accessToken: null,
  name: '',
  email: '',
  phone: '',
  isLogin: false,
  avatar: '',
  address: {
    popular: [
      {
        id: nanoid(),
        title: 'Home',
        icon: 'home',
      },
      {
        id: nanoid(),
        title: 'Work',
        icon: 'work',
      },
      {
        id: nanoid(),
        title: 'Friends',
        icon: 'friends',
      },
    ],
    recentLocation: [
      {
        id: nanoid(),
        title: '2022-09-11T10:11:59+07:00', // Thời gian địa chỉ được sử dụng gần nhất
        icon: 'clock',
        lat: 21.028511,
        long: 105.804817,
        description: '35 Chùa Láng, Láng Thượng, Đống Đa, Hà Nội',
      },
    ],
    currentLocation: undefined,
  },
}

export const appUserSlice = createSlice({
  name: 'appUser',
  initialState,
  reducers: {
    saveInfoUser: (state, action: PayloadAction<AppUserState>) => ({ ...state, ...action.payload }),
    logoutUser: () => initialState,
    selectLocation: (state, action: PayloadAction<IAddressItem>) => {
      state.address.currentLocation = action.payload
    },
    saveAddress: (state, action: PayloadAction<IAddressItem>) => {
      const index = state.address.popular.findIndex((item) => item.id === action.payload.id)
      if (index >= 0) {
        state.address.popular[index] = action.payload
      } else {
        state.address.popular.push(action.payload)
      }
    },
    deleteAddress: (state, action: PayloadAction<IAddressItem>) => {
      const idAddress = action.payload.id

      state.address.popular = state.address.popular.filter((item) => item.id !== idAddress)
    },
  },
})

export const { saveInfoUser, logoutUser, selectLocation, saveAddress, deleteAddress } =
  appUserSlice.actions

export default appUserSlice.reducer
