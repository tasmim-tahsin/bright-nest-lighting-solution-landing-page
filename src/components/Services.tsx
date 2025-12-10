import { Home, Sun, Zap, Settings, Clock, DollarSign } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Indoor Potlight Installation",
    description: "Transform your interior spaces with perfectly positioned recessed potlights that create the ideal ambiance for every room.",
    features: ["Living rooms & bedrooms", "Kitchen lighting design", "Energy-efficient LEDs"],
    image: "https://images.unsplash.com/photo-1748092278708-3a3b77f8d52b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvb3IlMjByZWNlc3NlZCUyMGxpZ2h0aW5nfGVufDF8fHx8MTc2NTIyNjI1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    icon: Sun,
    title: "Outdoor Potlight Installation",
    description: "Enhance your home's curb appeal and security with professionally installed outdoor potlights for eaves, soffits, and landscaping.",
    features: ["Soffit & eave lighting", "Landscape illumination", "Weather-resistant fixtures"],
    image: "https://images.unsplash.com/photo-1606388701602-2e3727da5b28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwbGFuZHNjYXBlJTIwbGlnaHRpbmd8ZW58MXx8fHwxNzY1MjAxMDczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    icon: Zap,
    title: "Smart Lighting Solutions",
    description: "Integrate intelligent lighting control with smart potlights that you can adjust from your phone or voice commands.",
    features: ["Voice control compatible", "App-based dimming", "Scheduling & automation"],
    image: "https://images.unsplash.com/photo-1752262167753-37a0ec83f614?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGhvbWUlMjBsaWdodGluZ3xlbnwxfHx8fDE3NjUxNzQxNjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    icon: Settings,
    title: "Custom Lighting Design",
    description: "Work with our lighting experts to create a custom potlight layout that perfectly suits your home's architecture and your lifestyle.",
    features: ["3D design preview", "Professional consultation", "Personalized layouts"],
    image: "https://images.unsplash.com/photo-1762631817831-c3e7ee1b1467?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob21lJTIwbGlnaHRpbmd8ZW58MXx8fHwxNzY1MTQ0MTY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    icon: Clock,
    title: "Retrofit & Upgrades",
    description: "Upgrade outdated lighting systems or retrofit existing fixtures with modern, energy-efficient LED potlights.",
    features: ["Same-day service", "Minimal ceiling damage", "Color temperature options"],
    image: "https://images.unsplash.com/photo-1714425341725-b7d9825f6e83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwb3RsaWdodCUyMGNlaWxpbmd8ZW58MXx8fHwxNzY1MjI2MjU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    icon: DollarSign,
    title: "Commercial Lighting",
    description: "Professional potlight installation for offices, retail spaces, and commercial properties to create the perfect business environment.",
    features: ["Large-scale projects", "Code compliance", "Maintenance packages"],
    image: "https://images.unsplash.com/photo-1762631817831-c3e7ee1b1467?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob21lJTIwbGlnaHRpbmd8ZW58MXx8fHwxNzY1MTQ0MTY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            Professional Potlight Installation Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From elegant indoor lighting to stunning outdoor illumination, we provide comprehensive 
            potlight solutions tailored to your home and budget.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group hover:shadow-lg transition-shadow duration-300">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg">
                  <service.icon className="w-6 h-6 text-amber-600" />
                </div>
              </div>
              <div className="p-6 bg-white rounded-b-lg shadow-sm">
                <div className="text-xl">{service.title}</div>
                <div className="text-gray-600">
                  {service.description}
                </div>
              </div>
              <div className="p-6 bg-gray-50 rounded-b-lg group-hover:bg-white transition-colors">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="w-full group-hover:bg-linear-to-r group-hover:from-amber-500 group-hover:to-orange-500 group-hover:text-white transition-colors border-amber-200 p-2 rounded-md text-center font-medium cursor-pointer">
                  Learn More
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-linear-to-r from-amber-500 to-orange-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl mb-4">
              Not Sure Which Service You Need?
            </h3>
            <p className="text-amber-50 mb-6 max-w-2xl mx-auto">
              Our lighting experts will assess your space and recommend the perfect potlight solution for your home or business.
            </p>
            <div className="bg-white text-amber-600 hover:bg-gray-100 ">
              Schedule Free Consultation
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}