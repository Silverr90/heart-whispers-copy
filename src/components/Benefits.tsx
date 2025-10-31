import { CheckCircle2 } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      title: "Make Him See You as \"The One\"",
      description:
        "Discover the exact words and actions that make him feel like you're irreplaceable—not just another option.",
    },
    {
      title: "Reignite His Passion & Desire",
      description:
        "Bring back the spark and intensity from when you first met, making him pursue you all over again.",
    },
    {
      title: "Get Him to Open Up Emotionally",
      description:
        "Break through his walls and create the deep emotional intimacy you've always wanted.",
    },
    {
      title: "Make Him Commit Without Pressure",
      description:
        "He'll naturally want to take the relationship to the next level—marriage, moving in, long-term commitment.",
    },
    {
      title: "Stop Playing Games & Start Winning",
      description:
        "No manipulation. No drama. Just authentic connection that makes him obsessed with your happiness.",
    },
    {
      title: "Feel Confident & Secure in Love",
      description:
        "Finally experience the relationship you deserve—where you feel valued, cherished, and deeply loved.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What You'll{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Achieve
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Transform your relationship and create the love story you've always dreamed of
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-medium)] group"
            >
              <CheckCircle2 className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold mb-3 text-foreground">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
