import { Link } from 'react-router-dom'
import ProductCard from '../ProductCard/ProductCard'
import type { IProduct } from '@/types/types'

interface IProducts {
  products: IProduct[]
}

export default function Recomented({ products }: IProducts) {
  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-8 flex-wrap gap-2">
        <h2 className="text-3xl font-bold text-gray-900">Рекомендуем</h2>
        <Link
          to="/categories"
          className="text-blue-600 hover:text-blue-700 font-semibold"
        >
          Все товары →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.slice(0, 8).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
