import { Phone, Mail, MapPin, Clock, Check } from "lucide-react";


export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Get Your Free Potlight Installation Estimate
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ready to illuminate your home with expert potlight installation? Contact us today for a free, 
              no-obligation estimate from our licensed electricians.
            </p>

            
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="bg-amber-100 p-3 rounded-lg mr-4">
                  <Phone className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <div className="text-gray-900 font-medium">Call Us</div>
                  <a href="tel:5551235483" className="text-gray-600 hover:text-amber-600 transition-colors">
                    (555) 123-LITE
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-amber-100 p-3 rounded-lg mr-4">
                  <Mail className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <div className="text-gray-900 font-medium">Email</div>
                  <a href="mailto:info@brightnestlighting.com" className="text-gray-600 hover:text-amber-600 transition-colors">
                    info@brightnestlighting.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-amber-100 p-3 rounded-lg mr-4">
                  <MapPin className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <div className="text-gray-900 font-medium">Service Area</div>
                  <div className="text-gray-600">Greater Toronto Area & Surrounding Cities</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-amber-100 p-3 rounded-lg mr-4">
                  <Clock className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <div className="text-gray-900 font-medium">Business Hours</div>
                  <div className="text-gray-600">Mon-Fri: 8AM-6PM | Sat: 9AM-4PM</div>
                </div>
              </div>
            </div>

            
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose BrightNest?</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                  Licensed & certified electricians
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                  10-year warranty on installations
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                  Energy-efficient LED technology
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                  Free design consultation
                </li>
              </ul>
            </div>
          </div>

          
          <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 md:p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">Request Free Estimate</h3>
            <p className="text-gray-600 text-center mb-6">Fill out the form below and we'll get back to you within 24 hours</p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name *
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name *
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Property Address
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                  placeholder="123 Main St, Toronto, ON"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                  Service Needed *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition bg-white"
                >
                  <option value="">Select a service</option>
                  <option value="indoor">Indoor Potlight Installation</option>
                  <option value="outdoor">Outdoor Potlight Installation</option>
                  <option value="smart">Smart Lighting Setup</option>
                  <option value="design">Custom Lighting Design</option>
                  <option value="retrofit">Retrofit & Upgrades</option>
                  <option value="commercial">Commercial Lighting Solutions</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                  placeholder="Tell us about your lighting project, number of rooms, timeline, or any specific requirements..."
                />
              </div>

              <div className="flex items-center justify-center bg-amber-500 hover:bg-amber-600 transition-normal text-white border-amber-200 p-3 rounded-md text-center font-medium cursor-pointer">
                Get My Free Estimate
              </div>

              <p className="text-sm text-gray-600 text-center">
                <Check className="w-4 h-4 inline-block mr-2 text-amber-500" />
                By submitting this form, you agree to be contacted by our team about your lighting needs. 
                We respect your privacy and will never share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}