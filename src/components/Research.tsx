import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Microscope } from "lucide-react";

const researchAreas = [
  {
    icon: Smartphone,
    title: "Communication systems",
    description: "Stochastic modelling and resource-dimensioning of large-scale multi-cell edge intelligent systems"
  },
  {
    icon: Microscope,
    title: "Biotechnology",
    description: "Restless multi-process multi-armed bandits for self-driving microscopes"
  }
];

const Research = () => {
  return (
    <section id="research" className="py-20 px-4 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Research Interests</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My research focuses on advancing communication systems and self-driving microscopes through innovative approaches and interdisciplinary methods.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {researchAreas.map((area, index) => (
            <Card key={index} className="transition-all hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <area.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{area.title}</CardTitle>
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
