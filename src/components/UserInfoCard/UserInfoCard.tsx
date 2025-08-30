import { Mail, UserRoundPen, MapPin, Calendar } from 'lucide-react'

interface UserInfo {
  email?: string
  roles?: string
  createdAt?: string
}

interface UserInfoCardProps {
  user: UserInfo
}

export default function UserInfoCard({ user }: UserInfoCardProps) {
  const infoItems = [
    {
      icon: Mail,
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600',
      label: 'Email',
      value: user?.email,
    },
    {
      icon: UserRoundPen,
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600',
      label: 'Роль',
      value: user?.roles,
    },
    {
      icon: MapPin,
      bgColor: 'bg-orange-100',
      iconColor: 'text-orange-600',
      label: 'Город',
      value: 'Алматы',
    },
    {
      icon: Calendar,
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600',
      label: 'Дата регистрации',
      value: user?.createdAt?.slice(0, 10),
    },
  ]

  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
      {infoItems.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
        >
          <div className={`p-2 ${item.bgColor} rounded-lg`}>
            <item.icon className={`h-5 w-5 ${item.iconColor}`} />
          </div>
          <div>
            <p className="text-sm text-gray-500">{item.label}</p>
            <p className="font-medium text-gray-900">{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
