import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Microscope, Share2 } from "lucide-react";

const researchAreas = [
  {
    icon: Brain,
    title: "Agentic AI & Autonomous Systems",
    description: "Development and evaluation of frontier agentic AI systems, focusing on multi-step reasoning, planning, autonomous decision-making, and reliable task execution."
  },
  {
    icon: Microscope,
    title: "AI for Scientific Discovery",
    description: "Intelligent automation of scientific experiments through stochastic decision-making, adaptive resource allocation, and learning-based optimization, with applications to smart microscopy."
  },
  {
    icon: Share2,
    title: "Stochastic Modeling & Optimization",
    description: "Mathematical modeling and optimization of large-scale and resource-constrained systems, leveraging probability theory, stochastic processes, and statistical methods to improve efficiency and reliability."
  }
];

const Research = () => {
  return (
    <section id="research" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Research Interests</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My research explores the mathematical foundations, development, and evaluation of intelligent autonomous systems, spanning agentic AI, scientific experimentation, and stochastic optimization.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {researchAreas.map((area, index) => (
            <Card key={index} className="transition-all hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <area.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{area.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {area.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
