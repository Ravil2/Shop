import { useProduct } from '@/hooks/useProduct'
import { useParams } from 'react-router-dom'
import { useProducts } from '@/hooks/useProducts'
import MyNavButton from '@/components/ui/MyNavButton'
import ShowProductsImg from '@/components/ShowProductsImg/ShowProductsImg'
import ProductsInfoTop from '@/components/ProductsInfoTop/ProductsInfoTop'
import ProductsInfoButtom from '@/components/ProductsInfoButtom/ProductsInfoButtom'
import AdvantagesMini from '@/components/AdvantagesMini/AdvantagesMini'
import ChoseQuantity from '@/components/ChoseQuantity/ChoseQuantity'
import ProductActions from '@/components/ProductActions/ProductActions'
import ProductsDetails from '@/components/ProductsDetails/ProductsDetails'
import ProductRecommendations from '@/components/ProductRecommendations/ProductRecommendations'

export default function ProductPage() {
  const { id } = useParams()
  const product = useProduct(id)
  const recomentedProducts = useProducts()

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <MyNavButton />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ShowProductsImg product={product} />
          <div className="space-y-6">
            <ProductsInfoTop product={product} />
            <ProductsInfoButtom product={product} />
            <AdvantagesMini />
            <ChoseQuantity />
            <ProductActions />
            <ProductsDetails product={product} />
          </div>
        </div>

        <ProductRecommendations recomentedProducts={recomentedProducts} />
      </div>
    </div>
  )
}
