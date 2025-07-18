"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

interface HeroSectionProps {
  title: string;
  description: string;
  buttons?: {
    primary: {
      text: string;
      href?: string;
    };
    secondary: {
      text: string;
      href?: string;
    };
  };
  backgroundImage?: string;
}

export default function HeroSection({
  title,
  description,
  buttons,
  backgroundImage = "/bg-ideas.jpg",
}: HeroSectionProps) {
  const [offsetY, setOffsetY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrolled = window.scrollY;
        const rate = scrolled * 0.5;
        setOffsetY(rate);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[500px] overflow-hidden bg-gradient-to-br from-orange-100 to-orange-50"
    >
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          transform: `translateY(${offsetY}px)`,
        }}
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* CSS-only Cutting Effect with Parallax */}
      <div className="absolute inset-0">
        {/* Bottom diagonal cut with parallax effect */}
        <div
          className="absolute bottom-0 right-0 w-full h-1/4 bg-white will-change-transform transition-transform duration-75"
          style={{
            clipPath: "polygon(100% 0, 100% 20%, 100% 100%, 0 100%)",
            transform: `translateY(${offsetY * 0.3}px) translateX(${
              offsetY * 0.1
            }px)`,
          }}
        />
      </div>

      {/* Content with subtle parallax */}
      <div
        className="relative z-10 flex items-center justify-center h-full px-6"
        style={{
          transform: `translateY(${offsetY * -1}px)`,
        }}
      >
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl tracking-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed drop-shadow-lg mb-8">
            {description}
          </p>

          {buttons && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {buttons.primary.text}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 backdrop-blur-sm"
              >
                {buttons.secondary.text}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
