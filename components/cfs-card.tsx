"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPinIcon, TruckIcon } from "lucide-react"

interface CFSCardProps {
  title: string
  description: string
  image: string
}

export function CFSCard({ title, description, image }: CFSCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="overflow-hidden transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className={`h-full w-full object-cover transition-transform duration-500 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        <Badge className="absolute right-2 top-2 bg-green-600">Available</Badge>
      </div>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPinIcon className="h-5 w-5 text-green-600" />
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center gap-1">
            <TruckIcon className="h-4 w-4 text-gray-500" />
            <span>Container Storage</span>
          </div>
          <div>Customs Clearance</div>
          <div>Cargo Handling</div>
          <div>24/7 Security</div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-green-600 hover:bg-green-700" data-booking-button>
          Book Service
        </Button>
      </CardFooter>
    </Card>
  )
}
