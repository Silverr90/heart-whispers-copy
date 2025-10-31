import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Will this work for my specific situation?",
      answer:
        "Yes! Whether you're dating, in a long-term relationship, engaged, or married—these principles apply to all stages. The Hero Instinct is a fundamental part of male psychology that works regardless of your relationship status.",
    },
    {
      question: "Is this just manipulation?",
      answer:
        "Absolutely not. This program teaches you to understand what men genuinely need to feel fulfilled in a relationship. It's about creating authentic connection, not manipulating him. You're simply speaking his emotional language.",
    },
    {
      question: "What if he's already pulling away?",
      answer:
        "This is actually when these techniques are most powerful. Many women have used His Secret Obsession to save relationships they thought were over. The earlier you start, the better—but it's never too late.",
    },
    {
      question: "How quickly will I see results?",
      answer:
        "Many women notice changes within days. Some see dramatic shifts in just 48 hours. The techniques are designed to work quickly because they tap into deep psychological needs that men respond to immediately.",
    },
    {
      question: "Is this delivered digitally?",
      answer:
        "Yes! You'll get instant access to the entire program immediately after purchase. You can read it on your phone, tablet, or computer—or print it out. No waiting for shipping.",
    },
    {
      question: "What if it doesn't work for me?",
      answer:
        "You're protected by our 60-day money-back guarantee. If you're not completely satisfied for any reason, just email us within 60 days and we'll refund every penny. No questions asked.",
    },
    {
      question: "Do I need relationship experience to use this?",
      answer:
        "Not at all! Whether you're brand new to dating or have decades of relationship experience, these techniques are explained in simple, easy-to-understand language with real examples you can use today.",
    },
    {
      question: "Will he know I'm using these techniques?",
      answer:
        "No. These are natural, authentic ways of communicating that will feel completely normal to him. He'll just notice that he feels amazing around you and can't get you out of his mind.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Questions?{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                We've Got Answers.
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know before you get started
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-xl px-6 bg-card hover:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
