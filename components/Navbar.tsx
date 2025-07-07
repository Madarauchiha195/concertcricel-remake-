"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="relative z-50">
      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between p-4 bg-black/20 backdrop-blur-sm">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
          <Link href="/">
            <div className="text-white text-lg font-bold">Concert Circle</div>
          </Link>
          <div className="w-10 h-10" />
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/90 backdrop-blur-sm p-4 space-y-4">
            
            <Link href="/home" className="block text-white hover:text-purple-300 transition-colors">
              Home
            </Link>
            <Link href="/gig-plan" className="block text-white hover:text-purple-300 transition-colors">
              Gig Plan
            </Link>
            <Link href="/" className="block text-white hover:text-purple-300 transition-colors">
              Events
            </Link>
            <Link href="/" className="block text-white hover:text-purple-300 transition-colors">
              About
            </Link>
            <Link href="/" className="block text-white hover:text-purple-300 transition-colors">
              Contact
            </Link>
          </div>
        )}
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center justify-between p-6 bg-black/20 backdrop-blur-sm">
        <Link href="/">
          <div className="text-white text-2xl font-bold cursor-pointer">Concert Circle</div>
        </Link>

        <div className="flex items-center space-x-8">
          
          <Link href="/home" className="text-white hover:text-purple-300 transition-colors font-medium">
            Home
          </Link>
          <Link href="/gig-plan" className="text-white hover:text-purple-300 transition-colors font-medium">
            Gig Plan
          </Link>
          <Link href="/" className="text-white hover:text-purple-300 transition-colors font-medium">
            Events
          </Link>
          <Link href="/" className="text-white hover:text-purple-300 transition-colors font-medium">
            About
          </Link>
          <Link href="/" className="text-white hover:text-purple-300 transition-colors font-medium">
            Contact
          </Link>
        </div>

        <Button className="bg-purple-600 hover:bg-purple-700 text-white">Get Started</Button>
      </div>
    </nav>
  )
}
