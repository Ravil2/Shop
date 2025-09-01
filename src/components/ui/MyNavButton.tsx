import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function MyNavButton() {
  const navigate = useNavigate()
  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center gap-1 text-blue-600 hover:text-gray-900 transition-colors px-2 pb-3"
    >
      <ArrowLeft className="h-5 w-5" />
      Назад
    </button>
  )
}
