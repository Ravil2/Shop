import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import { useAuthRedirect } from '@/hooks/useAuthRedirect'
import { loadUser } from '@/store/authSlice'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ProfileHeader from '../components/ProfileHeader/ProfileHeader'
import ProfileCard from '../components/ProfileCard/ProfileCard'
import StatsCard from '../components/StatsCard/StatsCard'
import RecentOrders from '../components/RecentOrders/RecentOrders'
import LogoutButton from '../components/LogoutButton/LogoutButton'
import { CreditCard, Heart, ShoppingBag } from 'lucide-react'

export default function ProfilePage() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.user.user)

  useAuthRedirect('guest', '/login')

  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch])

  const logoutAccount = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  const handleAvatarEdit = () => {
    console.log('Edit avatar')
  }

  const handleProfileEdit = () => {
    console.log('Edit profile')
  }

  const statsData = [
    {
      icon: ShoppingBag,
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600',
      value: '12',
      label: 'Заказов',
    },
    {
      icon: Heart,
      bgColor: 'bg-pink-100',
      iconColor: 'text-pink-600',
      value: '24',
      label: 'Избранное',
    },
    {
      icon: CreditCard,
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600',
      value: '3',
      label: 'Оплаты картой',
    },
  ]

  const recentOrders = [
    {
      id: '3245',
      date: '23 сентября 2023',
      amount: '1 499 ₽',
    },
  ]

  if (!user) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <ProfileHeader
          title="Мой профиль"
          description="Управляйте вашей учетной записью и настройками"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <ProfileCard
              user={user}
              onAvatarEdit={handleAvatarEdit}
              onProfileEdit={handleProfileEdit}
            />
            <StatsCard title="Статистика" stats={statsData} />
          </div>

          <div className="space-y-6">
            <RecentOrders title="Недавние заказы" orders={recentOrders} />
          </div>
        </div>

        <div className="mt-6 max-w-[30rem] w-full mx-auto lg:mx-0">
          <LogoutButton onLogout={logoutAccount} label="Выйти из аккаунта" />
        </div>
      </div>
    </div>
  )
}
