import { RootState } from '..'

export const getDataCart = (state: RootState) => state.cart.data

export const hasCart = (state: RootState) => state.cart.data.length > 0

export const totalMoneyCart = (state: RootState) =>
  state.cart.data.reduce((total, current) => total + current.price * current.quantity, 0)
