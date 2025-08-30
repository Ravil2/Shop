import { Edit3 } from 'lucide-react'
import UserInfoCard from '../UserInfoCard/UserInfoCard'
import UserAvatar from '../UserAvatar/UserAvatar'

interface User {
  username?: string
  email?: string
  roles?: string
  createdAt?: string
}

interface ProfileCardProps {
  user: User
  onAvatarEdit: () => void
  onProfileEdit: () => void
}

export default function ProfileCard({ user, onProfileEdit }: ProfileCardProps) {
  const onAvatarEdit = () => {
    console.log('first')
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <UserAvatar username={user?.username || ''} onEdit={onAvatarEdit} />

        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-2xl font-bold text-gray-900">{user?.username}</h2>
          <p className="text-gray-600 mt-1">Пользователь Store</p>
          <div className="mt-4 flex flex-wrap gap-3 justify-center sm:justify-start">
            <button
              onClick={onProfileEdit}
              className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <Edit3 className="h-4 w-4" />
              Редактировать
            </button>
          </div>
        </div>
      </div>
      <UserInfoCard user={user} />
    </div>
  )
}
