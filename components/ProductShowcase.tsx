'use client';

import { useEffect, useState } from 'react';
import { Flame, Droplets, Utensils, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ProductShowcase() {
  const [activeProduct, setActiveProduct] = useState(0);

  const products = [
    {
      name: 'Original Garlic Sauce',
      description: 'Our garlic sauce elevates any dish to a 5 star flavor and never disappoints',
      features: ['Fresh Peeled Garlic', 'Premium Quality', 'Restaurant Grade', 'All Natural'],
      color: 'from-garlic-gold to-orange-500',
      icon: '🧄',
      usages: ['DIP', 'SPREAD', 'MIX']
    },
    {
      name: 'Spice Flavor',
      description: 'Spice up your meals with our bold Spice Flavor! Perfect for those craving heat, it adds an exciting kick to Pizza, falafel, Fish & chips, meats, and much more.',
      features: ['Extra Heat', 'Bold Flavor', 'Premium Spices', 'Versatile Use'],
      color: 'from-red-500 to-orange-600',
      icon: '🌶️',
      usages: ['SPICE UP', 'HEAT', 'KICK']
    }
  ];

  const usageIcons = {
    DIP: Droplets,
    SPREAD: Utensils,
    MIX: Heart,
    'SPICE UP': Flame,
    HEAT: Flame,
    KICK: Flame
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
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Our Premium
            <span className="text-garlic-gold"> Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the perfect blend of fresh garlic and premium ingredients that make every meal extraordinary
          </p>
        </div>

        {/* Product Selector */}
        <div className="flex justify-center mb-12 slide-in-left">
          <div className="bg-gray-100 rounded-full p-1 flex">
            {products.map((product, index) => (
              <button
                key={index}
                onClick={() => setActiveProduct(index)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeProduct === index
                    ? 'bg-garlic-gold text-black shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {product.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Product Visualization */}
          <div className="slide-in-left">
            <div className="relative">
              {/* Main Product */}
              <div className="relative mx-auto w-80 h-96 perspective-1000">
                <div 
                  className={`w-full h-full bg-gradient-to-b ${products[activeProduct].color} rounded-3xl shadow-2xl transform transition-all duration-700 hover:scale-105 hover:rotate-y-12 relative overflow-hidden`}
                  style={{ 
                    transformStyle: 'preserve-3d',
                    transform: 'rotateY(-15deg) rotateX(5deg)'
                  }}
                >
                  {/* Glassmorphism overlay */}
                  <div className="absolute inset-4 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30">
                    <div className="flex flex-col items-center justify-center h-full text-center p-6">
                      <div className="text-6xl mb-4">{products[activeProduct].icon}</div>
                      <h3 className="text-white font-display font-bold text-2xl mb-2">ZINZA</h3>
                      <p className="text-white/90 text-lg font-semibold mb-4">
                        {products[activeProduct].name}
                      </p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {products[activeProduct].usages.map((usage, idx) => {
                          const IconComponent = usageIcons[usage as keyof typeof usageIcons];
                          return (
                            <div key={idx} className="flex items-center bg-white/20 rounded-full px-3 py-1">
                              <IconComponent className="h-4 w-4 mr-1" />
                              <span className="text-white text-sm font-medium">{usage}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-fresh-green rounded-full flex items-center justify-center text-white font-bold animate-float">
                NEW
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-burgundy rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                <Heart className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>

          {/* Product Information */}
          <div className="slide-in-right">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
              {products[activeProduct].name}
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {products[activeProduct].description}
            </p>

            {/* Features */}
            <div className="mb-8">
              <h4 className="text-xl font-display font-semibold text-gray-900 mb-4">Key Features</h4>
              <div className="grid grid-cols-2 gap-4">
                {products[activeProduct].features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-garlic-gold rounded-full mr-3"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Usage Categories */}
            <div className="mb-8">
              <h4 className="text-xl font-display font-semibold text-gray-900 mb-4">Perfect For</h4>
              <div className="grid grid-cols-3 gap-4">
                {products[activeProduct].usages.map((usage, index) => {
                  const IconComponent = usageIcons[usage as keyof typeof usageIcons];
                  return (
                    <div key={index} className="text-center p-4 bg-gray-50 rounded-xl hover:bg-garlic-gold hover:text-white transition-all duration-300 group cursor-pointer">
                      <IconComponent className="h-8 w-8 mx-auto mb-2 text-garlic-gold group-hover:text-white" />
                      <p className="font-semibold text-sm">{usage}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gold" size="lg" className="font-display">
                Order Now
              </Button>
              <Button variant="outline" size="lg" className="font-display">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}