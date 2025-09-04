import type { IProduct } from '@/types/types'
import { createSlice } from '@reduxjs/toolkit'

interface ICartProducts {
  cartProducts: IProduct[]
  cartCounter: number
}

const initialState: ICartProducts = {
  cartProducts: [],
  cartCounter: 1,
}

export const cartSlice = createSlice({
  name: 'cartProducts',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartProducts.push(action.payload)
      state.cartCounter = state.cartProducts.length
    },
    removeFromCart: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        (product) => product.id !== action.payload,
      )
      state.cartCounter = state.cartProducts.length
    },
    clearCart: (state) => {
      state.cartProducts = []
      state.cartCounter = state.cartProducts.length
    },
  },
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer
