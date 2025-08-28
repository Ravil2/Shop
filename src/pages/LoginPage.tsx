import { Link } from 'react-router-dom'
import { InputField } from '../components/form/InputField'
import { PasswordField } from '../components/form/PasswordField'
import { SocialButtons } from '../components/Social/SocialButton'
import { AuthWrapper } from '../components/Layout/AuthWrapper'
import { useAuthForm } from '@/hooks/useAuthForm'

export default function LoginPage() {
  const { register, handleSubmit, errors, serverError, onSubmit } =
    useAuthForm()

  return (
    <AuthWrapper imgSrc="/handPhone.png">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">S</span>
        </div>
        <h1 className="font-bold text-2xl">Store</h1>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-3xl font-bold">Войти</h3>
        <p className="text-gray-500 text-sm">
          Войдите, чтобы получить доступ к своей учетной записи
        </p>
      </div>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <InputField
          placeholder="Email"
          {...register('email', { required: 'Введите email' })}
          error={errors.email?.message}
        />

        <PasswordField
          placeholder="Пароль"
          {...register('password', { required: 'Введите пароль' })}
          error={errors.password?.message}
        />

        {serverError && <p className="text-red-500 text-sm">{serverError}</p>}

        <div className="flex items-center justify-between text-sm text-gray-500">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Запомнить меня
          </label>
          <a href="#" className="text-red-500">
            Восстановить пароль
          </a>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Войти
        </button>
      </form>

      <p className="text-sm text-gray-500">
        У вас нет учетной записи?{' '}
        <Link to="/registration" className="text-blue-600">
          Sign up
        </Link>
      </p>

      <SocialButtons />
    </AuthWrapper>
  )
}
