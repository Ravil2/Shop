export default function CartItemsPriceInfo({ totalQuantity, totalPrice }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Итого</h3>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-gray-600">
          <span>Товары ({totalQuantity})</span>
          <span>{totalPrice} $</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Доставка</span>
          <span className="text-green-600">Бесплатно</span>
        </div>
        <div className="border-t pt-3 mt-3">
          <div className="flex justify-between text-lg font-bold text-gray-900">
            <span>Общая сумма</span>
            <span>{totalPrice} $</span>
          </div>
        </div>
      </div>

      <button className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl font-medium hover:bg-blue-700 transition-colors">
        Перейти к оформлению
      </button>
    </div>
  )
}
