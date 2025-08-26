import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import { getProducts, loadProducts } from '@/store/products'
import { useEffect, useState } from 'react'
import { CategorySidebar } from '@/components/Sidebar/CategorySidebar'
import ProductCard from '@/components/ProductCard/ProductCard'

export default function CategoriesPage() {
  const dispatch = useAppDispatch()
  const products = useAppSelector(getProducts)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState<string | null>(null)
  const [visibleCount, setVisibleCount] = useState<number>(10)

  useEffect(() => {
    dispatch(loadProducts())
  }, [dispatch])

  const filteredProducts = products
    .filter((prod) =>
      selectedCategory ? prod.category.slug === selectedCategory : true,
    )
    .sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price
      if (sortBy === 'date')
        return (
          new Date(b.creationAt).getTime() - new Date(a.creationAt).getTime()
        )
      return 0
    })

  const selectedCategoryName = selectedCategory
    ? products.find((p) => p.category.slug === selectedCategory)?.category.name
    : null

  return (
    <div className="min-h-screen bg-gray-50">
      <SidebarProvider>
        <CategorySidebar
          products={products}
          setSelectedCategory={setSelectedCategory}
          setSortBy={setSortBy}
        />

        <div>
          <div className="container mx-auto px-4 py-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {selectedCategoryName || 'Все категории'}
                </h1>
                <p className="text-gray-600 mt-2">
                  {filteredProducts.length} товаров
                  {selectedCategoryName && ` в категории`}
                </p>
              </div>

              <SidebarTrigger className="lg:hidden bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                Фильтры
              </SidebarTrigger>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.slice(0, visibleCount).map((prod) => (
                  <ProductCard key={prod.id} product={prod} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Товары не найдены
                </h3>
                <p className="text-gray-600">
                  Попробуйте выбрать другую категорию
                </p>
              </div>
            )}
            {filteredProducts.length > 0 && (
              <div className="flex justify-center mt-10">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 10)}
                  className="bg-blue-600 px-6 py-2 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Загрузить еще
                </button>
              </div>
            )}
          </div>
        </div>
      </SidebarProvider>
    </div>
  )
}
