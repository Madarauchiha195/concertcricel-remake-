import { Card, CardContent } from "@/components/ui/card"
import { Shield, Zap, Globe, Award } from "lucide-react"
import Image from "next/image"

export default function WhyConcertCircle() {
  const reasons = [
    {
      icon: Shield,
      title: "Trusted Platform",
      description: "Secure booking and verified event information you can rely on.",
    },
    {
      icon: Zap,
      title: "Instant Planning",
      description: "AI-powered trip planning that organizes everything in minutes.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Access to concerts and festivals worldwide with local insights.",
    },
    {
      icon: Award,
      title: "Premium Experience",
      description: "Exclusive access to VIP packages and early bird offers.",
    },
  ]

  return (
    <section className="px-4 py-16 lg:py-24 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Why Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Concert Circle?
              </span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              We're not just another event platform. We're a community of music lovers dedicated to creating
              unforgettable experiences and lasting connections.
            </p>

            <div className="grid grid-cols-2 gap-2 md:gap-4">
              {reasons.map((reason, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-2 md:p-4 border border-white/20">
                  <div className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mb-2">
                    <reason.icon className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  </div>
                  <h3 className="text-xs md:text-sm font-semibold text-white mb-1">{reason.title}</h3>
                  <p className="text-xs md:text-sm text-white/80">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-purple-500/30">
                <CardContent className="p-6">
                    <div className="aspect-square bg-pink-100/60 backdrop-blur-md rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    <Image
                      src="/concert-live.jpg"
                      alt="Live Concert Experience"
                      width={150}
                      height={150}
                      className="rounded-lg object-cover w-full h-full"
                    />
                    </div>
                    <h4 className="text-gray-800 font-semibold mb-2">Live Concerts</h4>
                    <p className="text-gray-700 text-sm">Experience the energy</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-pink-600/20 to-purple-600/20 border-purple-500/30 mt-8">
                <CardContent className="p-6">
                  <div className="aspect-square bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    <Image
                      src="/image.png"
                      alt=" Concert Community"
                      width={150}
                      height={150}
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </div>
                  <h4 className="text-gray-800 font-semibold mb-2">Community</h4>
                    <p className="text-gray-700 text-sm">Connect with others</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
