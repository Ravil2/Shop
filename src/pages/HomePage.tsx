import Advantages from '@/components/Advantages/Advantages'
import { HeroCarousel } from '@/components/HeroCarousel/HeroCarousel'
import PopularCategory from '@/components/PopularCategory/PopularCategory'
import Recomented from '@/components/Recomented/Recomented'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import {
  getCategories,
  getProducts,
  loadCategories,
  loadProducts,
} from '@/store/products'
import { useEffect } from 'react'

export default function HomePage() {
  const dispatch = useAppDispatch()
  const categories = useAppSelector(getCategories)
  const products = useAppSelector(getProducts)

  useEffect(() => {
    dispatch(loadCategories())
    dispatch(loadProducts())
  }, [dispatch])

  return (
    <div className="min-h-screen bg-slate-200/50">
      <div className="container mx-auto px-4 py-8">
        <HeroCarousel />
        <PopularCategory categories={categories} />
        <Recomented products={products} />
        <Advantages />
      </div>
    </div>
  )
}
