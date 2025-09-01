import type { ShowProductsImgProps } from '@/types/types'
import { Star } from 'lucide-react'

export default function ProductsInfoTop({ product }: ShowProductsImgProps) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
          {product.category.name}
        </span>
        <div className="flex items-center gap-1 text-amber-500">
          <Star className="h-4 w-4 fill-current" />
          <span className="text-sm text-gray-600">4.8 (124 отзыва)</span>
        </div>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.title}</h1>

      <p className="text-gray-600 text-lg leading-relaxed">
        {product.description}
      </p>
    </div>
  )
}
