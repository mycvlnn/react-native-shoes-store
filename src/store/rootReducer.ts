import { combineReducers } from '@reduxjs/toolkit'

import appUserReducer from './appUserSlice'
import cartReducer from './cartSlice'

export const reducers = {
  appUser: appUserReducer,
  cart: cartReducer,
}

const rootReducer = combineReducers(reducers)

export default rootReducer
