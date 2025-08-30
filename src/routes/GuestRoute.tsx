import type { JSX } from 'react'
import { useAuth } from '../hooks/useAuth'
import { Navigate, useLocation } from 'react-router-dom'

export const GuestRoute = ({ children }: { children: JSX.Element }) => {
  const isAuth = useAuth()
  const location = useLocation()

  if (isAuth) {
    const from = location.state?.from?.pathname || '/home'
    return <Navigate to={from} replace />
  }

  return children
}
