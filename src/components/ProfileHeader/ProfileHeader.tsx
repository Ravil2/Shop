interface ProfileHeaderProps {
  title: string
  description: string
}

export default function ProfileHeader({
  title,
  description,
}: ProfileHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  )
}
