import HomePage from '@/pages/HomePage'
import CategoriesPage from '@/pages/CategoriesPage'
import ProfilePage from '@/pages/ProfilePage'
import CartPage from '@/pages/CartPage'
import PrivacyPage from '@/pages/PrivacyPage'
import TermsPage from '@/pages/TermsPage'

export const routes = [
  { path: '/', component: HomePage },
  { path: '/home', component: HomePage },
  { path: '/categories', component: CategoriesPage },
  { path: '/profile/:id', component: ProfilePage },
  { path: '/cart', component: CartPage },
  { path: '/privacy', component: PrivacyPage },
  { path: '/terms', component: TermsPage },
] as const
