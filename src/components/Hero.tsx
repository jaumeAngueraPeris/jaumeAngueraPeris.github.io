import { Button } from "@/components/ui/button";
import { Mail, FileText, Github, Linkedin } from "lucide-react";
import { SITE_CONFIG } from '../config.ts';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-background via-background to-muted">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
            {SITE_CONFIG.name}
          </h1>
          <p className="text-xl md:text-2xl text-primary font-medium">
            PhD in { SITE_CONFIG.phd }
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            { SITE_CONFIG.university }, { SITE_CONFIG.location }
          </p>
        </div>

        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
          Researcher specializing in { SITE_CONFIG.thesis_lower }. Passionate about advancing knowledge in communication systems and self-driving microscopes through innovative methodologies and interdisciplinary collaboration.
        </p>

        {/*
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Button size="lg" className="gap-2">
            <Mail className="w-5 h-5" />
            Contact Me
          </Button>
          <Button size="lg" variant="outline" className="gap-2">
            <FileText className="w-5 h-5" />
            Download CV
          </Button>
        </div>

        <div className="flex justify-center gap-4 pt-4">
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
            <Github className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
            <Linkedin className="w-5 h-5" />
          </Button>
        </div>
        */}
      </div>
    </section>
  );
};

export default Hero;
