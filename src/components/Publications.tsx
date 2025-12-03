import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const publications = [
  {
    title: "Extreme Distance Distributions of Poisson Voronoi Cells",
    authors: "Jaume Anguera Peris, Joakim Jaldén",
    journal: "Physica A: Statistical Mechanics and its Applications",
    year: "2025",
    type: "Journal",
    link: "https://arxiv.org/pdf/2405.07371"
  },
  {
    title: "Blind Asynchronous Over-the-Air Federated Edge Learning",
    authors: "Saeed Razavikia, Jaume Anguera Peris",
    journal: "IEEE Globecom Workshops",
    year: "2022",
    type: "Conference paper",
    link: "https://ieeexplore.ieee.org/document/10008588"
  },
  {
    title: "Resource Dimensioning for Single-Cell Edge Video Analytics",
    authors: "Jaume Anguera Peris",
    journal: "IEEE International Conference on Communications",
    year: "2022",
    type: "Conference paper",
    link: "https://ieeexplore.ieee.org/document/10278760"
  },
  {
    title: "Modelling Multi-Cell Edge Video Analytics",
    authors: "Jaume Anguera Peris",
    journal: "IEEE International Conference on Communications",
    year: "2022",
    type: "Conference paper",
    link: "https://ieeexplore.ieee.org/document/9838556"
  },
  {
    title: "Distributed Join-the-Shortest-Queue with Sparse and Unreliable Information Updates",
    authors: "Jaume Anguera Peris",
    journal: "IEEE International Conference on Communications",
    year: "2021",
    type: "Conference paper",
    link: "https://ieeexplore.ieee.org/document/9838596"
  },
];

const Publications = () => {
  return (
    <section id="publications" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Publications</h2>
          <p className="text-lg text-muted-foreground">
            Selected publications from my research work
          </p>
        </div>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <Card key={index} className="transition-all hover:shadow-md">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{pub.type}</Badge>
                      <span className="text-sm text-muted-foreground">{pub.year}</span>
                    </div>
                    <CardTitle className="text-xl mb-2">{pub.title}</CardTitle>
                    <CardDescription className="text-base">
                      {pub.authors}
                    </CardDescription>
                  </div>
                  <Button variant="ghost" size="icon" asChild>
                    <a href={pub.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground italic">{pub.journal}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
