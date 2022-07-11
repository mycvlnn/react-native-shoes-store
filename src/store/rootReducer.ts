import { combineReducers } from '@reduxjs/toolkit'

import appUserReducer from './appUserSlice'

export const reducers = {
  appUser: appUserReducer,
}

const rootReducer = combineReducers(reducers)

export default rootReducer
