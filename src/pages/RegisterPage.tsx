import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa'

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex md:p-10 lg:p-20 p-10 justify-center">
      <div className="lg:w-1/3 w-0 md:w-0 hidden md:flex bg-gray-100 items-center justify-center rounded-4xl">
        <img src="/registerHand.png" alt="Security" className="rounded-2xl" />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col justify-center p-0 md:p-5 lg:p-10 gap-8 ">
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

        <form className="flex flex-col gap-4">
          <div className="flex gap-4 w-full">
            <input
              type="text"
              placeholder="Имя"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 w-1/2"
            />
            <input
              type="text"
              placeholder="Фамилия"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 w-1/2"
            />
          </div>
          <div className="flex gap-4 w-full">
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 w-1/2"
            />
            <input
              type="tel"
              placeholder="Номер телефона"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 w-1/2"
            />
          </div>
          <input
            type="password"
            placeholder="Пароль"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
          <input
            type="password"
            placeholder="Повторите пароль"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
          <button className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition w-full">
            Создать аккаунт
          </button>
        </form>

        <p className="text-sm text-gray-500">
          Уже есть учетная запись?{' '}
          <a href="#" className="text-blue-600">
            Войти
          </a>
        </p>

        <div className="flex items-center gap-2 mt-4 w-full flex-wrap">
          <button className="border rounded-lg p-2 flex-1 flex items-center justify-center gap-2">
            <FaFacebookF /> Facebook
          </button>
          <button className="border rounded-lg p-2 flex-1 flex items-center justify-center gap-2">
            <FaGoogle /> Google
          </button>
          <button className="border rounded-lg p-2 flex-1 flex items-center justify-center gap-2">
            <FaGithub /> GitHub
          </button>
        </div>
      </div>
    </div>
  )
}
