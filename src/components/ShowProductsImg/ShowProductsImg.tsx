import type { ShowProductsImgProps } from '@/types/types'
import { useState } from 'react'

export default function ShowProductsImg({ product }: ShowProductsImgProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  if (!product || !product.images || product.images.length === 0) {
    return <div>Нет изображений</div>
  }

  return (
    <div className="space-y-4">
      <div className="aspect-square w-full overflow-hidden rounded-2xl bg-white shadow-lg">
        <img
          src={product.images[selectedImage]}
          alt={product.title}
          className="w-full h-full object-contain p-8"
        />
      </div>

      {product.images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {product.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`aspect-square rounded-xl border-2 overflow-hidden transition-all ${
                selectedImage === index
                  ? 'border-blue-600 ring-2 ring-blue-100'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <img
                src={image}
                alt={`${product.title} ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
