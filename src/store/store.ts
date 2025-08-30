import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './products'
import authReducer from './authSlice'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    user: authReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
