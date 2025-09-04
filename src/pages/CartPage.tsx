import AdvantagesCart from '@/components/AdvantagesCart/AdvantagesCart'
import CartHeaderInfo from '@/components/CartHeaderInfo/CartHeaderInfo'
import CartItemsPriceInfo from '@/components/CartItemsPriceInfo/CartItemsPriceInfo'
import CartProducts from '@/components/CartProducts/CartProducts'
import EmptyCart from '@/components/EmptyCart/EmptyCart'
import { useCart } from '@/hooks/useCart'

export default function CartPage() {
  const { cartItems, totalPrice, totalQuantity } = useCart()

  if (cartItems.length === 0) {
    return <EmptyCart />
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <CartHeaderInfo totalQuantity={totalQuantity} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <CartProducts cartItems={cartItems} />

          <div className="space-y-6">
            <CartItemsPriceInfo
              totalPrice={totalPrice}
              totalQuantity={totalQuantity}
            />

            <AdvantagesCart />
          </div>
        </div>
      </div>
    </div>
  )
}
