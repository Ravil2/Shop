export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
            Условия использования
          </h1>
          <p className="text-gray-600">Последнее обновление: 24.08.2025</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              1. Основные положения
            </h2>
            <p className="text-gray-700 text-sm">
              Используя наш магазин, вы соглашаетесь с этими условиями. Мы
              оставляем за собой право изменять условия в любое время.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              2. Регистрация и аккаунт
            </h2>
            <ul className="text-gray-700 text-sm space-y-2">
              <li>• Вы должны быть старше 18 лет</li>
              <li>• Предоставляйте точную информацию</li>
              <li>• Сохраняйте конфиденциальность данных аккаунта</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
              3. Заказы и оплата
            </h2>
            <div className="text-gray-700 text-sm space-y-2">
              <p>• Цены указаны в usd</p>
              <p>• Оплата при получении или онлайн</p>
              <p>• Подтверждение заказа в течение 24 часов</p>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              4. Возврат и гарантия
            </h2>
            <div className="text-gray-700 text-sm space-y-2">
              <p>• Возврат в течение 14 дней</p>
              <p>• Товар должен быть в оригинальной упаковке</p>
              <p>• Гарантия согласно законодательству РК</p>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
              5. Интеллектуальная собственность
            </h2>
            <p className="text-gray-700 text-sm">
              Все материалы сайта защищены авторским правом. Копирование без
              разрешения запрещено.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
              <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
              6. Контакты
            </h2>
            <div className="text-gray-700 text-sm space-y-1">
              <p>📧 mail@mail.ru</p>
              <p>📞 +7 (777) 777-77-77</p>
              <p>🕒 Ежедневно с 9:00 до 21:00</p>
            </div>
          </section>

          <div className="text-center mt-8 pt-6 border-t border-gray-200">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-md transition-shadow text-sm">
              Принять условия
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
