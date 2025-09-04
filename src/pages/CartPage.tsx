import ProductCard from '@/components/ProductCard/ProductCard'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'

export default function CartPage() {
  const dispatch = useAppDispatch()
  const productsCart = useAppSelector((state) => state.cart.cartProducts)
  const products = useAppSelector((state) => state.products.items)

  return (
    <div className="min-h-screen">
      {cartItems.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  )
}
