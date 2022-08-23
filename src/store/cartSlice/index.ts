import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ICartItem } from '~/models'

// Define a type for the slice state
interface IState {
  data: ICartItem[]
}

interface IControlQuantity {
  controlNumber: number
  primaryKey: string
}

const initialState: IState = {
  data: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICartItem>) => {
      const { primaryKey, quantity } = action.payload

      const index = state.data.findIndex((item) => item.primaryKey === primaryKey)
      if (index >= 0) {
        state.data[index].quantity += quantity
      } else {
        state.data.push(action.payload)
      }
    },
    controlQuantity: (state, action: PayloadAction<IControlQuantity>) => {
      const { primaryKey, controlNumber } = action.payload
      const currentItemCart = state.data.find((itemCart) => itemCart.primaryKey === primaryKey)
      if (currentItemCart) {
        currentItemCart.quantity += controlNumber
      }
    },
    removeItem: (state, action: PayloadAction<{ primaryKey: string }>) => {
      state.data = state.data.filter(
        (cartItem) => cartItem.primaryKey !== action.payload.primaryKey,
      )
    },
    clearCart: () => initialState,
  },
})

export const { addToCart, clearCart, controlQuantity, removeItem } = cartSlice.actions

export default cartSlice.reducer
