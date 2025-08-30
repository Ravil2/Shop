import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './useAuth'

export const useAuthRedirect = (redirectIf: 'auth' | 'guest', to: string) => {
  const navigate = useNavigate()
  const isAuth = useAuth()

  useEffect(() => {
    if (redirectIf === 'auth' && isAuth) {
      navigate(to)
    }
    if (redirectIf === 'guest' && !isAuth) {
      navigate(to)
    }
  }, [redirectIf, isAuth, to, navigate])
}
