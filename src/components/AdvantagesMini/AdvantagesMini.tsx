import { Shield, Star, Truck } from 'lucide-react'

export default function AdvantagesMini() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <Truck className="h-5 w-5 text-green-600" />
        Бесплатная доставка
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <Shield className="h-5 w-5 text-blue-600" />
        Гарантия 1 год
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <Star className="h-5 w-5 text-amber-500" />
        Премиум качество
      </div>
    </div>
  )
}
