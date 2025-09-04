import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import { addToCart } from '@/store/cartSlice'
import { Heart, ShoppingCart } from 'lucide-react'
import { useParams } from 'react-router-dom'

export default function ProductActions() {
  let { id } = useParams<{ id: string }>()
  const cart = useAppSelector((state) => state.cart.cartCounter)

  const dispatch = useAppDispatch()

  const handleAddToCart = () => {
    if (!id) return
    dispatch(addToCart(id))
  }

  return (
    <div onClick={handleAddToCart} className="flex gap-4 ">
      <button className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-4 px-6 rounded-xl font-medium hover:bg-blue-700 transition-colors">
        <ShoppingCart className="h-5 w-5" />В корзину
      </button>
      <button className="p-4 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
        <Heart className="h-5 w-5 text-gray-600" />
      </button>
    </div>
  )
}
