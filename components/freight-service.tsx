import type { ReactNode } from "react"

interface FreightServiceProps {
  title: string
  description: string
  icon: ReactNode
}

export function FreightService({ title, description, icon }: FreightServiceProps) {
  return (
    <div className="group rounded-lg border p-6 transition-all hover:border-green-600 hover:bg-green-50">
      <div className="mb-4">{icon}</div>
      <h3 className="mb-2 font-semibold">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  )
}
