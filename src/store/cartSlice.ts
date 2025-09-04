import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface ICartItem {
  productId: string
  quantity: number
}

interface ICartState {
  cartProducts: ICartItem[]
  cartCounter: number
}

const initialState: ICartState = {
  cartProducts: [],
  cartCounter: 0,
}

export const cartSlice = createSlice({
  name: 'cartProducts',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<string>) => {
      const productId = action.payload
      const existingItem = state.cartProducts.find(
        (item) => item.productId === productId,
      )

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.cartProducts.push({ productId, quantity: 1 })
      }

      state.cartCounter = state.cartProducts.reduce(
        (acc, item) => acc + item.quantity,
        0,
      )
    },
    removeFromCart: (state, action) => {
      const productId = action.payload
      const existingItem = state.cartProducts.find(
        (item) => item.productId === productId,
      )

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1
        } else {
          state.cartProducts = state.cartProducts.filter(
            (item) => item.productId !== productId,
          )
        }
      }

      state.cartCounter = state.cartProducts.reduce(
        (acc, item) => acc + item.quantity,
        0,
      )
    },
    clearCart: (state) => {
      state.cartProducts = []
      state.cartCounter = 0
    },
  },
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer
