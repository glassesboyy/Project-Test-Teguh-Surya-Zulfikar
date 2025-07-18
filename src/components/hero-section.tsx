import { Button } from "@/components/ui/button";

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
  return (
    <section className="relative h-[500px] overflow-hidden bg-gradient-to-br from-orange-100 to-orange-50">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* CSS-only Cutting Effect */}
      <div className="absolute inset-0">
        {/* Bottom diagonal cut */}
        <div
          className="absolute bottom-0 right-0 w-full h-1/5 bg-white"
          style={{
            clipPath: "polygon(100% 0, 100% 20%, 100% 100%, 0 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
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
