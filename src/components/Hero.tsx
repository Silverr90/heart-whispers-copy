import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-couple.jpg";

interface HeroProps {
  onCtaClick: () => void;
}

const Hero = ({ onCtaClick }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 mb-6 animate-fade-in">
              <Sparkles className="h-4 w-4 text-secondary" />
              <span className="text-sm font-medium text-foreground">
                Discover the Secret Over 2 Million Women Already Know
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Make Him{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Obsessively
              </span>{" "}
              In Love With You
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              The proven psychology that makes any man feel a powerful pull toward you... and keeps him
              deeply committed for life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="hero" size="xl" onClick={onCtaClick}>
                Yes! I Want This Now
              </Button>
              <Button variant="outline" size="xl" onClick={() => window.scrollTo({ top: 800, behavior: "smooth" })}>
                Learn More
              </Button>
            </div>

            <div className="flex items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background"
                    />
                  ))}
                </div>
                <span>2M+ Happy Women</span>
              </div>
              <div>⭐⭐⭐⭐⭐ 4.9/5.0 Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
