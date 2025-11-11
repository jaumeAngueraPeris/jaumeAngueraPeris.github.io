import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { SITE_CONFIG } from '../config.ts';

const education = [
  {
    degree: "Doctor of Philosophy (PhD)",
    field: `${SITE_CONFIG.phd}`,
    institution: `${SITE_CONFIG.university}`,
    location: `${SITE_CONFIG.location}`,
    period: "2019 - 2026",
    thesis: `Thesis: ${SITE_CONFIG.thesis_upper}`
  },
  {
    degree: "Master of Science (MSc)",
    field: `${SITE_CONFIG.phd}`,
    institution: `${SITE_CONFIG.university}`,
    location: `${SITE_CONFIG.location}`,
    period: "2017 - 2019",
    thesis: "Specialization: Information and Network Engineering"
  },
  {
    degree: "Bachelor of Science (BSc)",
    field: `${SITE_CONFIG.phd}`,
    institution: "Univesitat Politècnica de Catalunya",
    location: "Barcelona, Catalonia",
    period: "2012 - 2016",
    thesis: ""
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Education</h2>
          <p className="text-lg text-muted-foreground">
            Academic background and qualifications
          </p>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="transition-all hover:shadow-md">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-1">{edu.degree}</CardTitle>
                    <CardDescription className="text-base font-medium text-foreground/80">
                      {edu.field}
                    </CardDescription>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    {edu.period}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="ml-16">
                <p className="text-foreground font-medium">{edu.institution}</p>
                <p className="text-muted-foreground text-sm">{edu.location}</p>
                {edu.thesis && (
                  <p className="text-sm text-muted-foreground mt-2 italic">{edu.thesis}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
