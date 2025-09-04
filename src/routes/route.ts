import HomePage from '@/pages/HomePage'
import CategoriesPage from '@/pages/CategoriesPage'
import ProfilePage from '@/pages/ProfilePage'
import PrivacyPage from '@/pages/PrivacyPage'
import TermsPage from '@/pages/TermsPage'
import CategoryDetailPage from '@/pages/CategoryDetailPage'
import RegisterPage from '@/pages/RegisterPage'
import LoginPage from '@/pages/LoginPage'
import ProductPage from '@/pages/ProductPage'
import CartPage from '@/pages/CartPage'

export const privateRoutes = [
  { path: '/', component: HomePage },
  { path: '/home', component: HomePage },
  { path: '/categories', component: CategoriesPage },
  { path: '/categories/:slug', component: CategoryDetailPage },
  { path: '/profile', component: ProfilePage },
  { path: '/cart', component: CartPage },
  { path: '/privacy', component: PrivacyPage },
  { path: '/terms', component: TermsPage },
  { path: '/product/:id', component: ProductPage },
] as const

export const publicRoutes = [
  { path: '/login', component: LoginPage },
  { path: '/registration', component: RegisterPage },
]
