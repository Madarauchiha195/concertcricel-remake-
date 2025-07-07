"use client"

import type React from "react"

import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation"
import Navbar from "@/components/Navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Home, Calendar, Link2, Users, User, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

export default function GigPlanPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false) // <-- Add this state
  const [formData, setFormData] = useState({
    eventName: "",
    artist: "",
    date: "",
    venue: "",
    budget: "",
    preferences: "",
    from: "",
    departureDate: "",
    returningDate: "",
    crewSize: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/gig-plan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your gig plan has been submitted successfully.",
        })
        // Reset form
        setFormData({
          eventName: "",
          artist: "",
          date: "",
          venue: "",
          budget: "",
          preferences: "",
          from: "",
          departureDate: "",
          returningDate: "",
          crewSize: "",
        })
      } else {
        throw new Error("Failed to submit")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit your gig plan. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative min-h-screen">
      <BackgroundGradientAnimation
        gradientBackgroundStart="rgb(88, 28, 135)"
        gradientBackgroundEnd="rgb(124, 58, 237)"
        firstColor="139, 92, 246"
        secondColor="168, 85, 247"
        thirdColor="196, 181, 253"
        fourthColor="147, 51, 234"
        fifthColor="109, 40, 217"
        pointerColor="124, 58, 237"
        size="80%"
        blendingValue="hard-light"
        containerClassName="fixed inset-0 z-0"
        interactive={true}
      />

      <div className="relative z-10">
        {/* Mobile Header */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between p-4 bg-black/20 backdrop-blur-sm">
            <button
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Open menu"
              className="focus:outline-none"
            >
              <Menu className="w-6 h-6 text-white" />
            </button>
            <div className="text-white text-lg font-bold">Concert Circle</div>
            <div className="w-6 h-6" />
          </div>
          {/* Mobile Drawer */}
          {mobileMenuOpen && (
            <div className="absolute top-14 left-0 w-full bg-black/90 z-30 flex flex-col items-center py-6 space-y-4 animate-fade-in-down">
              <div className="w-full flex flex-col items-start space-y-4 px-6">
                <Link href="/home" className="text-white text-lg" onClick={() => setMobileMenuOpen(false)}>
                  Home
                </Link>
                <Link href="/gig-plan" className="text-white text-lg" onClick={() => setMobileMenuOpen(false)}>
                  Gig Plan
                </Link>
                <Link href="/concerts" className="text-white text-lg" onClick={() => setMobileMenuOpen(false)}>
                  Concerts
                </Link>
              </div>
              {/* Add more links as needed */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 text-gray-400 text-sm"
              >
                Close
              </button>
            </div>
          )}
        </div>

        <div className="hidden lg:block">
          <Navbar />
        </div>

        <div className="max-w-sm lg:max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-purple-100 mb-6">Gig Plan</h1>

          <Tabs defaultValue="plan" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-black/40">
              <TabsTrigger
                value="plan"
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white text-white"
              >
                Plan My Rave
              </TabsTrigger>
              <TabsTrigger
                value="concerts"
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white text-white"
              >
                Concerts
              </TabsTrigger>
            </TabsList>

            <TabsContent value="plan" className="space-y-4 mt-6">
              <div>
                <p className="text-sm text-gray-300 mb-4">Select your concert</p>
                <p className="text-xs text-gray-400 mb-4">
                  Our AI plans your entire trip — travel, stay, and more — in minutes.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="eventName" className="text-white">
                      Event Name
                    </Label>
                    <Input
                      id="eventName"
                      value={formData.eventName}
                      onChange={(e) => handleInputChange("eventName", e.target.value)}
                      className="bg-black/40 border-purple-500/30 text-white mt-1"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="artist" className="text-white">
                      Artist
                    </Label>
                    <Input
                      id="artist"
                      value={formData.artist}
                      onChange={(e) => handleInputChange("artist", e.target.value)}
                      className="bg-black/40 border-purple-500/30 text-white mt-1"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                    <Label htmlFor="date" className="text-white">
                      Date
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleInputChange("date", e.target.value)}
                      className="bg-black/40 border-purple-500/30 text-white mt-1 [&::-webkit-calendar-picker-indicator]:invert"
                      required
                    />
                    </div>

                  <div>
                    <Label htmlFor="venue" className="text-white">
                      Venue
                    </Label>
                    <Input
                      id="venue"
                      value={formData.venue}
                      onChange={(e) => handleInputChange("venue", e.target.value)}
                      className="bg-black/40 border-purple-500/30 text-white mt-1"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="budget" className="text-white">
                    Budget
                  </Label>
                  <Select onValueChange={(value) => handleInputChange("budget", value)}>
                    <SelectTrigger className="bg-black/40 border-purple-500/30 text-white mt-1">
                      <SelectValue placeholder="Select your budget range" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="under-50000">Under ₹50,000</SelectItem>
                        <SelectItem value="50000-100000">₹50,000 - ₹1,00,000</SelectItem>
                        <SelectItem value="100000-200000">₹1,00,000 - ₹2,00,000</SelectItem>
                        <SelectItem value="200000-500000">₹2,00,000 - ₹5,00,000</SelectItem>
                        <SelectItem value="over-500000">Over ₹5,00,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="from" className="text-white">
                    From
                  </Label>
                  <Input
                    id="from"
                    value={formData.from}
                    onChange={(e) => handleInputChange("from", e.target.value)}
                    className="bg-black/40 border-purple-500/30 text-white mt-1"
                    placeholder="Your location"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="departureDate" className="text-white">
                      Departure Date
                    </Label>
                    <Input
                      id="departureDate"
                      type="date"
                      value={formData.departureDate}
                      onChange={(e) => handleInputChange("departureDate", e.target.value)}
                      className="bg-black/40 border-purple-500/30 text-white mt-1 [&::-webkit-calendar-picker-indicator]:invert"
                    />
                  </div>
                  <div>
                    <Label htmlFor="returningDate" className="text-white">
                      Returning Date
                    </Label>
                    <Input
                      id="returningDate"
                      type="date"
                      value={formData.returningDate}
                      onChange={(e) => handleInputChange("returningDate", e.target.value)}
                      className="bg-black/40 border-purple-500/30 text-white mt-1 [&::-webkit-calendar-picker-indicator]:invert"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="crewSize" className="text-white">
                    Concert crew size?
                  </Label>
                  <Input
                    id="crewSize"
                    type="number"
                    value={formData.crewSize}
                    onChange={(e) => handleInputChange("crewSize", e.target.value)}
                    className="bg-black/40 border-purple-500/30 text-white mt-1"
                    placeholder="Number of people"
                  />
                </div>

                <div>
                  <Label htmlFor="preferences" className="text-white">
                    Preferences
                  </Label>
                  <Textarea
                    id="preferences"
                    value={formData.preferences}
                    onChange={(e) => handleInputChange("preferences", e.target.value)}
                    className="bg-black/40 border-purple-500/30 text-white mt-1"
                    placeholder="Any special preferences or requirements..."
                    rows={3}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                >
                  {isSubmitting ? "Submitting..." : "Plan my Gig (Link to ai agent)"}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="concerts" className="space-y-4 mt-6">
              <div>
                <p className="text-sm text-purple-300 mb-4">In The Spotlight</p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-4">Top Featured</h3>
                <div className="space-y-4">
                  <Card className="bg-black/40 border-purple-500/30 overflow-hidden">
                    <div className="relative">
                      <Image
                        src="/concert-live.jpg"
                        alt="Concert"
                        width={300}
                        height={120}
                        className="object-cover w-full h-24"
                      />
                      <div className="absolute bottom-2 left-2 right-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                          <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card className="bg-gradient-to-r from-pink-600 to-purple-600 border-none overflow-hidden">
                    <CardContent className="p-4">
                      <h4 className="text-white font-bold text-lg">Travis Scott India Tour</h4>
                      <p className="text-white/80 text-sm">Explore event</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm text-gray-400 mb-4">Hottest Shows(near you)</p>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="bg-black/40 rounded-lg aspect-square"></div>
                  <div className="bg-black/40 rounded-lg aspect-square"></div>
                  <div className="bg-black/40 rounded-lg aspect-square"></div>
                  <div className="bg-black/40 rounded-lg aspect-square"></div>
                </div>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-4">Global Bangers</h3>
                <Card className="bg-black/40 border-purple-500/30 overflow-hidden">
                  <div className="relative">
                    <Image
                      src="/concert-community.jpg"
                      alt="Taylor Swift"
                      width={300}
                      height={120}
                      className="object-cover w-full h-24"
                    />
                    <div className="absolute bottom-2 left-2">
                      <h4 className="text-white font-bold">Taylor Swift</h4>
                      <p className="text-white/80 text-xs">Eras Tour 2024</p>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          {/* Banner Section */}
          <div className="mt-8 mb-20">
            <h2 className="text-xl font-bold text-purple-300 mb-4">Banner</h2>
            <div className="relative">
              <Image
                src="/concert-live.jpg"
                alt="Concert banner"
                width={300}
                height={150}
                className="rounded-lg object-cover w-full h-32"
              />
            </div>
            <p className="text-xs text-gray-400 mt-2">Dream concert plan not on the list?</p>
            <p className="text-xs text-gray-500">Help us expand our list — our top heads will sort it out</p>

            <div className="mt-6">
              <h2 className="text-2xl font-bold text-purple-300">
                LIVE
                <br />
                CONCERTS
              </h2>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-4 lg:hidden">
          <div className="flex justify-around max-w-sm mx-auto">
            <Link href="/home">
              <Home className="w-6 h-6 text-gray-400" />
            </Link>
            <Calendar className="w-6 h-6 text-gray-400" />
            <Link2 className="w-6 h-6 text-pink-400" />
            <Users className="w-6 h-6 text-gray-400" />
            <User className="w-6 h-6 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  )
}
