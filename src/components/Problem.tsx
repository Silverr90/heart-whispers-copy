import { AlertCircle } from "lucide-react";

const Problem = () => {
  const problems = [
    "You feel like he's emotionally distant or distracted",
    "He takes you for granted and doesn't appreciate you the way he used to",
    "You're confused by all the conflicting relationship advice out there",
    "You're worried he might be losing interest or pulling away",
    "You want him to be as invested in the relationship as you are",
    "You're tired of feeling like you're doing all the work",
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 mb-6">
            <AlertCircle className="h-4 w-4 text-destructive" />
            <span className="text-sm font-medium text-destructive">If this sounds familiar...</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Does Any of This{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Sound Like You?
            </span>
          </h2>

          <p className="text-xl text-muted-foreground mb-12">
            You're not alone. Thousands of women feel this way every single day. But here's the truth: it's not
            your fault.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-soft)]"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  ✓
                </div>
                <p className="text-lg text-foreground">{problem}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted-foreground italic">
            "I felt invisible in my relationship. I was doing everything right, but he just seemed... checked
            out. That's when everything changed."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
