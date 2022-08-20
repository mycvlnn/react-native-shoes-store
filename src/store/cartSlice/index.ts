import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ICartItem } from '~/models'

// Define a type for the slice state
interface IState {
  data: ICartItem[]
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
    clearCart: () => initialState,
  },
})

export const { addToCart, clearCart } = cartSlice.actions

export default cartSlice.reducer
