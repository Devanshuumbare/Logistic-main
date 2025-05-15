
"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BellIcon, SearchIcon, UserIcon } from "lucide-react"
import { LoginModal } from "@/components/login-modal"

import { StatsCard } from "@/components/stats-card"
import { FreightService } from "@/components/freight-service"
import { CFSCard } from "@/components/cfs-card"
import { CFSAreaDropdown } from "@/components/cfs-area-dropdown"
import { CFSAreaList } from "@/components/cfs-area-list"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface CFSAreaListProps {
  city: string
  selectedArea?: string
  onSelect?: (area: string) => void
}

export default function Home() {
  const [shipmentType, setShipmentType] = useState("standard")
  const [rateType, setRateType] = useState("regular")
  const [selectedCFSArea, setSelectedCFSArea] = useState("")
  const [showCFSAreas, setShowCFSAreas] = useState(false)
  const [selectedCity, setSelectedCity] = useState("Mumbai")
  const [selectedSingaporeCFSArea, setSelectedSingaporeCFSArea] = useState("")
  const [showSingaporeCFSAreas, setShowSingaporeCFSAreas] = useState(false)

  const handleCFSSelect = (cfsName: string) => {
    setSelectedCFSArea(cfsName)
    // Call the onSelect callback if provided
    
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-green-600"
              >
                <path d="M4 22h16a2 2 0 0 0 2-2V9a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5" />
                <path d="M2 15h10" />
                <path d="M5 12h14" />
                <path d="M7 9h16" />
                <path d="M18 19h2" />
                <path d="M10 19h5" />
              </svg>
              <span className="text-xl font-bold">Green Ocean</span>
            </Link>

          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" aria-label="Notifications">
              <BellIcon className="h-5 w-5" />
            </Button>
            <div className="hidden items-center gap-2 md:flex">
              <span className="text-sm font-medium">Explore Now</span>
              <UserIcon className="h-5 w-5" />
            </div>
            <Button variant="outline" className="hidden md:inline-flex">
              Sign Up
            </Button>
            <Button className="bg-green-600 hover:bg-green-700">Contact Us</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative bg-gradient-to-b from-green-900 to-green-700 py-0">
          <div className="absolute inset-0 z-0">
            <img
              src="/placeholder.svg?height=600&width=1600"
              alt="Logistics Background"
              className="h-full w-full object-cover opacity-20"
            />
          </div>
          <div className="container relative z-10 pt-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-white"
                >
                  <path d="M4 22h16a2 2 0 0 0 2-2V9a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5" />
                  <path d="M2 15h10" />
                  <path d="M5 12h14" />
                  <path d="M7 9h16" />
                  <path d="M18 19h2" />
                  <path d="M10 19h5" />
                </svg>
                <span className="text-xl font-bold text-white">Green Ocean Logistics</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="hidden items-center gap-2 rounded-md bg-green-800 px-3 py-1.5 text-white md:flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                    <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" />
                    <path d="M3 9h4.5a.5.5 0 0 0 .5-.5V5" />
                    <path d="M21 9h-4.5a.5.5 0 0 1-.5-.5V5" />
                  </svg>
                  <span className="text-sm">List Your Warehouse</span>
                  <span className="text-xs text-green-300">Grow your business!</span>
                </div>
                <div className="hidden items-center gap-2 rounded-md bg-green-800 px-3 py-1.5 text-white md:flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M20 7h-9" />
                    <path d="M14 17H5" />
                    <circle cx="17" cy="17" r="3" />
                    <circle cx="7" cy="7" r="3" />
                  </svg>
                  <div>
                    <span className="text-sm">Introducing myBiz</span>
                    <div className="text-xs text-green-300">Business Logistics Solution</div>
                  </div>
                </div>
                <div className="hidden items-center gap-2 rounded-md bg-green-800 px-3 py-1.5 text-white md:flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M4 22h16a2 2 0 0 0 2-2V9a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5" />
                    <path d="M2 15h10" />
                    <path d="M5 12h14" />
                    <path d="M7 9h16" />
                    <path d="M18 19h2" />
                    <path d="M10 19h5" />
                  </svg>
                  <div>
                    <span className="text-sm">My Shipments</span>
                    <div className="text-xs text-green-300">Manage your bookings</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 rounded-md bg-green-600 px-3 py-1.5 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <span className="text-sm">Login or Create Account</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-lg bg-white p-4 shadow-lg">
              <div className="grid grid-cols-7 gap-2">
                <div className="flex flex-col items-center justify-center rounded-md p-2 text-center hover:bg-green-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-green-600"
                  >
                    <path d="M20 17.5h-6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h6c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5Z" />
                    <path d="M20 21h-6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h6c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5Z" />
                    <path d="M20 14h-6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h6c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5Z" />
                    <path d="M8 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                    <path d="M11 17.5a3.5 3.5 0 0 0-7 0" />
                  </svg>
                  <span className="mt-2 text-sm font-medium">Freight</span>
                </div>
                <div className="flex flex-col items-center justify-center rounded-md p-2 text-center hover:bg-green-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-green-600"
                  >
                    <rect width="16" height="16" x="4" y="4" rx="2" />
                    <path d="M4 12h16" />
                    <path d="M12 4v16" />
                  </svg>
                  <span className="mt-2 text-sm font-medium">Warehousing</span>
                </div>
                <div className="flex flex-col items-center justify-center rounded-md p-2 text-center hover:bg-green-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-green-600"
                  >
                    <path d="M10 17h4V5H2v12h3" />
                    <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" />
                    <path d="M14 17h1" />
                    <circle cx="7.5" cy="17.5" r="2.5" />
                    <circle cx="17.5" cy="17.5" r="2.5" />
                  </svg>
                  <span className="mt-2 text-sm font-medium">Trucking</span>
                </div>
                <div className="flex flex-col items-center justify-center rounded-md p-2 text-center hover:bg-green-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-green-600"
                  >
                    <path d="M18 8c0 5.5-3.8 10-8 10s-8-4.5-8-10h16Z" />
                    <path d="M2 8h20" />
                    <path d="M12 16v4" />
                    <path d="M8 4h8" />
                    <path d="M18 16c-.5 1.5-1.5 2-3 2" />
                  </svg>
                  <span className="mt-2 text-sm font-medium">Ocean Freight</span>
                </div>
                <div className="flex flex-col items-center justify-center rounded-md p-2 text-center hover:bg-green-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-green-600"
                  >
                    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
                  </svg>
                  <span className="mt-2 text-sm font-medium">Air Freight</span>
                </div>
                <div className="flex flex-col items-center justify-center rounded-md p-2 text-center hover:bg-green-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-green-600"
                  >
                    <rect x="4" y="3" width="16" height="16" rx="2" />
                    <path d="M4 11h16" />
                    <path d="M12 3v8" />
                    <path d="M8 19l-2 3" />
                    <path d="M18 22l-2-3" />
                  </svg>
                  <span className="mt-2 text-sm font-medium">Rail Freight</span>
                </div>
                <div className="flex flex-col items-center justify-center rounded-md p-2 text-center hover:bg-green-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-green-600"
                  >
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  <span className="mt-2 text-sm font-medium">Customs</span>
                </div>
              </div>

              <div className="mt-6 flex gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="one-way"
                      name="shipment-type"
                      className="h-4 w-4 text-green-600"
                      checked={shipmentType === "standard"}
                      onChange={() => setShipmentType("standard")}
                    />
                    <label htmlFor="one-way" className="text-sm font-medium">
                      Standard Shipment
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="round-trip"
                      name="shipment-type"
                      className="h-4 w-4 text-green-600"
                      checked={shipmentType === "express"}
                      onChange={() => setShipmentType("express")}
                    />
                    <label htmlFor="round-trip" className="text-sm font-medium">
                      Express Delivery
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="multi-city"
                      name="shipment-type"
                      className="h-4 w-4 text-green-600"
                      checked={shipmentType === "multi-point"}
                      onChange={() => setShipmentType("multi-point")}
                    />
                    <label htmlFor="multi-city" className="text-sm font-medium">
                      Multi-Point Delivery
                    </label>
                  </div>
                </div>
                <div className="ml-auto text-sm text-green-600">Book International and Domestic Logistics</div>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-5">
                <div className="space-y-1 md:col-span-1">
                  <label className="text-xs text-gray-500">From</label>
                  <CFSAreaDropdown
                    city="Mumbai"
                    onSelect={(area) => {
                      setSelectedCFSArea(area);
                      setShowCFSAreas(true);
                    }}
                  />
                </div>
                <div className="space-y-1 md:col-span-1">
                  <label className="text-xs text-gray-500">To</label>
                  <CFSAreaDropdown
                    city="Singapore"
                    onSelect={(area) => {
                      setSelectedSingaporeCFSArea(area);
                      setShowSingaporeCFSAreas(true);
                    }}
                  />
                </div>
                <div className="space-y-1 md:col-span-1">
                  <label className="text-xs text-gray-500">Departure</label>
                  <div className="rounded-md border p-2">
                    <div className="text-lg font-semibold">20</div>
                    <div className="text-xs text-gray-500">Jun'25, Monday</div>
                  </div>
                </div>
                <div className="space-y-1 md:col-span-1">
                  <label className="text-xs text-gray-500">Cargo Type</label>
                  <div className="rounded-md border p-2">
                    <div className="text-lg font-semibold">1</div>
                    <div className="text-xs text-gray-500">Container, 20ft Standard</div>
                  </div>
                </div>
                <div className="flex items-end md:col-span-1">
                  <button className="w-full rounded-md bg-green-600 py-3 text-center font-medium text-white hover:bg-green-700">
                    SEARCH
                  </button>
                </div>
              </div>

              <div className="mt-4">
                <div className="text-sm font-medium">Select a special rate</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  <div className={`flex items-center gap-2 rounded-md border px-3 py-1.5 ${rateType === "regular" ? "border-green-200 bg-green-50" : ""}`}>
                    <input
                      type="radio"
                      id="regular"
                      name="rate-type"
                      className="h-4 w-4 text-green-600"
                      checked={rateType === "regular"}
                      onChange={() => setRateType("regular")}
                    />
                    <label htmlFor="regular" className="text-sm">
                      Regular
                    </label>
                    <span className="text-xs text-gray-500">Standard rates</span>
                  </div>
                  <div className={`flex items-center gap-2 rounded-md border px-3 py-1.5 ${rateType === "business" ? "border-green-200 bg-green-50" : ""}`}>
                    <input
                      type="radio"
                      id="business"
                      name="rate-type"
                      className="h-4 w-4 text-green-600"
                      checked={rateType === "business"}
                      onChange={() => setRateType("business")}
                    />
                    <label htmlFor="business" className="text-sm">
                      Business
                    </label>
                    <span className="text-xs text-gray-500">Up to 15% off</span>
                  </div>
                  <div className={`flex items-center gap-2 rounded-md border px-3 py-1.5 ${rateType === "priority" ? "border-green-200 bg-green-50" : ""}`}>
                    <input
                      type="radio"
                      id="priority"
                      name="rate-type"
                      className="h-4 w-4 text-green-600"
                      checked={rateType === "priority"}
                      onChange={() => setRateType("priority")}
                    />
                    <label htmlFor="priority" className="text-sm">
                      Priority Shipping
                    </label>
                    <span className="text-xs text-gray-500">Up to 10% off</span>
                  </div>
                  <div className={`flex items-center gap-2 rounded-md border px-3 py-1.5 ${rateType === "bulk" ? "border-green-200 bg-green-50" : ""}`}>
                    <input
                      type="radio"
                      id="bulk"
                      name="rate-type"
                      className="h-4 w-4 text-green-600"
                      checked={rateType === "bulk"}
                      onChange={() => setRateType("bulk")}
                    />
                    <label htmlFor="bulk" className="text-sm">
                      Bulk Orders
                    </label>
                    <span className="text-xs text-gray-500">Up to 20% off</span>
                  </div>
                </div>
              </div>
            </div>

            {showCFSAreas && (
              <CFSAreaList
                city="Mumbai"
                selectedArea={selectedCFSArea}
                onSelect={(area) => {
                  setSelectedCFSArea(area);
                  setShowCFSAreas(false);
                }}
              />
            )}

            {showSingaporeCFSAreas && (
              <CFSAreaList
                city="Singapore"
                selectedArea={selectedSingaporeCFSArea}
                onSelect={(area) => {
                  setSelectedSingaporeCFSArea(area);
                  setShowSingaporeCFSAreas(false);
                }}
              />
            )}

            <div className="mt-6 flex items-center justify-center pb-6">
              <button className="flex items-center gap-1 rounded-full bg-green-800 px-4 py-2 text-sm text-white">
                <span>Explore More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-green-50 to-green-100">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block text-sm font-medium text-green-600 mb-2">• OUR VISION</div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">Pioneering Sustainable Global Logistics</h2>
                <p className="text-gray-700 mb-6 text-lg">
                  At Green Ocean Logistics, we envision a world where global trade flows seamlessly while respecting our planet.
                  Our mission is to revolutionize the logistics industry by providing innovative, efficient, and environmentally
                  responsible solutions that connect businesses across continents.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Sustainability First</h3>
                      <p className="text-gray-600">We're committed to reducing carbon emissions through optimized routes and green technologies.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 6v6l4 2"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Efficiency & Reliability</h3>
                      <p className="text-gray-600">Our advanced tracking systems and dedicated team ensure on-time delivery, every time.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Global Partnership Network</h3>
                      <p className="text-gray-600">We've built strong relationships with partners worldwide to offer seamless service across borders.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-green-200 rounded-full opacity-50"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-green-200 rounded-full opacity-50"></div>
                <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="/placeholder.svg?height=500&width=600"
                    alt="Green Ocean Logistics Vision"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-4 bg-gray-50 border-y border-gray-200">
          <div className="container">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <h2 className="text-xl font-bold text-gray-700 mr-4">Services</h2>
                <div className="flex space-x-1">
                  <div className="h-2 w-2 rounded-full bg-green-600"></div>
                  <div className="h-2 w-2 rounded-full bg-green-400"></div>
                  <div className="h-2 w-2 rounded-full bg-green-300"></div>
                </div>
              </div>

              <div className="flex items-center overflow-x-auto no-scrollbar py-2">
                <div className="flex space-x-4">
                  <Link href="#" className="px-4 py-2 text-sm font-medium bg-white border border-gray-200 rounded-md hover:bg-green-50 hover:border-green-200 transition-colors whitespace-nowrap">
                    All Services
                  </Link>
                  <Link href="#" className="px-4 py-2 text-sm font-medium bg-white border border-gray-200 rounded-md hover:bg-green-50 hover:border-green-200 transition-colors whitespace-nowrap">
                    CFS Services
                  </Link>
                  <Link href="#" className="px-4 py-2 text-sm font-medium bg-white border border-gray-200 rounded-md hover:bg-green-50 hover:border-green-200 transition-colors whitespace-nowrap">
                    3PL
                  </Link>
                  <Link href="#" className="px-4 py-2 text-sm font-medium bg-white border border-gray-200 rounded-md hover:bg-green-50 hover:border-green-200 transition-colors whitespace-nowrap">
                    Warehouse
                  </Link>
                  <Link href="#" className="px-4 py-2 text-sm font-medium bg-white border border-gray-200 rounded-md hover:bg-green-50 hover:border-green-200 transition-colors whitespace-nowrap">
                    Forex
                  </Link>
                </div>
              </div>

              <div className="hidden lg:flex items-center">
                <Link href="#" className="text-green-600 font-medium text-sm flex items-center">
                  VIEW ALL
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container">
            <div className="text-center mb-10">
              <div className="inline-block text-sm font-medium text-green-600 mb-2">• PACKAGES</div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Our Packages</h2>
              <p className="mt-4 max-w-2xl mx-auto text-gray-500">
                Our CFS facilities offer comprehensive services for container handling, storage, and distribution.
                We provide efficient stuffing, de-stuffing, and secure storage solutions at strategic port locations worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <CFSCard
                title="Mumbai CFS"
                description="Located at Mumbai Port, offering container stuffing, de-stuffing, and storage services."
                image="/placeholder.svg?height=200&width=300"
              />
              <CFSCard
                title="Chennai CFS"
                description="Strategically located near Chennai Port with excellent connectivity to major highways."
                image="/placeholder.svg?height=200&width=300"
              />
              <CFSCard
                title="Dubai CFS"
                description="State-of-the-art facility at Jebel Ali Port with advanced security and handling equipment."
                image="/placeholder.svg?height=200&width=300"
              />
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <CFSCard
                title="Singapore CFS"
                description="Modern facility with temperature-controlled storage and customs clearance services."
                image="/placeholder.svg?height=200&width=300"
              />
              <CFSCard
                title="Rotterdam CFS"
                description="Europe's largest CFS facility with specialized handling for hazardous goods."
                image="/placeholder.svg?height=200&width=300"
              />
              <CFSCard
                title="Los Angeles CFS"
                description="Strategically located near the Port of LA with direct highway access and rail connectivity."
                image="/placeholder.svg?height=200&width=300"
              />
            </div>


          </div>
        </section>
        <section className="py-8 md:py-12">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="group flex items-start gap-4 rounded-lg border p-4 transition-all hover:border-green-600 hover:bg-green-50">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                      <rect x="2" y="6" width="20" height="12" rx="2" />
                      <path d="M12 12h.01" />
                      <path d="M17 12h.01" />
                      <path d="M7 12h.01" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Container Stuffing</h3>
                    <p className="text-gray-600">Professional loading of goods into containers with optimal space utilization and secure packing techniques.</p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <a href="#" className="text-green-600 font-medium text-sm flex items-center">
                        Learn more
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group flex items-start gap-4 rounded-lg border p-4 transition-all hover:border-green-600 hover:bg-green-50">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Container De-stuffing</h3>
                    <p className="text-gray-600">Efficient unloading of containers with careful handling and sorting of goods for further distribution or storage.</p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <a href="#" className="text-green-600 font-medium text-sm flex items-center">
                        Learn more
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="group flex items-start gap-4 rounded-lg border p-4 transition-all hover:border-green-600 hover:bg-green-50">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                      <rect width="16" height="16" x="4" y="4" rx="2" />
                      <path d="M4 12h16" />
                      <path d="M12 4v16" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Storage Solutions</h3>
                    <p className="text-gray-600">Secure, climate-controlled storage facilities for short and long-term cargo storage with 24/7 monitoring and security.</p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <a href="#" className="text-green-600 font-medium text-sm flex items-center">
                        Learn more
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group flex items-start gap-4 rounded-lg border p-4 transition-all hover:border-green-600 hover:bg-green-50">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Customs Clearance</h3>
                    <p className="text-gray-600">Streamlined customs documentation and clearance services to ensure smooth import and export processes with minimal delays.</p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <a href="#" className="text-green-600 font-medium text-sm flex items-center">
                        Learn more
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black py-12 text-white md:py-24">
          <div className="container">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row">
              <div className="space-y-2">
                <div className="flex items-center gap-1 text-sm font-medium uppercase text-gray-400">
                  <span>•</span>
                  <span>STATISTICS</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Progress</h2>
              </div>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <StatsCard title="100%" description="Customer Satisfaction" />
                <StatsCard title="300+" description="Global Destinations" />
                <StatsCard title="24/7" description="Round the Clock Support" />
                <StatsCard title="1200+" description="Successful Deliveries" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-1 text-sm font-medium uppercase text-gray-500">
                  <span>•</span>
                  <span>OUR SERVICES</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">We Have Everything</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Our logistics company is dedicated to enabling the easy global transit across the world for global
                  networks. Equipped with experienced professionals, streamlined fleets and secure transportation of
                  your goods, regardless of the destination.
                </p>
              </div>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-4">
              <FreightService
                title="Shipping Freight"
                description="We specialize in end-to-end logistics solutions, offering efficient, reliable, and customized services tailored to your requirements."
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-green-600"
                  >
                    <path d="M18 8c0 5.5-3.8 10-8 10s-8-4.5-8-10h16Z" />
                    <path d="M2 8h20" />
                    <path d="M12 16v4" />
                    <path d="M8 4h8" />
                    <path d="M18 16c-.5 1.5-1.5 2-3 2" />
                  </svg>
                }
              />
              <FreightService
                title="Truck Freight"
                description="We specialize in end-to-end logistics solutions, offering efficient, reliable, and customized services tailored to your requirements."
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-green-600"
                  >
                    <path d="M10 17h4V5H2v12h3" />
                    <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" />
                    <path d="M14 17h1" />
                    <circle cx="7.5" cy="17.5" r="2.5" />
                    <circle cx="17.5" cy="17.5" r="2.5" />
                  </svg>
                }
              />
              <FreightService
                title="Air Freight"
                description="We specialize in end-to-end logistics solutions, offering efficient, reliable, and customized services tailored to your requirements."
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-green-600"
                  >
                    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
                  </svg>
                }
              />
              <FreightService
                title="Train Freight"
                description="We specialize in end-to-end logistics solutions, offering efficient, reliable, and customized services tailored to your requirements."
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-green-600"
                  >
                    <rect x="4" y="3" width="16" height="16" rx="2" />
                    <path d="M4 11h16" />
                    <path d="M12 3v8" />
                    <path d="M8 19l-2 3" />
                    <path d="M18 22l-2-3" />
                  </svg>
                }
              />
            </div>
          </div>
        </section>

        <section className="bg-black py-12 text-white md:py-24">
          <div className="container">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-1 text-sm font-medium uppercase text-gray-400">
                  <span>•</span>
                  <span>TRACKING</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Track Your Package</h2>
              </div>
              <div className="mt-6 flex w-full max-w-md items-center gap-2">
                <Input
                  type="text"
                  placeholder="Type tracking ID"
                  className="bg-gray-800 text-white placeholder:text-gray-500"
                />
                <Button size="icon" className="bg-green-600 hover:bg-green-700">
                  <SearchIcon className="h-4 w-4" />
                </Button>
              </div>
              <div className="mt-12 w-full">
                <img
                  src="/placeholder.svg?height=400&width=800"
                  alt="World Map"
                  className="mx-auto h-auto w-full max-w-4xl"
                  width={800}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-1 text-sm font-medium uppercase text-gray-500">
                  <span>•</span>
                  <span>FAQ</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Frequently Asked Questions
                </h2>
              </div>
              <div className="mt-12 w-full max-w-3xl">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What shipping options do you offer?</AccordionTrigger>
                    <AccordionContent>
                      Our logistics company is dedicated to enabling the easy global transit across the world for global
                      networks. Equipped with experienced professionals, streamlined fleets and secure transportation of
                      your goods, regardless of the destination.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Are your packaging materials eco-friendly?</AccordionTrigger>
                    <AccordionContent>
                      Yes, we use sustainable packaging materials that are biodegradable and recyclable. Our commitment
                      to the environment extends to all aspects of our operations, including packaging.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>How do I get a quote for my shipping?</AccordionTrigger>
                    <AccordionContent>
                      You can request a quote through our website by filling out the quote request form, or by
                      contacting our customer service team directly. We'll provide you with a detailed quote based on
                      your specific shipping requirements.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>How can I track my shipment?</AccordionTrigger>
                    <AccordionContent>
                      You can track your shipment using the tracking ID provided to you at the time of booking. Simply
                      enter the tracking ID in the tracking section of our website or contact our customer service for
                      assistance.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-green-600 py-12 text-white md:py-24">
          <div className="container">
            <div className="flex flex-col items-center justify-center text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">We Are Here to Talk</h2>
              <p className="mx-auto mt-4 max-w-[600px] text-green-100">
                Contact us today to learn more about our services and how we can help you with your logistics needs. Our
                team is ready to assist you with any questions you may have.
              </p>
              <Button className="mt-6 bg-white text-green-600 hover:bg-green-50">
                Contact Us
                <UserIcon className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-white py-6 md:py-12">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <Link href="/" className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-green-600"
              >
                <path d="M4 22h16a2 2 0 0 0 2-2V9a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5" />
                <path d="M2 15h10" />
                <path d="M5 12h14" />
                <path d="M7 9h16" />
                <path d="M18 19h2" />
                <path d="M10 19h5" />
              </svg>
              <span className="text-xl font-bold">Green Ocean</span>
            </Link>

            <div className="flex items-center gap-4">
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t pt-6 md:flex-row">
            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-500">© 2023 Green Ocean Logistics. All rights reserved.</div>
            </div>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-sm text-gray-500 hover:underline">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-gray-500 hover:underline">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-gray-500 hover:underline">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <LoginModal />
    </div>
  )
}








