import type { ShowProductsImgProps } from '@/types/types'

export default function ProductsDetails({ product }: ShowProductsImgProps) {
  return (
    <div className="bg-gray-100 rounded-xl p-6">
      <h3 className="font-semibold text-gray-900 mb-3">Детали товара</h3>
      <div className="space-y-2 text-sm text-gray-600">
        <div className="flex justify-between">
          <span>Артикул:</span>
          <span className="font-medium">#{product.id}</span>
        </div>
        <div className="flex justify-between">
          <span>Категория:</span>
          <span className="font-medium">{product.category.name}</span>
        </div>
        <div className="flex justify-between">
          <span>Добавлен:</span>
          <span className="font-medium">Дата добавления</span>
        </div>
        <div className="flex justify-between">
          <span>Обновлен:</span>
          <span className="font-medium">Дата обновления</span>
        </div>
      </div>
    </div>
  )
}
