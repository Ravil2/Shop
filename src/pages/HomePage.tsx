import Categories from '@/components/Categories/Categories'
import { HeroCarousel } from '@/components/HeroCarousel/HeroCarousel'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import { getCategories, loadCategories } from '@/store/products'
import { useEffect } from 'react'

export default function HomePage() {
  const dispatch = useAppDispatch()
  const categories = useAppSelector(getCategories)

  useEffect(() => {
    dispatch(loadCategories())
  }, [dispatch])

  return (
    <div className="min-h-screen bg-slate-200/50">
      <div className="container mx-auto px-4 py-8">
        <HeroCarousel />
        <Categories categories={categories} />
      </div>
    </div>
  )
}
