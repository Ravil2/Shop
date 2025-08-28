import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm, type FieldError } from 'react-hook-form'

export interface IRegisterFormData {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
  phone: string
}

export const useRegisterForm = () => {
  const navigate = useNavigate()
  const [serverError, setServerError] = useState<string | null>(null)

  const form = useForm<IRegisterFormData>({ mode: 'onChange' })
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
    reset,
  } = form

  const onSubmit = async (data: IRegisterFormData) => {
    try {
      const res = await fetch('http://localhost:5000/api/auth/registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: `${data.firstName} ${data.lastName}`,
          email: data.email,
          password: data.password,
        }),
      })

      const json = await res.json()

      if (!res.ok) {
        setError('email', {
          type: 'server',
          message: json.message || 'Ошибка регистрации',
        } as FieldError)
        return
      }

      reset()
      navigate('/login')
    } catch (err) {
      console.error(err)
      setError('email', {
        type: 'server',
        message: 'Ошибка при соединении с сервером',
      } as FieldError)
    }
  }

  return { register, handleSubmit, errors, serverError, onSubmit, watch }
}
