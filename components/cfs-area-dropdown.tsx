"use client"

import { useState, useEffect, useRef } from "react"
import { MapPinIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react"

interface CFSAreaDropdownProps {
  city: string
  onSelect: (area: string) => void
}

// CFS areas by city
const cfsAreasByCity: Record<string, string[]> = {
  Mumbai: [
    "Nhava Sheva CFS",
    "JNPT CFS",
    "Dronagiri CFS",
    "Panvel CFS",
    "Uran CFS",
    "Vashi CFS",
    "Taloja CFS",
    "Kalamboli CFS"
  ],
  Chennai: [
    "Chennai Port CFS",
    "Ennore CFS",
    "Manali CFS",
    "Tondiarpet CFS",
    "Tiruvottiyur CFS"
  ],
  Delhi: [
    "Tughlakabad ICD",
    "Patparganj CFS",
    "Dadri ICD",
    "Ballabhgarh CFS"
  ],
  Singapore: [
    "Tanjong Pagar Terminal",
    "Keppel Terminal",
    "Pasir Panjang Terminal",
    "Jurong Port"
  ]
}

export function CFSAreaDropdown({ city, onSelect }: CFSAreaDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedArea, setSelectedArea] = useState<string>("")
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Get areas for the selected city
  const areas = cfsAreasByCity[city] || []

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Handle area selection
  const handleAreaSelect = (area: string) => {
    setSelectedArea(area)
    onSelect(area)
    setIsOpen(false)
  }

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div 
        className="flex items-center justify-between rounded-md border p-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <div className="text-lg font-semibold">{city}</div>
          <div className="text-xs text-gray-500 flex items-center">
            <MapPinIcon className="h-3 w-3 mr-1 text-green-600" />
            {selectedArea || `Select CFS Area in ${city}`}
          </div>
        </div>
        <div>
          {isOpen ? (
            <ChevronUpIcon className="h-5 w-5 text-gray-500" />
          ) : (
            <ChevronDownIcon className="h-5 w-5 text-gray-500" />
          )}
        </div>
      </div>

      {isOpen && areas.length > 0 && (
        <div className="absolute z-50 mt-1 w-full rounded-md border border-gray-200 bg-white shadow-lg">
          <div className="max-h-60 overflow-auto py-1">
            {areas.map((area) => (
              <div
                key={area}
                className="px-3 py-2 hover:bg-green-50 cursor-pointer text-sm"
                onClick={() => handleAreaSelect(area)}
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
