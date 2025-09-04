import { Heart, Trash2, Minus, Plus } from 'lucide-react'
import type { IProduct } from '@/types/types'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '@/hooks/hooks'
import { addToCart, removeFromCart } from '@/store/cartSlice'

interface CartProductCardProps {
  product: IProduct & { quantity: number }
  showQuantity?: boolean
}

export default function CartProductCard({
  product,
  showQuantity = true,
}: CartProductCardProps) {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const openProductPage = () => {
    navigate(`/product/${product.id}`)
  }

  const handleRemoveFromCart = (e: React.MouseEvent) => {
    e.stopPropagation()
    dispatch(removeFromCart(product.id))
  }

  const handleQuantityChange = (e: React.MouseEvent, delta: number) => {
    e.stopPropagation()
    if (delta > 0) {
      dispatch(addToCart(product.id))
    } else if (product.quantity > 1) {
      dispatch(removeFromCart(product.id))
    } else {
      dispatch(removeFromCart(product.id))
    }
  }

  const totalPrice = product.price * product.quantity

  return (
    <div
      className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
      onClick={openProductPage}
    >
      <div className="flex-shrink-0">
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-20 h-20 object-contain rounded-lg border"
        />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
          {product.title}
        </h3>

        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {product.description}
        </p>

        {showQuantity && (
          <div className="flex items-center gap-3 mb-3">
            <span className="text-sm text-gray-600">Количество:</span>
            <div className="flex items-center gap-2">
              <button
                onClick={(e) => handleQuantityChange(e, -1)}
                className="p-1 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                <Minus className="w-3 h-3" />
              </button>
              <span className="w-8 text-center font-medium text-sm">
                {product.quantity}
              </span>
              <button
                onClick={(e) => handleQuantityChange(e, 1)}
                className="p-1 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                <Plus className="w-3 h-3" />
              </button>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold text-gray-900">
              {totalPrice.toLocaleString('ru-RU')} $
            </span>
            {product.quantity > 1 && (
              <span className="text-sm text-gray-500">
                {product.price.toLocaleString('ru-RU')} $/шт
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
              <Heart className="w-4 h-4" />
            </button>
            <button
              onClick={handleRemoveFromCart}
              className="p-2 text-gray-400 hover:text-red-500 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
