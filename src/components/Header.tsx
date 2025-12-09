import { Phone, Lightbulb, Menu } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
      setIsOpen(!isOpen);
  };

  return (
    <header id="nav" className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="#home">
            <div className="flex items-center">
            <div className="bg-linear-to-br from-amber-500 to-orange-500 text-white p-2 rounded-lg mr-3">
              <Lightbulb className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl text-gray-900">BrightNest</span>
              <span className="text-xs text-gray-600 block -mt-1">Lighting Solution</span>
            </div>
          </div>
          </a>
          


          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-amber-500 transition-colors">Home</a>
            <a href="#services" className="text-gray-600 hover:text-amber-500 transition-colors">Services</a>
            <a href="#before-after" className="text-gray-600 hover:text-amber-500 transition-colors">Gallery</a>
            <a href="#testimonials" className="text-gray-600 hover:text-amber-500 transition-colors">Reviews</a>
            <a href="#contact" className="text-gray-600 hover:text-amber-500 transition-colors">Contact</a>
          </nav>

          
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center text-gray-600">
              <Phone className="w-4 h-4 mr-2" />
              <span>(880) 123-4567890</span>
            </div>
            <div className="hidden sm:inline-flex bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 px-2 py-1 rounded-md text-white font-medium cursor-pointer transition-colors">
              Free Quote
            </div>
            <div className="md:hidden">
              <button onClick={handleClick} className="text-gray-600 hover:text-amber-500 focus:outline-none">
                <Menu className="w-6 h-6" />
              </button>
              <div className={`absolute top-16 right-4 bg-white border border-gray-200 rounded-lg shadow-lg py-4 px-6 transition-transform duration-300 ${isOpen ? 'transform scale-100' : 'transform scale-0'}`}>
                <nav className="flex flex-col space-y-4">
                  <a href="#home" className="text-gray-600 hover:text-amber-500 transition-colors">Home</a>
                  <a href="#services" className="text-gray-600 hover:text-amber-500 transition-colors">Services</a>
                  <a href="#before-after" className="text-gray-600 hover:text-amber-500 transition-colors">Gallery</a>
                  <a href="#testimonials" className="text-gray-600 hover:text-amber-500 transition-colors">Reviews</a>
                  <a href="#contact" className="text-gray-600 hover:text-amber-500 transition-colors">Contact</a>
                </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    </header>
  );
}