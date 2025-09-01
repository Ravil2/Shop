import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './hooks'
import { loadProducts, getProducts } from '@/store/products'
import type { IProduct } from '@/types/types'

export const useProducts = (): IProduct[] => {
  const dispatch = useAppDispatch()
  const products = useAppSelector(getProducts)

  useEffect(() => {
    if (!products.length) {
      dispatch(loadProducts())
    }
  }, [dispatch, products.length])

  return products
}
