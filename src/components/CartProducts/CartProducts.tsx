import CartProductCard from '../CartProductCard/CartProductCard'

export default function CartProducts({ cartItems }) {
  return (
    <div className="lg:col-span-2 space-y-4">
      {cartItems.map((item) => (
        <div
          key={item?.id}
          className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
        >
          <CartProductCard product={item} showQuantity />
        </div>
      ))}
    </div>
  )
}
