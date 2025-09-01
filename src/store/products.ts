import { createSlice, type Dispatch } from '@reduxjs/toolkit'
import type { RootState } from './store'
import type { Category, ProductsState } from '@/types/types'

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
  selectedProduct: null,
  categories: [],
  lastFetch: null,
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    productsRequested: (state) => {
      state.loading = true
    },
    productsReceived: (state, action) => {
      state.products = action.payload
      state.loading = false
      state.lastFetch = new Date().toISOString()
    },
    productsFailed: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    categoriesReceived: (state, action) => {
      state.categories = action.payload
    },
    productSelected: (state, action) => {
      state.selectedProduct = action.payload
    },
    clearError: (state) => {
      state.error = null
    },
  },
})

const { reducer: productsReducer, actions } = productSlice
const {
  productsRequested,
  productsReceived,
  productsFailed,
  categoriesReceived,
  productSelected,
} = actions

export const loadProducts =
  () => async (dispatch: Dispatch, getState: () => RootState) => {
    const { lastFetch } = getState().products

    const isOutdated = lastFetch
      ? (Date.now() - new Date(lastFetch).getTime()) / 1000 / 60 > 10
      : true

    if (!isOutdated) return

    dispatch(productsRequested())
    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/products')
      if (!response.ok) {
        throw new Error('Не удалось загрузить продукты')
      }
      const data = await response.json()
      dispatch(productsReceived(data))
    } catch (error) {
      dispatch(
        productsFailed(
          error instanceof Error ? error.message : 'Неизвестная ошибка',
        ),
      )
    }
  }

export const loadCategories = () => async (dispatch: Dispatch) => {
  try {
    const response = await fetch('https://api.escuelajs.co/api/v1/categories')
    if (!response.ok) {
      throw new Error('Не удалось загрузить категории')
    }
    const data = await response.json()
    const categoriFiltered = data.filter((categ: Category) => {
      const invalidNames = ['string', 'category_B', 'product']
      const isOnlyNumbers = /^\d+$/.test(categ.name)

      return (
        categ.image &&
        !categ.image.includes('pravatar') &&
        !categ.image.includes('placeimg') &&
        !invalidNames.includes(categ.name.toLowerCase()) &&
        !isOnlyNumbers
      )
    })
    dispatch(categoriesReceived(categoriFiltered))
  } catch (error) {
    dispatch(
      productsFailed(
        error instanceof Error
          ? error.message
          : 'Неизвестная ошибка при загрузке категорий',
      ),
    )
  }
}

export const loadProductById = (id: number) => async (dispatch: Dispatch) => {
  try {
    const response = await fetch(
      `https://api.escuelajs.co/api/v1/products/${id}`,
    )
    if (!response.ok) {
      throw new Error('Не удалось загрузить продукт')
    }
    const data = await response.json()
    dispatch(productSelected(data))
  } catch (error) {
    dispatch(
      productsFailed(
        error instanceof Error
          ? error.message
          : 'Неизвестная ошибка при загрузке продукта',
      ),
    )
  }
}

export const getProducts = (state: RootState) => state.products.products
export const getProductsLoading = (state: RootState) => state.products.loading
export const getProductsError = (state: RootState) => state.products.error
export const getCategories = (state: RootState) => state.products.categories
export const getSelectedProduct = (state: RootState) =>
  state.products.selectedProduct
export const getLastFetch = (state: RootState) => state.products.lastFetch

export const getProductsByCategory =
  (categoryId: number) => (state: RootState) =>
    state.products.products.filter(
      (product) => product.category.id === categoryId,
    )

export const getFeaturedProducts =
  (limit: number = 4) =>
  (state: RootState) =>
    state.products.products.slice(0, limit)

export const searchProducts = (searchTerm: string) => (state: RootState) =>
  state.products.products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

export default productsReducer
