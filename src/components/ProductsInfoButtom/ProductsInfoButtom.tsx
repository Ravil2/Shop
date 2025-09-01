import type { ShowProductsImgProps } from '@/types/types'
export default function ProductsInfoButtom({ product }: ShowProductsImgProps) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-3xl font-bold text-gray-900">
        {product.price} $
      </span>
      {product.price > 1000 && (
        <span className="text-xl text-gray-400 line-through">
          {Math.round(product.price * 1.2)} ₽
        </span>
      )}
      {product.price > 1000 && (
        <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">
          -20%
        </span>
      )}
    </div>
  )
}
