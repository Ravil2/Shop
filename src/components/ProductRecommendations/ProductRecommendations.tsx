import type { IProduct } from '@/types/types'
import ProductCard from '../ProductCard/ProductCard'

interface IRecProducts {
  recomentedProducts: IProduct[]
}

export default function ProductRecommendations({
  recomentedProducts,
}: IRecProducts) {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">
        Вам также может понравиться
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {recomentedProducts.slice(0, 8).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
