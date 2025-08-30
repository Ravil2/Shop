import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { AppDispatch } from './store'

interface User {
  id: string
  username: string
  email: string
  roles: string[]
  createdAt: string
}

interface AuthState {
  user: User | null
  token: string | null
}

const initialState: AuthState = {
  user: null,
  token: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ user: User; token: string }>,
    ) => {
      state.user = action.payload.user
      state.token = action.payload.token
      localStorage.setItem('token', action.payload.token)
    },
    logout: (state) => {
      state.user = null
      state.token = null
      localStorage.removeItem('token')
    },
  },
})

export const loadUser = () => async (dispatch: AppDispatch) => {
  try {
    const token = localStorage.getItem('token')
    if (!token) return

    const response = await fetch('http://localhost:5000/api/auth/profile', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (!response.ok) {
      throw new Error('Не удалось загрузить пользователя')
    }

    const data = await response.json()

    dispatch(
      setCredentials({
        user: data,
        token,
      }),
    )
  } catch (error) {
    console.error('Ошибка при загрузке юзера:', error)
    dispatch(logout())
  }
}

export const { setCredentials, logout } = authSlice.actions
export default authSlice.reducer
