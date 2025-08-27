import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex md:p-10 lg:p-20 p-10 justify-center">
      <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col justify-center p-0 md:p-5 lg:p-10 gap-8 ">
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

        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex items-center justify-between text-sm text-gray-500">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Запомнить меня
            </label>
            <a href="#" className="text-red-500">
              Восстановить пароль
            </a>
          </div>
          <button className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Войти
          </button>
        </form>

        <p className="text-sm text-gray-500">
          У вас нет учетной записи ?{' '}
          <a href="#" className="text-blue-600">
            Sign up
          </a>
        </p>

        <div className="flex items-center gap-2 mt-4">
          <button className="border rounded-lg p-2 w-full flex items-center justify-center gap-2">
            <FaFacebookF /> Facebook
          </button>
          <button className="border rounded-lg p-2 w-full flex items-center justify-center gap-2">
            <FaGoogle /> Google
          </button>
          <button className="border rounded-lg p-2 w-full flex items-center justify-center gap-2">
            <FaGithub /> GitHub
          </button>
        </div>
      </div>

      <div className="md:w-1/3 w-0 hidden md:flex bg-gray-100 items-center justify-center rounded-4xl">
        <img src="/handPhone.png" alt="Security" className="rounded-2xl" />
      </div>
    </div>
  )
}
