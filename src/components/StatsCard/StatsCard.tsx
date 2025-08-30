import type { ComponentType } from 'react'

interface StatItem {
  icon: ComponentType<{ className?: string }>
  bgColor: string
  iconColor: string
  value: string
  label: string
}

interface StatsCardProps {
  title: string
  stats: StatItem[]
}

export default function StatsCard({ title, stats }: StatsCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-blue-50 rounded-xl"
            >
              <div className={`p-3 ${stat.bgColor} rounded-full mb-3`}>
                <Icon className={`h-6 w-6 ${stat.iconColor}`} />
              </div>
              <span className="text-2xl font-bold text-gray-900">
                {stat.value}
              </span>
              <span className="text-gray-600 text-sm">{stat.label}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
