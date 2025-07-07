import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Music Enthusiast",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      text: "Concert Circle helped me discover amazing local artists and connect with fellow music lovers. The trip planning feature is incredible!",
    },
    {
      name: "Mike Chen",
      role: "Festival Goer",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      text: "I've attended 15 concerts this year thanks to Concert Circle. The community is amazing and the recommendations are spot-on.",
    },
    {
      name: "Emily Rodriguez",
      role: "Concert Photographer",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      text: "As a photographer, Concert Circle has opened doors to incredible events and helped me build a network in the music industry.",
    },
  ]

  const highlights = [
    { number: "98%", label: "User Satisfaction" },
    { number: "50K+", label: "Happy Customers" },
    { number: "1000+", label: "Events Covered" },
    { number: "4.9/5", label: "Average Rating" },
  ]

  return (
    <section className="px-4 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">What Our Community Says</h2>
          <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of music lovers who have transformed their concert experiences with Concert Circle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6 mb-12 md:mb-16">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-black/40 border-purple-500/30 hover:border-purple-400/50 transition-all duration-300"
            >
              <CardContent className="p-3 md:p-4 lg:p-6">
                <div className="flex items-center mb-2 md:mb-3">
                  <Quote className="w-4 h-4 md:w-6 md:h-6 text-purple-400 mr-2" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-xs md:text-sm text-gray-300 mb-3 md:mb-4 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <Avatar className="w-6 h-6 md:w-8 md:h-8 mr-2">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback className="text-xs">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-xs md:text-sm text-white font-semibold">{testimonial.name}</div>
                    <div className="text-xs text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Highlights */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-6 md:p-8 lg:p-12 border border-purple-500/30">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 md:mb-2">
                  {highlight.number}
                </div>
                <div className="text-xs md:text-sm lg:text-base text-gray-300">{highlight.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
