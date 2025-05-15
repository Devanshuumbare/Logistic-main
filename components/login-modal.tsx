"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function LoginModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [bookingClicked, setBookingClicked] = useState(false)

  // Listen for booking button clicks
  useEffect(() => {
    const handleBookingClick = () => {
      setBookingClicked(true)
      setIsOpen(true)
    }

    // Add event listener to all booking buttons
    const bookingButtons = document.querySelectorAll("[data-booking-button]")
    bookingButtons.forEach((button) => {
      button.addEventListener("click", handleBookingClick)
    })

    return () => {
      // Clean up event listeners
      bookingButtons.forEach((button) => {
        button.removeEventListener("click", handleBookingClick)
      })
    }
  }, [])

  // Reset booking clicked state when modal is closed
  useEffect(() => {
    if (!isOpen) {
      setBookingClicked(false)
    }
  }, [isOpen])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Account Access</DialogTitle>
          <DialogDescription>
            {bookingClicked
              ? "Please log in or sign up to continue with your booking."
              : "Log in to your account or create a new one."}
          </DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="login" className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" type="email" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Button variant="link" className="h-auto p-0 text-xs">
                  Forgot password?
                </Button>
              </div>
              <Input id="password" placeholder="Enter your password" type="password" />
            </div>
            <DialogFooter className="mt-4">
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                Login
              </Button>
            </DialogFooter>
          </TabsContent>
          <TabsContent value="signup" className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="signup-name">Full Name</Label>
              <Input id="signup-name" placeholder="Enter your full name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signup-email">Email</Label>
              <Input id="signup-email" placeholder="Enter your email" type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signup-password">Password</Label>
              <Input id="signup-password" placeholder="Create a password" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signup-confirm">Confirm Password</Label>
              <Input id="signup-confirm" placeholder="Confirm your password" type="password" />
            </div>
            <DialogFooter className="mt-4">
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                Create Account
              </Button>
            </DialogFooter>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
