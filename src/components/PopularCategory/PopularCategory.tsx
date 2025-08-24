import Categories from '../Categories/Categories'

export default function PopularCategory({ categories }) {
  return (
    <section className="mb-16">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900">
          Популярные категории
        </h2>
        <button className="text-blue-600 hover:text-blue-700 font-semibold">
          Смотреть все →
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-6">
        <Categories categories={categories} />
      </div>
    </section>
  )
}
