import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm, type FieldError } from 'react-hook-form'

interface IFormData {
  email: string
  password: string
}

export const useAuthForm = () => {
  const navigate = useNavigate()
  const [serverError, setServerError] = useState<string | null>(null)

  const form = useForm<IFormData>({ mode: 'onChange' })
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = form

  const onSubmit = async (data: IFormData) => {
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: data.email, password: data.password }),
      })

      const json = await res.json()

      if (!res.ok) {
        setError('email', {
          type: 'server',
          message: 'Логин или пароль неверен',
        } as FieldError)
        setError('password', {
          type: 'server',
          message: 'Логин или пароль неверен',
        } as FieldError)
        return
      }

      localStorage.setItem('token', json.token)
      navigate('/home')
    } catch (err) {
      console.error(err)
      setServerError('Ошибка при соединении с сервером')
    }
  }

  return { register, handleSubmit, errors, serverError, onSubmit }
}
