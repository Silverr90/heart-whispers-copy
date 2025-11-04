import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import herruleLogo from "@/assets/herrule-logo.jpg";

interface HeaderProps {
  onCtaClick: () => void;
}

const Header = ({ onCtaClick }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-sm shadow-[var(--shadow-soft)]" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={herruleLogo} alt="Herrule Logo" className="h-10 w-10 object-contain" />
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            His Secret Obsession
          </span>
        </div>
        <Button variant="hero" size="lg" onClick={onCtaClick}>
          Get Instant Access
        </Button>
      </div>
    </header>
  );
};

export default Header;
