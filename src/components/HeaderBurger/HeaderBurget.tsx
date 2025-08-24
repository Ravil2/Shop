import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const HeaderBurger = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <>
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-xl transition-all duration-300"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-200 md:hidden shadow-lg">
          <nav className="flex flex-col p-4">
            <Link
              to="/home"
              onClick={() => setIsMenuOpen(false)}
              className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                isActive('/home')
                  ? 'text-blue-600 bg-blue-50 shadow-sm'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              Главная
            </Link>

            <Link
              to="/categories"
              onClick={() => setIsMenuOpen(false)}
              className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                isActive('/categories')
                  ? 'text-blue-600 bg-blue-50 shadow-sm'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              Категории
            </Link>

            <Link
              to="/profile/me"
              onClick={() => setIsMenuOpen(false)}
              className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                isActive('/profile/me')
                  ? 'text-blue-600 bg-blue-50 shadow-sm'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              Профиль
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}

export default HeaderBurger
