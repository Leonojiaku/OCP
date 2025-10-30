import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, Award } from "lucide-react";

const timeline = [
  {
    type: "education",
    icon: GraduationCap,
    title: "Bachelor of Technology in Information Technology",
    institution: "Federal University of Technology, Owerri",
    period: "2023 - to Date",
    description:
      "Pursuing a comprehensive IT degree with focus on AI engineering, software engineering, algorithms, and web technologies. Maintaining a 4.8 GPA.",
    achievements: [
      "Dean's List (2022, 2023, 2024)",
      "Director of ICT of Information Technology Club",
      "Winner of Annual Hackathon 2024",
    ],
  },
  {
    type: "work",
    icon: Briefcase,
    title: "Software Development Intern",
    institution: "National Agency of the Control of AIDS, NACA.",
    period: "Summer 2025",
    description:
      "Developed and maintained web applications using React and Node.js and Data Science and Management. Collaborated with senior developers on production features.",
    achievements: [
      "Implemented 3 major features increasing user engagement by 25%",
      "Optimized API performance reducing response time by 40%",
      "Mentored 2 junior interns on best practices",
    ],
  },
  {
    type: "work",
    icon: Briefcase,
    title: "Frontend Developer",
    institution: "StudentHub Platform",
    period: "2024 - 2025",
    description:
      "Part-time role building responsive interfaces for a student collaboration platform. Led UI/UX redesign project.",
    achievements: [
      "Redesigned user dashboard improving user satisfaction",
      "Built reusable component library",
      "Reduced page load time by 50%",
    ],
  },
  {
    type: "education",
    icon: Award,
    title: "High School Diploma",
    institution: "Rolex Comprehensive College",
    period: "2019 - 2022",
    description:
      "Graduated with honors. Active member of robotics team and computer science club.",
    achievements: [
      "Valedictorian",
      "National Merit Scholar",
      "First place in State Coding Competition",
    ],
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            data-testid="heading-education"
          >
            Education &{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4" />
          <p
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            data-testid="text-education-intro"
          >
            My academic journey and professional experience
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                data-testid={`timeline-item-${index}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-accent border-4 border-background shadow-lg" />

                {/* Content */}
                <div className="flex-1 ml-20 md:ml-0">
                  <Card
                    className={`hover-elevate ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10">
                          <item.icon
                            className="h-6 w-6 text-primary"
                            data-testid={`icon-timeline-${index}`}
                          />
                        </div>
                        <div className="flex-1">
                          <h3
                            className="text-xl font-semibold mb-1"
                            data-testid={`heading-timeline-${index}`}
                          >
                            {item.title}
                          </h3>
                          <p
                            className="text-muted-foreground font-medium"
                            data-testid={`text-institution-${index}`}
                          >
                            {item.institution}
                          </p>
                          <p
                            className="text-sm text-muted-foreground"
                            data-testid={`text-period-${index}`}
                          >
                            {item.period}
                          </p>
                        </div>
                      </div>

                      <p
                        className="text-muted-foreground mb-4"
                        data-testid={`text-description-${index}`}
                      >
                        {item.description}
                      </p>

                      <div className="space-y-2">
                        {item.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                            <p
                              className="text-sm text-muted-foreground"
                              data-testid={`text-achievement-${index}-${i}`}
                            >
                              {achievement}
                            </p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
