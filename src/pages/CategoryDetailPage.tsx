import { Link } from 'react-router-dom'
import ProductCard from '@/components/ProductCard/ProductCard'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import { getProducts, loadProducts } from '@/store/products'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function CategoryDetailPage() {
  const { slug } = useParams<{ slug: string }>()

  const dispatch = useAppDispatch()
  const products = useAppSelector(getProducts)

  useEffect(() => {
    dispatch(loadProducts())
  }, [dispatch])

  const filteredProducts = products?.filter(
    (prod) => prod.category.slug === slug,
  )

  const categoryName = filteredProducts?.[0]?.category?.name || 'Категория'

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Link to="/" className="hover:text-blue-600 transition-colors">
              Главная
            </Link>
            <span className="mx-2">/</span>
            <Link
              to="/categories"
              className="hover:text-blue-600 transition-colors"
            >
              Категории
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{categoryName}</span>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {categoryName}
              </h1>
              <p className="text-gray-600">
                {filteredProducts?.length || 0} товаров
              </p>
            </div>

            <Link
              to="/categories"
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Все категории</span>
            </Link>
          </div>
        </div>

        {filteredProducts && filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="bg-white rounded-xl shadow-sm p-8 max-w-md mx-auto">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">😢</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Товары не найдены
              </h3>
              <p className="text-gray-600 mb-6">
                В этой категории пока нет товаров
              </p>
              <Link
                to="/categories"
                className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Вернуться к категориям</span>
              </Link>
            </div>
          </div>
        )}

        {filteredProducts && filteredProducts.length > 0 && (
          <div className="text-center mt-12">
            <Link
              to="/home"
              className="inline-flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Вернуться на главную</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
