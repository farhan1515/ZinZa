"use client";

import React, { useEffect } from "react";
import { MapPin, Heart, Award, Sparkles } from "lucide-react";

export default function BrandStory() {
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

  const timeline = [
    {
      year: "The Beginning",
      title: "A Vision Born",
      description:
        "Started with a simple mission: create the world's best garlic sauce",
      icon: "💡",
    },
    {
      year: "Recipe Perfect",
      title: "Secret Formula",
      description:
        "Perfected our trade secret blend using only the freshest ingredients",
      icon: "🧪",
    },
    {
      year: "Local Success",
      title: "Windsor Favorite",
      description:
        "Became the go-to sauce for local restaurants and food lovers",
      icon: "🏆",
    },
    {
      year: "Today",
      title: "Game Changer",
      description:
        "Expanding reach while maintaining our commitment to quality",
      icon: "🚀",
    },
  ];

  return (
    <section id="story" className="py-24 bg-gray-50 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-garlic-gold/5 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Our <span className="text-garlic-gold">Story</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From a simple idea to a game-changing sauce that's making its mark
            across Windsor and beyond
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Location & Heritage */}
          <div className="slide-in-left">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-garlic-gold rounded-full flex items-center justify-center mr-4">
                  <MapPin className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-gray-900">
                    Windsor, Ontario
                  </h3>
                  <p className="text-gray-600">Canada</p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-fresh-green to-green-600 rounded-2xl h-64 flex items-center justify-center mb-6 relative overflow-hidden">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">📍</div>
                  <div className="text-2xl font-display font-bold">Windsor</div>
                  <div className="text-lg">Ontario, Canada</div>
                </div>
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl mb-2">🏭</div>
                  <div className="text-sm font-semibold text-gray-900">
                    Local Production
                  </div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl mb-2">🚛</div>
                  <div className="text-sm font-semibold text-gray-900">
                    Fresh Delivery
                  </div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl mb-2">❤️</div>
                  <div className="text-sm font-semibold text-gray-900">
                    Made with Love
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Brand Promise */}
          <div className="slide-in-right">
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="flex items-center mb-4">
                  <Heart className="h-8 w-8 text-red-500 mr-3" />
                  <h3 className="text-2xl font-display font-bold text-gray-900">
                    Our Promise
                  </h3>
                </div>
                <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                  "Find it on your table, a place to stay, always in arms reach.
                  This game changing sauce will make its mark and you'll be glad
                  it did."
                </blockquote>
              </div>

              <div className="bg-garlic-gold rounded-3xl p-8 text-black">
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 text-black mr-3" />
                  <h3 className="text-2xl font-display font-bold">
                    Quality Guarantee
                  </h3>
                </div>
                <p className="text-lg leading-relaxed">
                  New garlic sauce that truly has its own taste, hasn't been
                  discovered, & that beats any other competitor.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="fade-in">
          <h3 className="text-3xl font-display font-bold text-gray-900 text-center mb-12">
            Our Journey
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-garlic-gold hidden md:block"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-garlic-gold rounded-full border-4 border-white shadow-lg hidden md:block z-10"></div>

                  {/* Content */}
                  <div
                    className={`w-full md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center mb-4">
                        <div className="text-3xl mr-3">{item.icon}</div>
                        <div>
                          <h4 className="text-xl font-display font-bold text-gray-900">
                            {item.title}
                          </h4>
                          <p className="text-garlic-gold font-semibold">
                            {item.year}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Transformation Sequence */}
        <div className="mt-24 fade-in">
          <h3 className="text-3xl font-display font-bold text-gray-900 text-center mb-12">
            From Fresh Garlic to{" "}
            <span className="text-garlic-gold">Gourmet Sauce</span>
          </h3>
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="flex flex-wrap justify-center items-center gap-8">
              {[
                { emoji: "🧄", label: "Fresh Garlic" },
                { emoji: "➡️", label: "" },
                { emoji: "👨‍🍳", label: "Expert Craft" },
                { emoji: "➡️", label: "" },
                { emoji: "🥄", label: "Secret Blend" },
                { emoji: "➡️", label: "" },
                { emoji: "🏆", label: "Premium Sauce" },
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div
                    className="text-4xl mb-2 animate-float"
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    {step.emoji}
                  </div>
                  {step.label && (
                    <p className="text-sm font-semibold text-gray-700">
                      {step.label}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
