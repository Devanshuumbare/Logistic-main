import { ChevronRightIcon } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
}

export function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="group flex items-start gap-4 rounded-lg border p-4 transition-all hover:border-green-600 hover:bg-green-50">
      <div className="mt-1 rounded-full border border-green-200 bg-green-100 p-1.5 text-green-600 group-hover:bg-green-600 group-hover:text-white">
        <ChevronRightIcon className="h-4 w-4" />
      </div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      </div>
    </div>
  )
}
