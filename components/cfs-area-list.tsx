"use client"

import { useState } from "react"
import { MapPinIcon, CheckCircleIcon, TruckIcon, WarehouseIcon, ClockIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CFSAreaListProps {
  city: string
  selectedArea?: string
  onSelect?: (area: string) => void
}

interface CFSAreaDetail {
  name: string
  address: string
  distance: string
  services: string[]
  availability: "High" | "Medium" | "Low"
  rating: number
}

// Mock data for Mumbai CFS areas
const mumbaiCFSAreas: CFSAreaDetail[] = [
  {
    name: "Nhava Sheva CFS",
    address: "JNPT Area, Nhava Sheva, Navi Mumbai, Maharashtra 400707",
    distance: "2.5 km from Mumbai Port",
    services: ["Container Stuffing", "De-stuffing", "Customs Clearance", "Warehousing"],
    availability: "High",
    rating: 4.5
  },
  {
    name: "JNPT CFS",
    address: "Jawaharlal Nehru Port Trust, Sheva, Navi Mumbai, Maharashtra 400702",
    distance: "3.2 km from Mumbai Port",
    services: ["Container Handling", "Storage", "Customs Clearance", "Reefer Containers"],
    availability: "High",
    rating: 4.7
  },
  {
    name: "Dronagiri CFS",
    address: "Dronagiri Node, Navi Mumbai, Maharashtra 400707",
    distance: "5.1 km from Mumbai Port",
    services: ["Container Storage", "Stuffing/De-stuffing", "Customs", "Transportation"],
    availability: "Medium",
    rating: 4.2
  },
  {
    name: "Panvel CFS",
    address: "Panvel, Navi Mumbai, Maharashtra 410206",
    distance: "8.7 km from Mumbai Port",
    services: ["Container Handling", "Warehousing", "Customs", "Distribution"],
    availability: "Medium",
    rating: 4.0
  },
  {
    name: "Uran CFS",
    address: "Uran, Navi Mumbai, Maharashtra 400702",
    distance: "6.3 km from Mumbai Port",
    services: ["Container Storage", "Stuffing", "Customs", "Cargo Handling"],
    availability: "High",
    rating: 4.3
  },
  {
    name: "Vashi CFS",
    address: "Vashi, Navi Mumbai, Maharashtra 400703",
    distance: "12.5 km from Mumbai Port",
    services: ["Container Storage", "Customs", "Warehousing", "Distribution"],
    availability: "Low",
    rating: 3.9
  }
]

// Mock data for Singapore CFS areas
const singaporeCFSAreas: CFSAreaDetail[] = [
  {
    name: "Tanjong Pagar Terminal",
    address: "33 Keppel Road, Singapore 089065",
    distance: "1.2 km from Singapore Port",
    services: ["Container Handling", "Stuffing/De-stuffing", "Customs Clearance", "Warehousing"],
    availability: "High",
    rating: 4.8
  },
  {
    name: "Keppel Terminal",
    address: "15 Keppel Road, Singapore 089055",
    distance: "2.1 km from Singapore Port",
    services: ["Container Storage", "Reefer Containers", "Customs Clearance", "Distribution"],
    availability: "High",
    rating: 4.6
  },
  {
    name: "Pasir Panjang Terminal",
    address: "33 Pasir Panjang Road, Singapore 117611",
    distance: "4.5 km from Singapore Port",
    services: ["Container Handling", "Storage", "Customs", "Transshipment"],
    availability: "High",
    rating: 4.7
  },
  {
    name: "Jurong Port CFS",
    address: "37 Jurong Port Road, Singapore 619110",
    distance: "12.3 km from Singapore Port",
    services: ["Bulk Cargo", "Container Storage", "Customs", "Warehousing"],
    availability: "Medium",
    rating: 4.2
  },
  {
    name: "Brani Terminal",
    address: "33 Brani Terminal Avenue, Singapore 098134",
    distance: "3.7 km from Singapore Port",
    services: ["Container Handling", "Stuffing/De-stuffing", "Customs", "Distribution"],
    availability: "Medium",
    rating: 4.3
  }
]

export function CFSAreaList({ city, selectedArea, onSelect }: CFSAreaListProps) {
  const [selectedCFS, setSelectedCFS] = useState<string>(selectedArea || "")

  // Get CFS areas based on city
  const getCFSAreas = () => {
    switch(city) {
      case "Mumbai":
        return mumbaiCFSAreas;
      case "Singapore":
        return singaporeCFSAreas;
      default:
        return [];
    }
  }

  const cfsAreas = getCFSAreas()

  // Handle CFS selection
  const handleCFSSelect = (cfsName: string) => {
    setSelectedCFS(cfsName)
    // Call the onSelect callback if provided
    if (onSelect) {
      onSelect(cfsName)
    }
  }

  // Get availability color
  const getAvailabilityColor = (availability: "High" | "Medium" | "Low") => {
    switch (availability) {
      case "High":
        return "text-green-600"
      case "Medium":
        return "text-yellow-600"
      case "Low":
        return "text-red-600"
      default:
        return "text-gray-600"
    }
  }

  // Render star rating
  const renderRating = (rating: number) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5
    const stars = []

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={`full-${i}`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-500">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      )
    }

    if (hasHalfStar) {
      stars.push(
        <svg key="half" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="text-yellow-500">
          <defs>
            <linearGradient id="half-fill" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="none" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="url(#half-fill)" />
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      )
    }

    return <div className="flex items-center">{stars}</div>
  }

  return (
    <div className="mt-6 bg-white rounded-lg border shadow-md p-4">
      <div className="flex items-center mb-4">
        <MapPinIcon className="h-5 w-5 text-green-600 mr-2" />
        <h3 className="text-lg font-semibold">CFS Areas in {city}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cfsAreas.map((cfs) => (
          <div
            key={cfs.name}
            className={`border rounded-lg p-4 cursor-pointer transition-all ${
              selectedCFS === cfs.name ? 'border-green-600 bg-green-50' : 'hover:border-green-300'
            }`}
            onClick={() => handleCFSSelect(cfs.name)}
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold text-lg">{cfs.name}</h4>
                <p className="text-sm text-gray-600 mt-1">{cfs.address}</p>
                <p className="text-sm text-gray-500 mt-1">{cfs.distance}</p>
              </div>
              {selectedCFS === cfs.name && (
                <CheckCircleIcon className="h-6 w-6 text-green-600" />
              )}
            </div>

            <div className="mt-3 flex items-center gap-2">
              <span className={`text-sm font-medium ${getAvailabilityColor(cfs.availability)}`}>
                {cfs.availability} Availability
              </span>
              <span className="text-sm text-gray-400">|</span>
              {renderRating(cfs.rating)}
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {cfs.services.map((service, index) => (
                <span
                  key={index}
                  className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                >
                  {service}
                </span>
              ))}
            </div>

            <div className="mt-4 flex justify-between">
              <Button
                variant="outline"
                size="sm"
                className="text-green-600 border-green-600 hover:bg-green-50"
              >
                View Details
              </Button>
              <Button
                size="sm"
                className="bg-green-600 hover:bg-green-700"
                onClick={() => {
                  if (onSelect) {
                    onSelect(cfs.name);
                  }
                }}
              >
                Select
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
