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
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/zinzavideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Video Overlay - Subtle gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left Content */}
          <div className="text-left space-y-8 lg:pr-8">
            {/* Logo */}
            <div className="fade-in">
              <div className="inline-flex items-center space-x-4 mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-garlic-gold to-orange-500 rounded-3xl flex items-center justify-center shadow-2xl backdrop-blur-sm">
                  <span className="text-5xl font-display font-bold text-white">
                    Z
                  </span>
                </div>
                <div>
                  <span className="text-6xl font-display font-bold text-white block drop-shadow-2xl">
                    ZINZA
                  </span>
                  <span className="text-sm font-medium text-white/80 tracking-wider bg-white/10 px-3 py-1 rounded-full">
                    PREMIUM GARLIC SAUCE
                  </span>
                </div>
              </div>
            </div>

            {/* Main Headline */}
            <div className="slide-in-left">
              <h1
                ref={textRef}
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-bold text-white leading-[0.85] mb-8 drop-shadow-2xl"
              >
                <span className="block">GAME</span>
                <span className="block text-garlic-gold bg-gradient-to-r from-garlic-gold to-orange-400 bg-clip-text text-transparent">
                  CHANGING
                </span>
                <span className="block">SAUCE</span>
              </h1>
            </div>

            {/* Subtitle */}
            <div className="slide-in-right">
              <p className="text-2xl md:text-3xl text-white/95 mb-8 leading-relaxed max-w-2xl font-light drop-shadow-lg">
                Premium garlic sauce that elevates any dish to a 5-star flavor
                experience
              </p>
            </div>

            {/* Brand Promise */}
            <div className="fade-in">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 max-w-2xl">
                <p className="text-lg text-white/90 leading-relaxed italic">
                  "New garlic sauce that truly has its own taste, hasn't been
                  discovered, & that beats any other competitor"
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Product Showcase */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Product */}
              <div className="fade-in relative z-10">
                <div className="w-96 h-[32rem] md:w-[28rem] md:h-[36rem] bg-gradient-to-b from-garlic-gold to-orange-500 rounded-4xl shadow-2xl relative overflow-hidden transform rotate-2 hover:rotate-0 transition-all duration-700 hover:scale-105">
                  <div className="absolute inset-6 bg-white/20 rounded-3xl flex flex-col items-center justify-center p-8 backdrop-blur-sm">
                    <div className="w-32 h-32 bg-white rounded-full mx-auto mb-8 flex items-center justify-center shadow-2xl">
                      <span className="text-6xl">🧄</span>
                    </div>
                    <div className="text-center">
                      <div className="text-white font-bold text-3xl mb-3 drop-shadow-lg">
                        ZINZA
                      </div>
                      <div className="text-white/90 text-xl mb-4 font-medium">
                        Original
                      </div>
                      <div className="text-white/70 text-base">
                        Premium Garlic Sauce
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-6 -right-6 w-20 h-20 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-2xl animate-pulse">
                    NEW
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-12 -left-12 w-24 h-24 bg-white/15 backdrop-blur-md rounded-3xl flex items-center justify-center animate-float shadow-xl">
                <span className="text-3xl">🌟</span>
              </div>
              <div
                className="absolute -bottom-12 -right-12 w-20 h-20 bg-garlic-gold/25 backdrop-blur-md rounded-3xl flex items-center justify-center animate-float shadow-xl"
                style={{ animationDelay: "2s" }}
              >
                <span className="text-2xl">✨</span>
              </div>
              <div
                className="absolute top-1/2 -left-16 w-16 h-16 bg-orange-400/20 backdrop-blur-md rounded-2xl flex items-center justify-center animate-float shadow-lg"
                style={{ animationDelay: "4s" }}
              >
                <span className="text-xl">🔥</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons - Positioned at bottom */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-full max-w-2xl px-4">
          <div className="fade-in flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              variant="glow"
              size="xl"
              className="font-display group relative overflow-hidden w-full sm:w-auto px-12 py-6 text-lg bg-gradient-to-r from-garlic-gold to-orange-500 hover:from-orange-500 hover:to-garlic-gold transition-all duration-500 shadow-2xl hover:shadow-garlic-gold/25"
            >
              <span className="relative z-10 font-bold">
                Discover Our Products
              </span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="font-display border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-500 w-full sm:w-auto px-12 py-6 text-lg backdrop-blur-sm bg-white/10 hover:bg-white hover:shadow-2xl"
            >
              Contact Us Today
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-white/70 text-sm font-medium tracking-wider">
            SCROLL
          </span>
          <ChevronDown className="h-8 w-8 text-white/70" />
        </div>
      </div>
    </section>
  );
}
