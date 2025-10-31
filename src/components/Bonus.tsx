import { Button } from "@/components/ui/button";
import { Gift, BookOpen, Video, FileText } from "lucide-react";

interface BonusProps {
  onCtaClick: () => void;
}

const Bonus = ({ onCtaClick }: BonusProps) => {
  const bonuses = [
    {
      icon: BookOpen,
      title: "12 Word Text That Makes Him Yours",
      value: "$47",
      description: "The exact text message formula that triggers his hero instinct instantly",
    },
    {
      icon: Video,
      title: "X-Ray Questions",
      value: "$37",
      description: "Discover what he's really thinking and feeling with these conversation starters",
    },
    {
      icon: FileText,
      title: "Silent Action Signals",
      value: "$37",
      description: "Non-verbal techniques that make him feel like your hero without saying a word",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 mb-6">
              <Gift className="h-4 w-4 text-secondary" />
              <span className="text-sm font-medium text-foreground">Limited Time Bonuses</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              But Wait...{" "}
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                There's More!
              </span>
            </h2>

            <p className="text-xl text-muted-foreground">
              Get instant access to these premium bonuses (worth $121) absolutely FREE
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {bonuses.map((bonus, index) => {
              const Icon = bonus.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-gradient-to-b from-secondary/10 to-transparent border border-secondary/30 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary font-bold text-sm mb-3">
                    Value: {bonus.value}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{bonus.title}</h3>
                  <p className="text-muted-foreground text-sm">{bonus.description}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-2 border-primary/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Complete Program + All Bonuses
            </h3>
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-3xl text-muted-foreground line-through">$168</span>
              <span className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                $47
              </span>
            </div>
            <p className="text-lg text-muted-foreground mb-6">
              One-time payment. Instant digital access. 60-day money-back guarantee.
            </p>
            <Button variant="premium" size="xl" onClick={onCtaClick} className="w-full md:w-auto">
              Get Instant Access Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bonus;
