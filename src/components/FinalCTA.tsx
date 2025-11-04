import { Button } from "@/components/ui/button";
import { Shield, Clock } from "lucide-react";
import happyWomenImage from "@/assets/happy-women.jpg";

interface FinalCTAProps {
  onCtaClick: () => void;
}

const FinalCTA = ({ onCtaClick }: FinalCTAProps) => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-2 border-primary/30 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Your Dream Relationship is{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                One Decision Away
              </span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Imagine waking up tomorrow knowing exactly how to make him feel that powerful, magnetic pull
              toward you. No more confusion. No more guessing. Just real results.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <p className="font-semibold">Instant Access</p>
                <p className="text-sm text-muted-foreground">Start in 2 minutes</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-secondary" />
                </div>
                <p className="font-semibold">60-Day Guarantee</p>
                <p className="text-sm text-muted-foreground">Risk-free promise</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-accent/30">
                  <img 
                    src={happyWomenImage} 
                    alt="Happy women celebrating successful relationships" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-semibold">2M+ Happy Women</p>
                <p className="text-sm text-muted-foreground">Proven results</p>
              </div>
            </div>

            <Button variant="premium" size="xl" onClick={onCtaClick} className="mb-6">
              Yes! I Want This Now
            </Button>

            <p className="text-sm text-muted-foreground">
              Special price of $47 (was $168) • One-time payment • Instant digital access
            </p>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground mb-4">
              Don't let another day go by wondering "what if?" Your happiness matters.
            </p>
            <p className="text-sm text-muted-foreground italic">
              Ẹ jẹ́ ká ṣe àtúnṣe ìbáṣepọ̀ rẹ lónìí. (Let's transform your relationship today.)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
