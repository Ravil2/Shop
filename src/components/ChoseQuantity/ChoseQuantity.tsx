import { Minus, Plus } from 'lucide-react'
import { useState } from 'react'

export default function ChoseQuantity() {
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm font-medium text-gray-700">Количество:</span>
      <div className="flex items-center gap-2">
        <button
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="w-12 text-center font-medium text-lg">{quantity}</span>
        <button
          onClick={() => setQuantity(quantity + 1)}
          className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
