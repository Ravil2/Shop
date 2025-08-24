export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Политика конфиденциальности
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Последнее обновление: 24 августа 2025 года
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 lg:p-12">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
              1. Введение
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              В Store мы серьезно относимся к вашей конфиденциальности. Эта
              политика объясняет, как мы собираем, используем и защищаем вашу
              личную информацию при использовании нашего веб-сайта и услуг.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Используя наш сайт, вы соглашаетесь с условиями этой политики
              конфиденциальности.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
              2. Какие данные мы собираем
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="font-semibold text-blue-900 mb-3">
                  Личная информация
                </h3>
                <ul className="text-blue-800 space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Имя и фамилия
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Электронная почта
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Номер телефона
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Адрес доставки
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="font-semibold text-purple-900 mb-3">
                  Технические данные
                </h3>
                <ul className="text-purple-800 space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    IP-адрес
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Тип браузера
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Устройство и ОС
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Cookies и метрики
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <span className="w-3 h-3 bg-orange-500 rounded-full mr-3"></span>
              3. Как мы используем ваши данные
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-lg mr-4 flex-shrink-0">
                  <span className="text-orange-600 font-bold">01</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Обработка заказов
                  </h4>
                  <p className="text-gray-700">
                    Для выполнения ваших покупок и доставки товаров
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4 flex-shrink-0">
                  <span className="text-blue-600 font-bold">02</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Служба поддержки
                  </h4>
                  <p className="text-gray-700">
                    Для оказания помощи и ответов на ваши вопросы
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-lg mr-4 flex-shrink-0">
                  <span className="text-green-600 font-bold">03</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Улучшение сервиса
                  </h4>
                  <p className="text-gray-700">
                    Для анализа и улучшения работы нашего сайта
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-100 p-3 rounded-lg mr-4 flex-shrink-0">
                  <span className="text-purple-600 font-bold">04</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Маркетинг</h4>
                  <p className="text-gray-700">
                    Для отправки актуальных предложений и новостей
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <span className="w-3 h-3 bg-red-500 rounded-full mr-3"></span>
              4. Защита данных
            </h2>
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-red-600 font-bold text-xl">🔒</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Меры безопасности
                  </h3>
                  <p className="text-gray-600">
                    Мы используем современные технологии шифрования
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-blue-600 text-sm">SSL</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    256-битное SSL шифрование
                  </p>
                </div>

                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-green-600 text-sm">PCI</span>
                  </div>
                  <p className="text-sm text-gray-700">PCI DSS соответствие</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <span className="w-3 h-3 bg-indigo-500 rounded-full mr-3"></span>
              5. Файлы Cookies
            </h2>
            <div className="bg-indigo-50 p-6 rounded-xl">
              <p className="text-indigo-900 mb-4">
                Мы используем cookies для улучшения работы сайта. Вы можете
                управлять настройками cookies в вашем браузере.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                  Обязательные
                </span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                  Аналитические
                </span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                  Функциональные
                </span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                  Маркетинговые
                </span>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <span className="w-3 h-3 bg-teal-500 rounded-full mr-3"></span>
              6. Ваши права
            </h2>
            <div className="space-y-3">
              <div className="flex items-center p-4 bg-teal-50 rounded-lg">
                <span className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center text-white text-sm mr-3">
                  ✓
                </span>
                <span className="text-teal-900">
                  Право на доступ к вашим данным
                </span>
              </div>
              <div className="flex items-center p-4 bg-teal-50 rounded-lg">
                <span className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center text-white text-sm mr-3">
                  ✓
                </span>
                <span className="text-teal-900">
                  Право на исправление данных
                </span>
              </div>
              <div className="flex items-center p-4 bg-teal-50 rounded-lg">
                <span className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center text-white text-sm mr-3">
                  ✓
                </span>
                <span className="text-teal-900">Право на удаление данных</span>
              </div>
              <div className="flex items-center p-4 bg-teal-50 rounded-lg">
                <span className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center text-white text-sm mr-3">
                  ✓
                </span>
                <span className="text-teal-900">Право на отзыв согласия</span>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <span className="w-3 h-3 bg-gray-500 rounded-full mr-3"></span>
              7. Контакты
            </h2>
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="text-gray-700 mb-4">
                Если у вас есть вопросы о нашей политике конфиденциальности,
                свяжитесь с нами:
              </p>
              <div className="space-y-2">
                <p className="text-gray-900">📧 Email: mail@mail.ru</p>
                <p className="text-gray-900">📞 Телефон: +7 (777) 777-77-77</p>
                <p className="text-gray-900">
                  🏢 Адрес: Алматы, ул. lorem, 255
                </p>
              </div>
            </div>
          </section>

          <div className="text-center mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-6">
              Продолжая использовать наш сайт, вы соглашаетесь с нашей политикой
              конфиденциальности
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-shadow duration-300">
              Я понимаю и соглашаюсь
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
