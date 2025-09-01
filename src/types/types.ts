export interface IProduct {
  id: number
  title: string
  slug: string
  price: number
  description: string
  category: {
    id: number
    name: string
    slug?: string
    image?: string
    creationAt?: string
    updatedAt?: string
  }
  images: string[]
  creationAt: string
  updatedAt: string
  rating?: {
    rate: number
    count: number
  }
  oldPrice?: number
}

export interface Category {
  id: number
  name: string
  slug?: string
  image?: string
  creationAt?: string
  updatedAt?: string
}

export interface Product {
  id: number
  title: string
  slug: string
  price: number
  description: string
  category: Category
  images: string[]
  creationAt: string
  updatedAt: string
}

export interface ProductsState {
  products: Product[]
  loading: boolean
  error: string | null
  selectedProduct: Product | null
  categories: Category[]
  lastFetch: string | null
}

export interface ShowProductsImgProps {
  product: IProduct
}