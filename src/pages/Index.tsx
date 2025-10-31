import { useState } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Bonus from "@/components/Bonus";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import EmailForm from "@/components/EmailForm";

const Index = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleCtaClick = () => {
    setIsFormOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>His Secret Obsession - Make Him Obsessively In Love With You</title>
        <meta
          name="description"
          content="Discover the proven psychology that makes any man feel a powerful pull toward you and keeps him deeply committed for life. Transform your relationship today."
        />
        <meta
          name="keywords"
          content="relationship advice, make him commit, relationship psychology, dating tips for women, how to make him fall in love"
        />
        <meta property="og:title" content="His Secret Obsession - Make Him Obsessively In Love With You" />
        <meta
          property="og:description"
          content="Discover the proven psychology that makes any man feel a powerful pull toward you and keeps him deeply committed for life."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen">
        <Header onCtaClick={handleCtaClick} />
        <main>
          <Hero onCtaClick={handleCtaClick} />
          <Problem />
          <Solution onCtaClick={handleCtaClick} />
          <Benefits />
          <Testimonials />
          <Bonus onCtaClick={handleCtaClick} />
          <FAQ />
          <FinalCTA onCtaClick={handleCtaClick} />
        </main>
        <footer className="bg-muted/50 py-8 text-center text-sm text-muted-foreground">
          <div className="container mx-auto px-4">
            <p className="mb-2">© 2025 His Secret Obsession. All rights reserved.</p>
            <p>60-Day Money-Back Guarantee | Privacy Policy | Terms of Service</p>
          </div>
        </footer>
        <EmailForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      </div>
    </>
  );
};

export default Index;
