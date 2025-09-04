export default function AdvantagesCart() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h4 className="font-semibold text-gray-900 mb-3">Преимущества</h4>
      <ul className="space-y-2 text-sm text-gray-600">
        <li className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          Возврат в течение 14 дней
        </li>
        <li className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          Гарантия на все товары
        </li>
      </ul>
    </div>
  )
}
