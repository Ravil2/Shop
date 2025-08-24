import { Link } from 'react-router-dom'
import {
  socialLinks,
  menuLinks,
  categories,
  contacts,
} from '@/data/footerLinks'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Store
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Современный магазин с лучшими товарами. Мы заботимся о качестве и
              вашем комфорте.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, color }, i) => (
                <Link
                  key={i}
                  to="/"
                  className={`p-2 bg-gray-800 ${color} rounded-lg transition-all duration-300 transform hover:-translate-y-1`}
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Магазин
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"></span>
            </h3>
            <ul className="space-y-3">
              {menuLinks.map((item, i) => (
                <li key={i}>
                  <Link
                    to="/"
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:pl-2"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Категории */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Категории
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"></span>
            </h3>
            <ul className="space-y-3">
              {categories.map((item, i) => (
                <li key={i}>
                  <Link
                    to="/"
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:pl-2"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Контакты
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"></span>
            </h3>
            <div className="space-y-3 text-gray-400">
              {contacts.map(({ icon: Icon, text }, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-3 hover:text-white transition-colors duration-300"
                >
                  <Icon className="text-blue-400 w-5 h-5" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2025 Store. Все права защищены.
            </p>
            <div className="flex space-x-6 text-sm text-gray-500">
              <Link
                to="/privacy"
                className="hover:text-white transition-colors duration-300"
              >
                Политика конфиденциальности
              </Link>
              <Link
                to="/terms"
                className="hover:text-white transition-colors duration-300"
              >
                Условия использования
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
