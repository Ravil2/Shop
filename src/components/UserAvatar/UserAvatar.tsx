import { Camera } from 'lucide-react'

interface UserAvatarProps {
  username: string
  onEdit: () => void
}

export default function UserAvatar({ username, onEdit }: UserAvatarProps) {
  return (
    <div className="relative">
      <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
        {username.charAt(0)}
      </div>
      <button
        onClick={onEdit}
        className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-md border border-gray-200 hover:bg-gray-50 transition-colors"
      >
        <Camera className="h-4 w-4 text-gray-700" />
      </button>
    </div>
  )
}
