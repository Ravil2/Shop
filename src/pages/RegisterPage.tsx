import { Link } from 'react-router-dom'
import { InputField } from '../components/form/InputField'
import { PasswordField } from '../components/form/PasswordField'
import { SocialButtons } from '../components/Social/SocialButton'
import { AuthWrapper } from '../components/Layout/AuthWrapper'
import { useRegisterForm } from '@/hooks/useRegisterForm'
import { useAuthForm } from '@/hooks/useAuthForm'
import { useAuthRedirect } from '@/hooks/useAuthRedirect'

export default function RegisterPage() {
  const { register, handleSubmit, errors, onSubmit, watch } = useRegisterForm()
  useAuthRedirect('auth', '/home')
  useAuthForm()
  return (
    <AuthWrapper imgSrc="/registerHand.png">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">S</span>
        </div>
        <h1 className="font-bold text-2xl">Store</h1>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-3xl font-bold">Регистрация</h3>
        <p className="text-gray-500 text-sm">
          Создайте учетную запись, чтобы получить доступ ко всем возможностям
        </p>
      </div>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-4 w-full">
          <InputField
            placeholder="Имя"
            {...register('firstName', {
              required: 'Это поле обязательно к заполнению',
            })}
            error={errors.firstName?.message}
          />
          <InputField
            placeholder="Фамилия"
            {...register('lastName')}
            error={errors.lastName?.message}
          />
        </div>

        <div className="flex gap-4 w-full">
          <InputField
            placeholder="Email"
            {...register('email', {
              required: 'Это поле обязательно к заполнению',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Введите корректный email',
              },
            })}
            error={errors.email?.message}
          />
          <InputField
            placeholder="Номер телефона"
            {...register('phone')}
            error={errors.phone?.message}
          />
        </div>

        <PasswordField
          placeholder="Пароль"
          {...register('password', {
            required: 'Это поле обязательно к заполнению',
            minLength: { value: 6, message: 'Минимум 6 символов' },
          })}
          error={errors.password?.message}
        />

        <PasswordField
          placeholder="Повторите пароль"
          {...register('confirmPassword', {
            required: 'Повторите пароль',
            validate: (value) =>
              value === watch('password') || 'Пароли не совпадают',
          })}
          error={errors.confirmPassword?.message}
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition w-full"
        >
          Создать аккаунт
        </button>
      </form>

      <p className="text-sm text-gray-500">
        Уже есть учетная запись?{' '}
        <Link to="/login" className="text-blue-600">
          Войти
        </Link>
      </p>

      <SocialButtons />
    </AuthWrapper>
  )
}
