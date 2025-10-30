import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

import analyticsImg from "@assets/generated_images/Analytics_dashboard_web_app_2d77fb10.png";
import ecommerceImg from "@assets/generated_images/E-commerce_website_interface_mockup_42e79730.png";
import fitnessImg from "@assets/generated_images/Fitness_mobile_app_interface_c352236b.png";
import socialImg from "@assets/generated_images/Social_media_platform_interface_82ac8878.png";
import taskImg from "@assets/generated_images/Task_management_app_interface_9fcc2d41.png";
import weatherImg from "@assets/generated_images/Weather_forecast_app_interface_f4f8ff1d.png";

const projects = [
  {
    title: "Analytics Dashboard",
    description: "A comprehensive data visualization platform with real-time analytics, interactive charts, and customizable reports for business intelligence.",
    image: analyticsImg,
    technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-featured online shopping platform with product management, cart functionality, secure checkout, and payment integration.",
    image: ecommerceImg,
    technologies: ["Next.js", "Stripe", "Tailwind CSS", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Fitness Tracker App",
    description: "Mobile-responsive fitness application for tracking workouts, monitoring progress, setting goals, and analyzing performance metrics.",
    image: fitnessImg,
    technologies: ["React Native", "Firebase", "Chart.js", "Express"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Social Media Platform",
    description: "Modern social networking application with real-time messaging, post sharing, likes, comments, and user profiles.",
    image: socialImg,
    technologies: ["React", "WebSocket", "Redis", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management System",
    description: "Collaborative project management tool with kanban boards, team collaboration, deadline tracking, and progress monitoring.",
    image: taskImg,
    technologies: ["TypeScript", "Drizzle ORM", "Zustand", "Vite"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Weather Forecast App",
    description: "Beautiful weather application providing detailed forecasts, historical data, interactive maps, and severe weather alerts.",
    image: weatherImg,
    technologies: ["React", "OpenWeather API", "Recharts", "Vercel"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="heading-projects">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-projects-intro">
            Here are some of my recent projects showcasing my skills in full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group overflow-hidden hover-elevate"
              data-testid={`card-project-${index}`}
            >
              <div className="relative aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  data-testid={`img-project-${index}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardHeader>
                <h3 className="text-xl font-semibold mb-2" data-testid={`heading-project-${index}`}>{project.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-3" data-testid={`text-project-description-${index}`}>
                  {project.description}
                </p>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs"
                      data-testid={`badge-tech-${tech.toLowerCase()}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="gap-2 flex-wrap">
                <Button
                  variant="default"
                  size="sm"
                  className="flex-1"
                  data-testid={`button-live-demo-${index}`}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  data-testid={`button-github-${index}`}
                >
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
