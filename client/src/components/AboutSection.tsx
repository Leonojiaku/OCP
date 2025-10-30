import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Rocket, Users, Award } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable and scalable solutions",
  },
  {
    icon: Rocket,
    title: "Fast Learner",
    description: "Quick to adapt to new technologies",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Collaborative and communicative",
  },
  {
    icon: Award,
    title: "Achievement Driven",
    description: "Committed to excellence",
  },
];

const coreSkills = [
  "React & TypeScript",
  "Node.js & Express",
  "Database Design",
  "UI/UX Design",
  "Agile Development",
  "Problem Solving",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            data-testid="heading-about"
          >
            About{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3
              className="text-2xl font-semibold mb-4"
              data-testid="heading-journey"
            >
              My Journey
            </h3>
            <p
              className="text-muted-foreground text-lg leading-relaxed mb-4"
              data-testid="text-journey-1"
            >
              I'm a passionate Information Technology student with a deep love
              for creating innovative AI web applications. My journey in tech
              started with a curiosity about how websites work, and it has
              evolved into a full-fledged passion for building seamless user
              experiences.
            </p>
            <p
              className="text-muted-foreground text-lg leading-relaxed mb-4"
              data-testid="text-journey-2"
            >
              Over the years, I've developed expertise in modern web
              technologies, with a focus on Python, React, TypeScript, and
              Node.js. I thrive on solving complex problems and turning ideas
              into reality through code.
            </p>
            <p
              className="text-muted-foreground text-lg leading-relaxed"
              data-testid="text-journey-3"
            >
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>
          </div>

          <div>
            <h3
              className="text-2xl font-semibold mb-6"
              data-testid="heading-strengths"
            >
              Core Strengths
            </h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {coreSkills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="text-sm px-4 py-2"
                  data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {skill}
                </Badge>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight) => (
                <Card
                  key={highlight.title}
                  className="hover-elevate"
                  data-testid={`card-highlight-${highlight.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <CardContent className="p-6">
                    <highlight.icon
                      className="h-8 w-8 text-primary mb-3"
                      data-testid={`icon-${highlight.title.toLowerCase().replace(/\s+/g, "-")}`}
                    />
                    <h4
                      className="font-semibold mb-2"
                      data-testid={`heading-${highlight.title.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {highlight.title}
                    </h4>
                    <p
                      className="text-sm text-muted-foreground"
                      data-testid={`text-${highlight.title.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
