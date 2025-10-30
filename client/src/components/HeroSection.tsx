import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import profilePhoto from "@assets/generated_images/Professional_student_headshot_portrait_83392042.png";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 animate-gradient-shift"
        style={{ backgroundSize: "200% 200%" }}
      />

      {/* Overlay Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.3)_100%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <Avatar
            className="w-40 h-40 mx-auto mb-8 border-4 border-white/20 shadow-2xl"
            data-testid="img-profile"
          >
            <AvatarImage src={profilePhoto} alt="Profile photo" />
            <AvatarFallback className="text-4xl bg-gradient-to-br from-primary to-accent text-white">
              JD
            </AvatarFallback>
          </Avatar>

          <h1
            className="text-5xl md:text-7xl font-bold text-white mb-4"
            data-testid="heading-hero-title"
          >
            Hi, I'm{" "}
            <span
              className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
              data-testid="text-name"
            >
              Ojiaku Chigozie George
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl text-blue-100 mb-6"
            data-testid="text-hero-subtitle"
          >
            Full-Stack Developer & AI Engineer | Information Techonology Student
          </p>

          <p
            className="text-lg text-blue-200/90 max-w-2xl mx-auto mb-10"
            data-testid="text-hero-description"
          >
            Passionate Information Technology student building innovative web
            applications that make a difference. Specializing in React, Node.js,
            and modern web technologies.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white border border-cyan-600 shadow-lg shadow-cyan-500/50"
              data-testid="button-view-projects"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white"
              data-testid="button-contact"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="bg-white/10 backdrop-blur-sm text-white"
              data-testid="link-github"
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="bg-white/10 backdrop-blur-sm text-white"
              data-testid="link-linkedin"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="bg-white/10 backdrop-blur-sm text-white"
              data-testid="link-email"
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 transition-colors animate-bounce"
          data-testid="button-scroll-down"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
}
