import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Lightbulb } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-linear-to-br from-amber-500 to-orange-500 p-2 rounded-lg mr-3">
                <Lightbulb className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl">BrightNest</span>
                <span className="text-xs text-gray-400 block -mt-1">Lighting Solution</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted potlight installation experts for over 8 years. We illuminate what matters most to you.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-amber-400 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-amber-400 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-amber-400 cursor-pointer transition-colors" />
            </div>
          </div>

          
          <div>
            <h3 className="text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Indoor Potlights</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Outdoor Potlights</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Smart Lighting</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Custom Design</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Retrofit & Upgrades</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Commercial Lighting</a></li>
            </ul>
          </div>

         
          <div>
            <h3 className="text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-amber-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Gallery</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Warranty Info</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Careers</a></li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-lg mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-amber-400" />
                <span>(880) 123-4567890</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-amber-400" />
                <span>info@brightnestlighting.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-3 text-amber-400" />
                <span>Serving the Greater<br />Toronto Area</span>
              </div>
            </div>
            
            
            <div className="mt-6">
              <h4 className="mb-2">Licensed & Certified</h4>
              <p className="text-sm text-gray-400">
                ESA Licensed Electricians<br />
                Fully Bonded & Insured
              </p>
            </div>
          </div>
        </div>

        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 BrightNest Lighting Solution. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}