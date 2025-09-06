"use client";

import { useEffect, useRef } from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(
      ".fade-in, .slide-in-left, .slide-in-right"
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-hero-gradient">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent animate-pulse-slow"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 text-white/20 animate-float">
        <Sparkles className="h-8 w-8" />
      </div>
      <div
        className="absolute top-40 right-20 text-white/20 animate-float"
        style={{ animationDelay: "2s" }}
      >
        <Sparkles className="h-6 w-6" />
      </div>
      <div
        className="absolute bottom-40 left-20 text-white/20 animate-float"
        style={{ animationDelay: "4s" }}
      >
        <Sparkles className="h-10 w-10" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo Animation */}
        <div className="fade-in mb-8">
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
              <span className="text-3xl font-display font-bold text-white">
                Z
              </span>
            </div>
            <span className="text-4xl font-display font-bold text-white">
              ZINZA
            </span>
          </div>
          <div className="text-sm font-medium text-white/80 tracking-wider mb-8">
            PREMIUM GARLIC SAUCE • WINDSOR, ONTARIO
          </div>
        </div>

        {/* Main Headline */}
        <div className="slide-in-left">
          <h1
            ref={textRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight text-reveal"
          >
            Our garlic sauce elevates
            <br />
            <span className="text-garlic-gold">any dish to a</span>
            <br />
            <span className="inline-flex items-center">
              5 star flavor
              <Sparkles className="ml-4 h-8 w-8 md:h-12 md:w-12 text-garlic-gold animate-pulse" />
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="slide-in-right">
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Premium garlic sauce with fresh peeled garlic, supplying
            <span className="text-garlic-gold font-semibold">
              {" "}
              Grocery Stores, Restaurants & Delis
            </span>{" "}
            & more
          </p>
        </div>

        {/* Brand Promise */}
        <div className="fade-in mb-12">
          <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto">
            "New garlic sauce that truly has its own taste, hasn't been
            discovered, & that beats any other competitor"
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="fade-in flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            variant="glow"
            size="xl"
            className="font-display group relative overflow-hidden"
          >
            <span className="relative z-10">Discover Our Products</span>
            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </Button>
          <Button
            variant="outline"
            size="xl"
            className="font-display border-white text-black hover:bg-white hover:text-black transition-all duration-300"
          >
            Contact Us Today
          </Button>
        </div>

        {/* Floating Product Mockup */}
        <div className="fade-in">
          <div className="relative inline-block animate-float">
            <div className="w-32 h-48 md:w-40 md:h-60 bg-gradient-to-b from-garlic-gold to-orange-500 rounded-3xl shadow-2xl glassmorphism relative overflow-hidden">
              <div className="absolute inset-2 bg-white/20 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-2xl">🧄</span>
                  </div>
                  <div className="text-white font-bold text-sm">ZINZA</div>
                  <div className="text-white/80 text-xs">Original</div>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                NEW
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white/70" />
      </div>
    </section>
  );
}
