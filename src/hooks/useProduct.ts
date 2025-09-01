import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './hooks'
import { loadProductById } from '@/store/products'
import type { IProduct } from '@/types/types'

export const useProduct = (id?: string): IProduct | null => {
  const dispatch = useAppDispatch()
  const product = useAppSelector((state) => state.products.selectedProduct)

  useEffect(() => {
    if (id) {
      dispatch(loadProductById(Number(id)))
    }
  }, [dispatch, id])

  return product
}
