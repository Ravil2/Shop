import { Link } from 'react-router-dom'
import Categories from '../Categories/Categories'

interface Category {
  id: number
  name: string
  slug: string
  image: string
  creationAt: string
  updatedAt: string
}

interface PopularCategoryProps {
  categories: Category[]
}
export default function PopularCategory({ categories }: PopularCategoryProps) {
  return (
    <section className="mb-16">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h2 className="text-3xl font-bold text-gray-900">
          Популярные категории
        </h2>
        <Link
          to="/categories"
          className="text-blue-600 hover:text-blue-700 font-semibold"
        >
          Смотреть все →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
        <Categories categories={categories} />
      </div>
    </section>
  )
}
