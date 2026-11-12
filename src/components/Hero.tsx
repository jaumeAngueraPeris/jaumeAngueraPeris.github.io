import { Fragment } from "react";
import { BookOpen, GraduationCap, Presentation, Layers, Users } from "lucide-react";
import { SITE_CONFIG } from '../config.ts';

const achievements = [
  { icon: BookOpen, value: SITE_CONFIG.stats.publications, label: "Publications" },
  { icon: GraduationCap, value: SITE_CONFIG.stats.supervisedTheses, label: "Supervised MSc theses" },
  { icon: Presentation, value: SITE_CONFIG.stats.teachingHours, label: "Teaching hours" },
  { icon: Layers, value: SITE_CONFIG.stats.funding, label: "Competitive funding" },
];

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-background via-background to-muted">
      <div className="max-w-6xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
            {SITE_CONFIG.name.split(" ").map((word, index) => (
              <Fragment key={word}>
                {index > 0 && <br className="md:hidden" />}
                {index > 0 && " "}
                {word}
              </Fragment>
            ))}
          </h1>
          <p className="text-xl md:text-2xl text-primary font-medium">
            PhD in { SITE_CONFIG.phd }
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            { SITE_CONFIG.university }, { SITE_CONFIG.location }
          </p>
        </div>

        <p className="text-lg md:text-xl text-foreground/80 max-w-4xl mx-auto leading-[1.8] text-balance">
          Researcher specializing in { SITE_CONFIG.thesis_lower }, with applications in communication systems and self-driving microscopy. More recently, my work has expanded toward developing and evaluating frontier agentic AI systems, with a growing interest in reliable AI for scientific discovery.
        </p>

        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 pt-8">
          {achievements.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 rounded-lg border bg-card p-4 text-left shadow-sm"
            >
              <item.icon className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <p className="text-lg font-semibold text-foreground leading-tight">{item.value}</p>
                <p className="text-sm text-muted-foreground leading-tight xl:whitespace-nowrap">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
          <Users className="w-4 h-4 text-primary flex-shrink-0" />
          <span>Research collaboration with</span>
          <span className="font-medium text-foreground">Wallenberg AI, Autonomous Systems and Software Program (WASP)</span>
          <span aria-hidden="true">·</span>
          <span className="font-medium text-foreground">Science for Life Laboratory (SciLifeLab)</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
