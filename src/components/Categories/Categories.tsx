import { useNavigate } from 'react-router-dom'

interface Category {
  id: number
  name: string
  slug: string
  image: string
  creationAt: string
  updatedAt: string
}

export default function Categories({ categories }: { categories: Category[] }) {
  const navigate = useNavigate()
  const handleClick = (category: Category) => {
    navigate(`/categories/${category.slug}`)
  }
  if (!categories?.length) return null
  const limitedCategories = categories.slice(0, 8)

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        {limitedCategories.map((category) => (
          <div
            key={category.id}
            className="relative group overflow-hidden rounded-xl cursor-pointer h-48"
            onClick={() => handleClick(category)}
          >
            {category.image ? (
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.parentElement!.classList.add('bg-black/30')
                }}
              />
            ) : (
              <div className="w-full h-full bg-black/30" />
            )}

            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all" />
            <div className="absolute bottom-2 left-1 sm:bottom-4 sm:left-4 text-white">
              <h3 className="font-semibold text-xl m-0 p-0 sm:mb-1">
                {category.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
