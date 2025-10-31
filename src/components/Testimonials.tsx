import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      location: "California",
      rating: 5,
      text: "I was ready to give up on my relationship. We'd been together 5 years and he seemed so distant. Within 2 weeks of using these techniques, he was planning romantic dates again and actually TALKING to me about his feelings. I can't believe the difference.",
    },
    {
      name: "Jennifer K.",
      location: "Texas",
      rating: 5,
      text: "My fiancé had cold feet about our wedding. I was devastated. After applying what I learned, he not only went through with it—he told me he's never been more sure of anything in his life. We're now happily married!",
    },
    {
      name: "Michelle R.",
      location: "Florida",
      rating: 5,
      text: "I thought my boyfriend was losing interest. Now he can't stop talking about our future together. He even surprised me with a weekend getaway! This program gave me back my confidence and showed me what men REALLY need.",
    },
    {
      name: "Amanda T.",
      location: "New York",
      rating: 5,
      text: "At first I was skeptical. But the psychology behind it makes SO much sense. My husband is more attentive, more affectionate, and more committed than ever. It's like dating again but better.",
    },
    {
      name: "Lisa P.",
      location: "Georgia",
      rating: 5,
      text: "After my divorce, I thought I'd never find love again. Then I met someone special but was terrified of messing it up. His Secret Obsession gave me the tools to build something real and lasting. He proposed last month!",
    },
    {
      name: "Rachel D.",
      location: "Arizona",
      rating: 5,
      text: "The 'Hero Instinct' thing sounded weird at first, but OH MY GOD it works. My boyfriend is suddenly planning our future, meeting my family, and treating me like a queen. I wish I'd known this years ago.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Real Women.{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Real Results.
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of women who've transformed their relationships
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-card border border-border hover:shadow-[var(--shadow-medium)] transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
              <div className="pt-4 border-t border-border">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
