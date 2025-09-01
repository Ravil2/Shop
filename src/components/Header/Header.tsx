import { Link, useLocation } from 'react-router-dom'
import HeaderBurger from '../HeaderBurger/HeaderBurget'

const Header = () => {
  const location = useLocation()

  const isActive = (path: string) => {
    if (path === '/categories') {
      return location.pathname.startsWith('/categories')
    }
    return location.pathname === path
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/80 bg-white/95 backdrop-blur-xl supports-[backdrop-filter]:bg-white/70 shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 mx-auto">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Store
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          <Link
            to="/home"
            className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
              isActive('/home')
                ? 'text-blue-600 bg-blue-50 shadow-sm'
                : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
            }`}
          >
            Главная
            {isActive('/home') && (
              <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></span>
            )}
          </Link>

          <Link
            to="/categories"
            className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
              isActive('/categories')
                ? 'text-blue-600 bg-blue-50 shadow-sm'
                : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
            }`}
          >
            Категории
            {isActive('/categories') && (
              <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></span>
            )}
          </Link>

          <Link
            to="/profile"
            className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
              isActive('/profile')
                ? 'text-blue-600 bg-blue-50 shadow-sm'
                : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
            }`}
          >
            Профиль
            {isActive('/profile') && (
              <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></span>
            )}
          </Link>
        </nav>

        <div className="flex items-center space-x-3">
          <Link to="/cart">
            <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-xl transition-all duration-300">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6h9m-7.5 0a2 2 0 100 4 2 2 0 000-4zm9 0a2 2 0 100 4 2 2 0 000-4z"
                />
              </svg>
            </button>
          </Link>

          <HeaderBurger />
        </div>
      </div>
    </header>
  )
}

export default Header
