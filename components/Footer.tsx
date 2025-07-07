import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black/40 border-t border-purple-500/30">
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
          {/* Brand - spans 2 columns on mobile */}
          <div className="col-span-2 lg:col-span-1">
            <div className="text-2xl font-bold text-white mb-4">Concert Circle</div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your ultimate destination for discovering, planning, and experiencing live concerts worldwide.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="text-gray-400 hover:text-purple-400">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-400 hover:text-purple-400">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-400 hover:text-purple-400">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-400 hover:text-purple-400">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Services - single column on mobile */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <div className="space-y-3">
              <Link href="/discover" className="block text-gray-300 hover:text-purple-400 transition-colors text-sm">
                Discover Concerts
              </Link>
              <Link href="/buddies" className="block text-gray-300 hover:text-purple-400 transition-colors text-sm">
                Find Buddies
              </Link>
              <Link href="/planning" className="block text-gray-300 hover:text-purple-400 transition-colors text-sm">
                Trip Planning
              </Link>
              <Link href="/tickets" className="block text-gray-300 hover:text-purple-400 transition-colors text-sm">
                Ticket Booking
              </Link>
              <Link href="/vip" className="block text-gray-300 hover:text-purple-400 transition-colors text-sm">
                VIP Packages
              </Link>
            </div>
          </div>

          {/* Newsletter - single column on mobile */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Subscribe to get the latest concert updates and exclusive offers.
            </p>
            <div className="space-y-3">
              <Input
                placeholder="Enter your email"
                className="bg-black/40 border-purple-500/30 text-white placeholder:text-gray-400 text-sm"
              />
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-sm">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-purple-500/30 mt-12 pt-8">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-purple-400" />
              <span className="text-gray-300">hello@concertcircle.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-purple-400" />
              <span className="text-gray-300">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-purple-400" />
              <span className="text-gray-300">New York, NY</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-purple-500/30">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">© 2024 Concert Circle. All rights reserved.</div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-purple-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-purple-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-purple-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
