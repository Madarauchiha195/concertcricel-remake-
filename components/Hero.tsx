import { Button } from "@/components/ui/button"
import { Play, Users, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative px-4 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Welcome to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/90 to-white/60">
                Concert Circle
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-white/80 mb-8 leading-relaxed backdrop-blur-sm bg-black/20 rounded-lg p-4">
              Your ultimate destination for discovering, planning, and experiencing live concerts. Connect with fellow
              music lovers, find your next favorite artist, and create unforgettable memories.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/home">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-8 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Explore Concerts
                </Button>
              </Link>
              <Link href="/gig-plan">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/50 text-white hover:bg-white hover:text-purple-600 px-8 py-3 bg-white/10 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                >
                  Plan Your Gig
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 md:gap-4 mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/20">
              <div className="text-center backdrop-blur-sm bg-black/20 rounded-lg p-2 md:p-4">
                <div className="text-lg md:text-2xl lg:text-3xl font-bold text-white">50K+</div>
                <div className="text-xs md:text-sm text-white/70">Active Users</div>
              </div>
              <div className="text-center backdrop-blur-sm bg-black/20 rounded-lg p-2 md:p-4">
                <div className="text-lg md:text-2xl lg:text-3xl font-bold text-white">1000+</div>
                <div className="text-xs md:text-sm text-white/70">Events Planned</div>
              </div>
              <div className="text-center backdrop-blur-sm bg-black/20 rounded-lg p-2 md:p-4">
                <div className="text-lg md:text-2xl lg:text-3xl font-bold text-white">200+</div>
                <div className="text-xs md:text-sm text-white/70">Cities</div>
              </div>
            </div>
          </div>

          {/* Hero Image/Visual */}
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="aspect-square bg-gradient-to-br from-white/20 to-white/10 rounded-xl mb-6 flex items-center justify-center">
                <Image
                  src="concert-community.jpg?height=300&width=300"
                  alt="Concert crowd"
                  width={300}
                  height={300}
                  className="rounded-xl object-cover opacity-80"
                />
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <Users className="w-6 h-6 text-white mb-2" />
                  <div className="text-white font-semibold text-sm">Find Buddies</div>
                  <div className="text-white/70 text-xs">Connect with music lovers</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <Calendar className="w-6 h-6 text-white mb-2" />
                  <div className="text-white font-semibold text-sm">Live Events</div>
                  <div className="text-white/70 text-xs">Discover concerts near you</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
