interface ITotalQuantity {
  totalQuantity: number
}

export default function CartHeaderInfo({ totalQuantity }: ITotalQuantity) {
  return (
    <div className="flex items-center justify-between mb-8">
      <h1 className="text-3xl font-bold text-gray-900">Корзина</h1>
      <span className="text-gray-600">
        {totalQuantity} товар{totalQuantity > 1 ? 'ов' : ''}
      </span>
    </div>
  )
}
