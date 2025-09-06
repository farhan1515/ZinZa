"use client";

import { useState } from "react";
import {
  ChefHat,
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Mail,
  Phone,
  Heart,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 to-black overflow-hidden">
      {/* Wave Separator */}
      <div className="relative">
        <svg
          className="w-full h-20 text-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          {/* Newsletter Section */}
          <div className="text-center mb-16">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-3xl font-display font-bold text-white mb-4">
                Stay Updated with{" "}
                <span className="text-garlic-gold">Zinza</span>
              </h3>
              <p className="text-white/80 mb-8">
                Get the latest news, recipes, and exclusive offers delivered to
                your inbox
              </p>

              <form
                onSubmit={handleNewsletterSubmit}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-garlic-gold transition-colors"
                />
                <Button
                  type="submit"
                  variant="glow"
                  size="lg"
                  className="font-display"
                  disabled={subscribed}
                >
                  {subscribed ? (
                    <>Success! ✓</>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Subscribe
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <ChefHat className="h-8 w-8 text-garlic-gold" />
                <span className="text-2xl font-display font-bold text-white">
                  Zinza
                </span>
              </div>
              <p className="text-white/70 mb-6 leading-relaxed">
                Premium garlic sauce that elevates any dish to a 5-star flavor.
                Made with fresh ingredients in Windsor, Ontario.
              </p>

              {/* Social Media */}
              <div className="flex space-x-4">
                {[
                  { Icon: Facebook, href: "#", label: "Facebook" },
                  { Icon: Instagram, href: "#", label: "Instagram" },
                  { Icon: Twitter, href: "#", label: "Twitter" },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-garlic-gold hover:text-black transition-all duration-300 hover:scale-110"
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Products Column */}
            <div>
              <h4 className="text-lg font-display font-semibold text-white mb-4">
                Products
              </h4>
              <ul className="space-y-2">
                {[
                  "Original Garlic Sauce",
                  "Spice Flavor",
                  "Signature Flatbread",
                  "Recipe Ideas",
                  "Bulk Orders",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/70 hover:text-garlic-gold transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Business Column */}
            <div>
              <h4 className="text-lg font-display font-semibold text-white mb-4">
                For Business
              </h4>
              <ul className="space-y-2">
                {[
                  "Wholesale Pricing",
                  "Restaurant Partnership",
                  "Grocery Distribution",
                  "Deli Supplies",
                  "Custom Solutions",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/70 hover:text-garlic-gold transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="text-lg font-display font-semibold text-white mb-4">
                Contact
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-garlic-gold mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-white/70">
                    Windsor, Ontario
                    <br />
                    Canada
                  </span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-garlic-gold mr-3" />
                  <a
                    href="mailto:info@zinzasauce.com"
                    className="text-white/70 hover:text-garlic-gold transition-colors"
                  >
                    info@zinzasauce.com
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-garlic-gold mr-3" />
                  <a
                    href="tel:+1519XXX"
                    className="text-white/70 hover:text-garlic-gold transition-colors"
                  >
                    +1 (519) XXX-XXXX
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center text-white/60 mb-4 md:mb-0">
                <span>© 2024 Zinza Garlic Sauce. Made with</span>
                <Heart className="h-4 w-4 text-red-500 mx-1" />
                <span>in Windsor, Ontario</span>
              </div>

              <div className="flex space-x-6 text-sm">
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                  (item) => (
                    <a
                      key={item}
                      href="#"
                      className="text-white/60 hover:text-garlic-gold transition-colors duration-300"
                    >
                      {item}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-garlic-gold/30 to-transparent"></div>
      </div>
    </footer>
  );
}
