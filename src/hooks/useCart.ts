import { useAppSelector } from '@/hooks/hooks'

export function useCart() {
  const cartProducts = useAppSelector((state) => state.cart.cartProducts)
  const products = useAppSelector((state) => state.products.products)

  const cartItems = cartProducts
    .map((item) => {
      const product = products.find((p) => p.id === item.productId)
      return product ? { ...product, quantity: item.quantity } : null
    })
    .filter(Boolean)

  const totalPrice = cartItems.reduce(
    (total, item) => total + item!.price * item!.quantity,
    0,
  )

  const totalQuantity = cartItems.reduce((sum, item) => sum + item!.quantity, 0)

  return { cartItems, totalPrice, totalQuantity }
}
