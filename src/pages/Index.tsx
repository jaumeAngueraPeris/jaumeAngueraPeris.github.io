import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Research from "@/components/Research";
import Publications from "@/components/Publications";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import { SITE_CONFIG } from '../config.ts';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Research />
      <Publications />
      <Education />
      <Contact />

      <footer className="py-8 px-4 border-t border-border bg-muted/30">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>© { SITE_CONFIG.currentYear } { SITE_CONFIG.name }. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
