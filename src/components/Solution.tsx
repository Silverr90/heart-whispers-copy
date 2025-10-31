import { Button } from "@/components/ui/button";
import { Lightbulb, Heart, Lock } from "lucide-react";

interface SolutionProps {
  onCtaClick: () => void;
}

const Solution = ({ onCtaClick }: SolutionProps) => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 mb-6">
            <Lightbulb className="h-4 w-4 text-secondary" />
            <span className="text-sm font-medium text-foreground">The Solution You've Been Searching For</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Introducing{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              His Secret Obsession
            </span>
          </h2>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            A revolutionary program based on groundbreaking psychological research that reveals the hidden
            emotional trigger in every man's mind—what relationship expert James Bauer calls the{" "}
            <span className="text-primary font-semibold">"Hero Instinct."</span>
          </p>

          <p className="text-lg text-muted-foreground mb-12">
            When you understand and activate this instinct, he won't just fall in love... he'll become deeply
            obsessed with making you happy, protecting you, and committing to you for life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          <div className="text-center p-8 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent border border-primary/20">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Proven Psychology</h3>
            <p className="text-muted-foreground">
              Based on research into male psychology and what men truly need to feel fulfilled in love
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-gradient-to-b from-secondary/5 to-transparent border border-secondary/20">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Simple & Effective</h3>
            <p className="text-muted-foreground">
              Easy-to-follow techniques you can start using today—no manipulation or games required
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-gradient-to-b from-accent/5 to-transparent border border-accent/20">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center mx-auto mb-4">
              <Lock className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Long-Term Results</h3>
            <p className="text-muted-foreground">
              Build a lasting, deeply connected relationship where he chooses you again and again
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button variant="hero" size="xl" onClick={onCtaClick}>
            Get Instant Access Now
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">60-Day Money-Back Guarantee</p>
        </div>
      </div>
    </section>
  );
};

export default Solution;
