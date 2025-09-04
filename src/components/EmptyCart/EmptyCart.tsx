import { ArrowRight, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function EmptyCart() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mx-auto w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-6">
          <ShoppingBag className="h-12 w-12 text-gray-400" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Корзина пуста</h2>
        <p className="text-gray-600 mb-8">
          Добавьте товары в корзину, чтобы сделать заказ
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Вернуться к покупкам
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </div>
  )
}
