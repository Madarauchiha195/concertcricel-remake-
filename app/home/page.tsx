import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation"
import Navbar from "@/components/Navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Calendar, Package, ShoppingBag, Home, Link2, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const featureCards = [
  {
    title: "Find Buddies",
    desc: "Find concert buddies",
    icon: <Users className="w-7 h-7 text-white" />,
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Events",
    desc: "Find events",
    icon: <Calendar className="w-7 h-7 text-white" />,
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Packages",
    desc: "Special packages",
    icon: <Package className="w-7 h-7 text-white" />,
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Merchandise",
    desc: "Get Merchandise",
    icon: <ShoppingBag className="w-7 h-7 text-white" />,
    img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Party Nights",
    desc: "Unforgettable parties",
    icon: <Users className="w-7 h-7 text-white" />,
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Live Music",
    desc: "Experience live shows",
    icon: <Calendar className="w-7 h-7 text-white" />,
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
  },
]

const liveConcerts = [
  {
    title: "EDM Night",
    desc: "Feel the beat with top DJs.",
    img: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Rock Legends",
    desc: "Experience legendary rock bands.",
    img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Jazz Evening",
    desc: "Smooth jazz under the stars.",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Pop Fiesta",
    desc: "Dance to the latest pop hits.",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
  },
]

export default function HomePage() {
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
        <Navbar />

        {/* Hero Section */}
        <section className="max-w-2xl mx-auto px-4 pt-8 pb-4">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-extrabold text-purple-200 mb-2 drop-shadow-lg">
                Concert Circle
              </h1>
              <p className="text-purple-100 text-lg md:text-2xl font-medium mb-6">
                Discover, Book, and Experience the Best Concerts & Festivals
              </p>
              {/* Plan Your Gig button links to /gig-plan */}
              <Link
                href="/gig-plan"
                className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-200"
              >
                Plan Your Gig
              </Link>
            </div>
            
          </div>
        </section>

        {/* Features Grid */}
        <section className="max-w-4xl mx-auto px-2 md:px-6 py-4">
          <div
            className="
              grid
              grid-cols-2
              sm:grid-cols-3
              md:grid-cols-3
              lg:grid-cols-3
              xl:grid-cols-3
              gap-4 md:gap-6
            "
          >
            {featureCards.slice(0, 6).map((card, i) => (
              <Card
                key={i}
                className="group bg-black/40 border-purple-500/30 text-white overflow-hidden hover:shadow-xl transition-all duration-200"
              >
                <div className="relative h-24 md:h-32 w-full">
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-200"
                    sizes="(max-width: 768px) 100vw, 200px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end justify-end p-2">
                    <div className="bg-purple-600/70 rounded-full p-2 shadow-lg">{card.icon}</div>
                  </div>
                </div>
                <CardContent className="p-3 md:p-4">
                  <h3 className="text-purple-200 font-semibold text-base md:text-lg mb-1">{card.title}</h3>
                  <p className="text-xs md:text-sm text-gray-200">{card.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Live Concerts Section */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-200 mb-6">LIVE CONCERTS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {liveConcerts.map((concert, i) => (
              <Card
                key={i}
                className="group bg-black/40 border-purple-500/30 text-white overflow-hidden hover:shadow-xl transition-all duration-200"
              >
                <div className="relative h-32 md:h-40 w-full">
                  <Image
                    src={concert.img}
                    alt={concert.title}
                    fill
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-200"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-3">
                    <div>
                      <h4 className="text-lg font-bold text-purple-100 mb-1">{concert.title}</h4>
                      <div className="text-xs text-gray-200">{concert.desc}</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Bottom Navigation (Mobile only) */}
        <div className="fixed bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-4 md:hidden z-20">
          <div className="flex justify-around max-w-sm mx-auto">
            <Home className="w-6 h-6 text-pink-400" />
            <Calendar className="w-6 h-6 text-gray-400" />
            {/* Link2 icon links to /gig-plan */}
            <Link href="/gig-plan">
              <Link2 className="w-6 h-6 text-gray-400" />
            </Link>
            <Users className="w-6 h-6 text-gray-400" />
            <User className="w-6 h-6 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  )
}
