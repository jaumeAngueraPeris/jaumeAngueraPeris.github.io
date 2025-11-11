import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from '../config.ts';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xl font-bold text-foreground hover:text-primary transition-colors"
          >
            { SITE_CONFIG.name }
          </button>

          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("research")}
            >
              Research
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("publications")}
            >
              Publications
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("education")}
            >
              Education
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
