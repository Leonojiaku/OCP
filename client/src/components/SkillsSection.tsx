import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Cloud } from "lucide-react";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiFigma,
  SiDocker,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React & Next.js", icon: SiReact, proficiency: 90, color: "text-[#61DAFB]" },
      { name: "TypeScript", icon: SiTypescript, proficiency: 85, color: "text-[#3178C6]" },
      { name: "JavaScript (ES6+)", icon: SiJavascript, proficiency: 90, color: "text-[#F7DF1E]" },
      { name: "Tailwind CSS", icon: SiTailwindcss, proficiency: 95, color: "text-[#06B6D4]" },
    ],
  },
  {
    title: "Backend & Databases",
    skills: [
      { name: "Node.js & Express", icon: SiNodedotjs, proficiency: 85, color: "text-[#339933]" },
      { name: "Python", icon: SiPython, proficiency: 80, color: "text-[#3776AB]" },
      { name: "PostgreSQL", icon: SiPostgresql, proficiency: 80, color: "text-[#4169E1]" },
      { name: "MongoDB", icon: SiMongodb, proficiency: 75, color: "text-[#47A248]" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git & GitHub", icon: SiGit, proficiency: 90, color: "text-[#F05032]" },
      { name: "Figma", icon: SiFigma, proficiency: 85, color: "text-[#F24E1E]" },
      { name: "Docker", icon: SiDocker, proficiency: 70, color: "text-[#2496ED]" },
      { name: "AWS", icon: Cloud, proficiency: 65, color: "text-[#FF9900]" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="heading-skills">
            Technical{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-skills-intro">
            Technologies and tools I work with regularly
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <Card key={category.title} className="hover-elevate" data-testid={`card-skill-category-${category.title.toLowerCase().replace(/\s+/g, '-')}`}>
              <CardHeader>
                <CardTitle className="text-xl" data-testid={`heading-skill-category-${category.title.toLowerCase().replace(/\s+/g, '-')}`}>{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} data-testid={`skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <skill.icon className={`h-5 w-5 ${skill.color}`} />
                      <span className="font-medium text-sm flex-1">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.proficiency}%
                      </span>
                    </div>
                    <Progress
                      value={skill.proficiency}
                      className="h-2"
                      data-testid={`progress-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="inline-block">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4" data-testid="heading-additional-skills">
                Additional Skills
              </h3>
              <div className="flex flex-wrap gap-3 justify-center max-w-2xl">
                {[
                  "RESTful APIs",
                  "GraphQL",
                  "Jest & Testing",
                  "CI/CD",
                  "Responsive Design",
                  "Accessibility",
                  "Agile/Scrum",
                  "Team Collaboration",
                  "Problem Solving",
                  "Technical Writing",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full text-sm font-medium"
                    data-testid={`additional-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
