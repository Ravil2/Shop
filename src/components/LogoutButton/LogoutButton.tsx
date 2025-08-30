import { LogOut } from 'lucide-react'

interface LogoutButtonProps {
  onLogout: () => void
  label: string
}

export default function LogoutButton({ onLogout, label }: LogoutButtonProps) {
  return (
    <button
      onClick={onLogout}
      className="w-full flex items-center justify-center gap-2 p-4 text-red-600 font-medium bg-white rounded-xl shadow-sm hover:bg-red-50 transition-colors"
    >
      <LogOut className="h-5 w-5" />
      {label}
    </button>
  )
}
