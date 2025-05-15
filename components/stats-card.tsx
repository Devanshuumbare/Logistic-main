interface StatsCardProps {
  title: string
  description: string
}

export function StatsCard({ title, description }: StatsCardProps) {
  return (
    <div className="space-y-1">
      <div className="text-2xl font-bold text-green-600">{title}</div>
      <div className="text-sm text-gray-400">{description}</div>
    </div>
  )
}
