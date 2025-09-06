'use client';

import { useEffect, useState } from 'react';
import { ChefHat, Award, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SignatureDish() {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: 'Fresh Flatbread',
      description: 'Crispy pan-fried layered flatbread base',
      icon: '🥖'
    },
    {
      title: 'Seasoned Fava Beans',
      description: 'Perfectly smashed and seasoned fava beans',
      icon: '🫘'
    },
    {
      title: 'Trade Secret Ghee',
      description: 'Our lip-smacking trade secret ghee blend',
      icon: '🧈'
    },
    {
      title: 'Tahini Blend',
      description: 'Seasoned trade secret tahini topping',
      icon: '🥜'
    }
  ];

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

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="signature" className="py-24 bg-gradient-to-br from-burgundy to-red-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-6 py-2 mb-6 border border-white/20">
            <Award className="h-5 w-5 text-garlic-gold mr-2" />
            <span className="text-white font-semibold">Signature Creation</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Layered Pan-Fried
            <br />
            <span className="text-garlic-gold">Crispy Flatbread</span>
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            "We give new meaning to bread and beans. Windsor's new layered pan-fried crispy flatbread 
            served with smashed seasoned fava beans, topped with our one of a kind lip-smacking 
            trade secret ghee and seasoned trade secret tahini blend."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual Side */}
          <div className="slide-in-left">
            <div className="relative">
              {/* Main Dish Visualization */}
              <div className="relative w-full max-w-md mx-auto aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-garlic-gold/20 to-orange-500/20 rounded-full blur-3xl"></div>
                <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4 animate-float">🥙</div>
                    <div className="text-white text-2xl font-display font-bold mb-2">Signature Dish</div>
                    <div className="text-garlic-gold text-lg">Windsor Special</div>
                  </div>
                </div>
              </div>

              {/* Floating Ingredients */}
              <div className="absolute -top-8 -right-8 bg-white/10 backdrop-blur-md rounded-full p-4 animate-float">
                <span className="text-3xl">{steps[step].icon}</span>
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white/10 backdrop-blur-md rounded-full p-4 animate-float" style={{ animationDelay: '2s' }}>
                <ChefHat className="h-8 w-8 text-garlic-gold" />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <Clock className="h-6 w-6 text-garlic-gold mx-auto mb-2" />
                <div className="text-white font-bold text-xl">15min</div>
                <div className="text-white/80 text-sm">Prep Time</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <Users className="h-6 w-6 text-garlic-gold mx-auto mb-2" />
                <div className="text-white font-bold text-xl">2-4</div>
                <div className="text-white/80 text-sm">Servings</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <Award className="h-6 w-6 text-garlic-gold mx-auto mb-2" />
                <div className="text-white font-bold text-xl">5★</div>
                <div className="text-white/80 text-sm">Rating</div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="slide-in-right">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <h3 className="text-3xl font-display font-bold text-white mb-6">
                "This is a proven winner dish, taste it for yourself"
              </h3>

              {/* Preparation Steps */}
              <div className="space-y-4 mb-8">
                <h4 className="text-xl font-display font-semibold text-garlic-gold mb-4">
                  Preparation Steps
                </h4>
                {steps.map((stepItem, index) => (
                  <div 
                    key={index}
                    className={`flex items-center p-4 rounded-xl transition-all duration-300 ${
                      step === index 
                        ? 'bg-garlic-gold text-black' 
                        : 'bg-white/5 text-white/80 hover:bg-white/10'
                    }`}
                  >
                    <div className="text-2xl mr-4">{stepItem.icon}</div>
                    <div>
                      <h5 className={`font-semibold ${step === index ? 'text-black' : 'text-white'}`}>
                        {stepItem.title}
                      </h5>
                      <p className={`text-sm ${step === index ? 'text-black/80' : 'text-white/60'}`}>
                        {stepItem.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Key Features */}
              <div className="mb-8">
                <h4 className="text-xl font-display font-semibold text-garlic-gold mb-4">
                  What Makes It Special
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {['Trade Secret Recipe', 'Fresh Ingredients', 'Authentic Taste', 'Windsor Original'].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-garlic-gold rounded-full mr-3"></div>
                      <span className="text-white/90 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="glow" size="lg" className="font-display">
                  Try Our Signature Dish
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="font-display border-white text-black hover:bg-white hover:text-black"
                >
                  View Recipe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}