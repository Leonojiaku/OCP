import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  insertContactSubmissionSchema,
  type InsertContactSubmission,
} from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "leonojiaku33@gmail.com",
    href: "mailto:leonojiaku33@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+234 (816) 022-8602",
    href: "tel:+2348160228602",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Abuja, Nigeria",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Leonojiaku",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/chigozieojiaku",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com/leonojiaku33",
  },
];

export default function ContactSection() {
  const { toast } = useToast();

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: (response) => {
      toast({
        title: "Message Sent!",
        description:
          response.message ||
          "Thank you for reaching out. I'll get back to you soon!",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description:
          error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            data-testid="heading-contact"
          >
            Get In{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4" />
          <p
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            data-testid="text-contact-intro"
          >
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3
              className="text-2xl font-semibold mb-6"
              data-testid="heading-contact-info"
            >
              Contact Information
            </h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="flex items-start gap-4"
                  data-testid={`contact-info-${info.label.toLowerCase()}`}
                >
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="font-medium"
                        data-testid={`link-${info.label.toLowerCase()}`}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p
                        className="font-medium"
                        data-testid={`text-${info.label.toLowerCase()}`}
                      >
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4
                className="text-lg font-semibold mb-4"
                data-testid="heading-connect"
              >
                Connect With Me
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-card border border-border hover-elevate"
                    data-testid={`link-social-${social.label.toLowerCase()}`}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            <Card
              className="mt-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20"
              data-testid="card-collaboration"
            >
              <CardContent className="p-6">
                <h4
                  className="font-semibold mb-2"
                  data-testid="heading-collaboration"
                >
                  Looking for collaboration?
                </h4>
                <p
                  className="text-sm text-muted-foreground"
                  data-testid="text-collaboration"
                >
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision. Let's build something
                  amazing together!
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="hover-elevate" data-testid="card-contact-form">
            <CardHeader>
              <CardTitle
                className="text-2xl"
                data-testid="heading-contact-form"
              >
                Send Me a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your name"
                            {...field}
                            data-testid="input-name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your.email@example.com"
                            {...field}
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell me about your project or idea..."
                            className="min-h-[150px] resize-none"
                            {...field}
                            data-testid="input-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={contactMutation.isPending}
                    data-testid="button-submit"
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground" data-testid="text-footer">
            © 2024 Ojiaku Chigozie George. Built with React, TypeScript, and
            Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
}
