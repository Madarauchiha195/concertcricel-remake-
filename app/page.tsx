import Hero from "@/components/Hero"
import WhatWeDo from "@/components/WhatWeDo"
import WhyConcertCircle from "@/components/WhyConcertCircle"
import Testimonials from "@/components/Testimonials"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation"

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
        <Hero />
        <WhatWeDo />
        <WhyConcertCircle />
        <Testimonials />
        <Footer />
      </div>
    </div>
  )
}
