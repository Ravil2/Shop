import { Heart, ShoppingCart } from 'lucide-react'

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <button className="absolute top-3 right-3 p-2 bg-white rounded-full hover:bg-red-100 transition-colors">
          <Heart className="w-4 h-4" />
        </button>
        {product.oldPrice && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-sm">
            -{Math.round((1 - product.price / product.oldPrice) * 100)}%
          </div>
        )}
      </div>

      <div className="p-4">
        <span className="text-sm text-gray-500">{product.category}</span>
        <h3 className="font-semibold text-lg mb-2">{product.name}</h3>

        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-gray-900">
              {product.price.toLocaleString()} ₽
            </span>
            {product.oldPrice && (
              <span className="text-sm text-gray-500 line-through ml-2">
                {product.oldPrice.toLocaleString()} ₽
              </span>
            )}
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
