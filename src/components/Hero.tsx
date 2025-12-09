import { Award, Shield, Sparkle, Zap } from "lucide-react";

const Hero = () => {
    return (
        <section id="home" className="relative bg-linear-to-br from-amber-50 via-orange-50 to-slate-50 pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="mb-12 lg:mb-0">
            <div className="flex items-center mb-4">
              <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                <Sparkle className=" inline-block mr-2"/>#1 Potlight Installation Experts
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight">
              Transform Your Home with Expert Potlight Installation
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Illuminate your space with precision-installed potlights. From indoor ambiance to outdoor elegance, 
              we deliver professional lighting solutions that enhance every corner of your home.
            </p>
            
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-amber-600 mr-2" />
                <span className="text-gray-700">10-Year Warranty</span>
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 text-amber-600 mr-2" />
                <span className="text-gray-700">Licensed Electricians</span>
              </div>
              <div className="flex items-center">
                <Zap className="w-5 h-5 text-amber-600 mr-2" />
                <span className="text-gray-700">Energy Efficient LEDs</span>
              </div>
            </div>

            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="px-8 py-3 bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 rounded-md text-white font-medium cursor-pointer transition-colors">
                Get Free Estimate
              </div>
              <div className="px-8 py-3 border-amber-500 text-amber-600 hover:bg-amber-50 border rounded-md font-medium cursor-pointer transition-colors">
                Call (880) 123-4567890
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1714425341725-b7d9825f6e83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwb3RsaWdodCUyMGNlaWxpbmd8ZW58MXx8fHwxNzY1MjI2MjU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern home with potlight installation"
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl text-amber-600">1,200+</div>
                  <div className="text-sm text-gray-600">Installations</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-2xl text-amber-600">8</div>
                  <div className="text-sm text-gray-600">Years</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-2xl text-amber-600">4.9</div>
                  <div className="text-sm text-gray-600"> Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Hero;