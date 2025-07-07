import { Card, CardContent } from "@/components/ui/card"
import { Music, Users, MapPin, Calendar, Ticket, Heart } from "lucide-react"

export default function WhatWeDo() {
  const features = [
    {
      icon: Music,
      title: "Discover Concerts",
      description: "Find live music events, festivals, and concerts happening near you or around the world.",
    },
    {
      icon: Users,
      title: "Find Concert Buddies",
      description: "Connect with like-minded music enthusiasts and make new friends who share your taste.",
    },
    {
      icon: MapPin,
      title: "Plan Your Trip",
      description: "Get complete travel planning assistance including accommodation, transport, and itinerary.",
    },
    {
      icon: Calendar,
      title: "Event Management",
      description: "Organize and manage your concert schedule with our intuitive planning tools.",
    },
    {
      icon: Ticket,
      title: "Ticket Booking",
      description: "Secure your tickets early with our integrated booking system and exclusive deals.",
    },
    {
      icon: Heart,
      title: "Personalized Experience",
      description: "Get recommendations based on your music preferences and concert history.",
    },
  ]

  return (
    <section className="px-4 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">What We Do</h2>
          <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            Concert Circle is your all-in-one platform for everything related to live music experiences. From discovery
            to planning, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-black/40 border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <CardContent className="p-2 md:p-4 lg:p-6">
                <div className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mb-2 md:mb-3 lg:mb-4">
                  <feature.icon className="w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 text-white" />
                </div>
                <h3 className="text-xs md:text-sm lg:text-xl font-semibold text-white mb-1 md:mb-2 lg:mb-3">
                  {feature.title}
                </h3>
                <p className="text-xs md:text-sm lg:text-base text-gray-300 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
