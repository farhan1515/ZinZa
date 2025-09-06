'use client';

import { useEffect, useState } from 'react';
import { Building2, Store, Utensils, Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import React from 'react';

export default function ContactSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const businessTypes = [
    {
      name: 'Grocery Stores',
      icon: Store,
      description: 'Premium shelf space for discerning customers',
      benefits: ['High-margin product', 'Growing demand', 'Loyal customer base']
    },
    {
      name: 'Restaurants',
      icon: Utensils,
      description: 'Elevate your dishes with our signature flavors',
      benefits: ['Unique menu differentiator', 'Customer satisfaction', 'Bulk pricing available']
    },
    {
      name: 'Delis',
      icon: Building2,
      description: 'Perfect complement to your gourmet offerings',
      benefits: ['Artisanal quality', 'Fresh ingredients', 'Local partnership']
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('sent');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 2000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-garlic-gold/5 to-transparent animate-pulse-slow"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Where to <span className="text-garlic-gold">Find Us</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Join the growing number of businesses serving Zinza Garlic Sauce to their customers
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Business Types */}
          <div className="slide-in-left">
            <h3 className="text-2xl font-display font-bold text-white mb-8">
              Perfect for Your Business
            </h3>
            
            {/* Business Type Selector */}
            <div className="flex flex-wrap gap-2 mb-8">
              {businessTypes.map((type, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                    activeTab === index
                      ? 'bg-garlic-gold text-black shadow-lg'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <type.icon className="h-4 w-4 mr-2" />
                  {type.name}
                </button>
              ))}
            </div>

            {/* Active Business Type */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <div className="flex items-center mb-6">
                {React.createElement(businessTypes[activeTab].icon, {
                  className: "h-8 w-8 text-garlic-gold mr-3"
                })}
                <h4 className="text-2xl font-display font-bold text-white">
                  {businessTypes[activeTab].name}
                </h4>
              </div>
              
              <p className="text-white/80 text-lg mb-6 leading-relaxed">
                {businessTypes[activeTab].description}
              </p>

              <div className="space-y-3 mb-8">
                <h5 className="text-lg font-semibold text-garlic-gold">Benefits for Your Business</h5>
                {businessTypes[activeTab].benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-fresh-green mr-3" />
                    <span className="text-white/90">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button variant="glow" size="lg" className="font-display w-full sm:w-auto">
                Partner with Us
              </Button>
            </div>
          </div>

          {/* Contact Information & Form */}
          <div className="slide-in-right space-y-8">
            {/* Contact Info */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-display font-bold text-white mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-garlic-gold mr-3" />
                  <span className="text-white/90">Windsor, Ontario, Canada</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-garlic-gold mr-3" />
                  <span className="text-white/90">info@zinzasauce.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-garlic-gold mr-3" />
                  <span className="text-white/90">+1 (519) XXX-XXXX</span>
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-garlic-gold transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-garlic-gold transition-colors"
                  />
                </div>
                
                <input
                  type="text"
                  placeholder="Business Name"
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-garlic-gold transition-colors"
                />
                
                <select className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:border-garlic-gold transition-colors">
                  <option value="">Business Type</option>
                  <option value="grocery">Grocery Store</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="deli">Deli</option>
                  <option value="other">Other</option>
                </select>
                
                <textarea
                  placeholder="Tell us about your interest in Zinza products..."
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-garlic-gold transition-colors resize-none"
                ></textarea>
                
                <Button 
                  type="submit"
                  variant="glow" 
                  size="lg" 
                  className="w-full font-display"
                  disabled={formStatus === 'sending'}
                >
                  {formStatus === 'idle' && (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                  {formStatus === 'sending' && 'Sending...'}
                  {formStatus === 'sent' && (
                    <>
                      <CheckCircle className="h-5 w-5 mr-2" />
                      Message Sent!
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in">
          <div className="bg-garlic-gold rounded-3xl p-8 md:p-12 text-black">
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Elevate Your Business?
            </h3>
            <p className="text-lg mb-8 opacity-80">
              Join the businesses already serving Zinza's premium garlic sauce to their customers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="xl" 
                className="font-display bg-black text-white hover:bg-gray-800"
              >
                Request Samples
              </Button>
              <Button 
                variant="outline" 
                size="xl" 
                className="font-display border-black text-black hover:bg-black hover:text-white"
              >
                View Wholesale Pricing
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}