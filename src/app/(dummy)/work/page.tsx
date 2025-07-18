import HeroSection from "@/components/hero-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work - Suitmedia",
  description:
    "Explore Suitmedia's portfolio of successful digital projects, from web applications to mobile apps and UI/UX designs.",
  keywords:
    "portfolio, case studies, web development projects, mobile apps, UI/UX design, suitmedia work",
  openGraph: {
    title: "Our Work - Suitmedia",
    description:
      "Discover our successful digital projects and creative solutions.",
    type: "website",
  },
};

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection
        title="Work"
        description="Discover our portfolio of innovative digital solutions that have transformed businesses and created meaningful impact for clients across various industries."
        backgroundImage="/bg-work.jpg"
      />

      {/* Featured Projects */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="secondary"
              className="mb-4 bg-primary/10 text-primary border-primary/20"
            >
              Featured Projects
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Best Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcasing our most impactful projects and creative solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {[
              {
                title: "E-Commerce Platform",
                client: "TechMart",
                category: "Web Development",
                description:
                  "A comprehensive e-commerce platform built with Next.js and modern payment integrations, resulting in 300% increase in online sales.",
                image: "🛒",
                technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
                metrics: [
                  "300% Sales Increase",
                  "50% Faster Loading",
                  "99.9% Uptime",
                ],
                link: "#",
              },
              {
                title: "Mobile Banking App",
                client: "FinanceFlow",
                category: "Mobile Development",
                description:
                  "Secure and intuitive mobile banking application with biometric authentication and real-time transaction monitoring.",
                image: "📱",
                technologies: ["React Native", "Node.js", "AWS", "MongoDB"],
                metrics: [
                  "1M+ Downloads",
                  "4.8 App Store Rating",
                  "Zero Security Issues",
                ],
                link: "#",
              },
              {
                title: "Healthcare Dashboard",
                client: "MedTech Solutions",
                category: "UI/UX Design",
                description:
                  "Comprehensive healthcare management dashboard with real-time patient monitoring and analytics visualization.",
                image: "🏥",
                technologies: ["React", "D3.js", "Python", "PostgreSQL"],
                metrics: [
                  "40% Workflow Improvement",
                  "60% Faster Diagnosis",
                  "95% User Satisfaction",
                ],
                link: "#",
              },
              {
                title: "Learning Management System",
                client: "EduTech Pro",
                category: "Web Application",
                description:
                  "Complete LMS platform with interactive courses, progress tracking, and integrated video conferencing capabilities.",
                image: "📚",
                technologies: ["Vue.js", "Laravel", "WebRTC", "Redis"],
                metrics: [
                  "100K+ Students",
                  "500+ Courses",
                  "98% Completion Rate",
                ],
                link: "#",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="border-primary/10 bg-gradient-to-br from-white to-orange-50/20 hover:shadow-xl transition-all duration-300 hover:border-primary/20 overflow-hidden group"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <Badge
                        variant="outline"
                        className="mb-3 border-primary/20 text-primary/80"
                      >
                        {project.category}
                      </Badge>
                      <CardTitle className="text-2xl text-foreground mb-2">
                        {project.title}
                      </CardTitle>
                      <p className="text-muted-foreground">
                        Client: {project.client}
                      </p>
                    </div>
                    <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                      {project.image}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="border-primary/20 text-primary/80"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        Key Results
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {project.metrics.map((metric, metricIndex) => (
                          <div
                            key={metricIndex}
                            className="flex items-center space-x-2"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            <span className="text-sm text-muted-foreground">
                              {metric}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      View Case Study
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-20 px-6 bg-gradient-to-r from-orange-50/50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="secondary"
              className="mb-4 bg-primary/10 text-primary border-primary/20"
            >
              Categories
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Diverse Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We work across various industries and project types
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🌐",
                title: "Web Development",
                count: "50+",
                description:
                  "Custom websites and web applications built with modern frameworks and technologies.",
                projects: [
                  "E-commerce Platforms",
                  "Corporate Websites",
                  "Web Applications",
                  "Progressive Web Apps",
                ],
              },
              {
                icon: "📱",
                title: "Mobile Apps",
                count: "30+",
                description:
                  "Native and cross-platform mobile applications for iOS and Android platforms.",
                projects: [
                  "Business Apps",
                  "E-commerce Apps",
                  "Social Platforms",
                  "Utility Apps",
                ],
              },
              {
                icon: "🎨",
                title: "UI/UX Design",
                count: "80+",
                description:
                  "User-centered design solutions that create engaging and intuitive digital experiences.",
                projects: [
                  "Interface Design",
                  "User Experience",
                  "Design Systems",
                  "Prototyping",
                ],
              },
            ].map((category, index) => (
              <Card
                key={index}
                className="text-center py-5 border-primary/10 bg-white/70 hover:bg-white hover:shadow-lg transition-all duration-300 hover:border-primary/20"
              >
                <CardHeader>
                  <div className="text-5xl mb-4">{category.icon}</div>
                  <CardTitle className="text-xl text-foreground">
                    {category.title}
                  </CardTitle>
                  <div className="text-3xl font-bold text-primary">
                    {category.count}
                  </div>
                  <p className="text-sm text-muted-foreground">Projects</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="space-y-2">
                    {category.projects.map((project, projectIndex) => (
                      <div
                        key={projectIndex}
                        className="flex items-center justify-center space-x-2"
                      >
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        <span className="text-xs text-muted-foreground">
                          {project}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process & Approach */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="secondary"
              className="mb-4 bg-primary/10 text-primary border-primary/20"
            >
              Our Approach
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              From Concept to Launch
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven methodology ensures successful project delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Research & Discovery",
                description:
                  "Understanding your business, users, and market to define project scope and requirements.",
                icon: "🔍",
              },
              {
                step: "02",
                title: "Design & Planning",
                description:
                  "Creating wireframes, prototypes, and detailed project plans to guide development.",
                icon: "📋",
              },
              {
                step: "03",
                title: "Development & Testing",
                description:
                  "Building your solution with clean code and conducting rigorous testing for quality assurance.",
                icon: "⚙️",
              },
              {
                step: "04",
                title: "Launch & Optimization",
                description:
                  "Deploying your project and providing ongoing support to ensure optimal performance.",
                icon: "🚀",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold">
                      {process.step}
                    </span>
                  </div>
                  <div className="text-3xl mb-4">{process.icon}</div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {process.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 px-6 bg-gradient-to-r from-orange-50/50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="secondary"
              className="mb-4 bg-primary/10 text-primary border-primary/20"
            >
              Client Feedback
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from our satisfied clients about their experience working
              with us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Suitmedia delivered an exceptional e-commerce platform that exceeded our expectations. The team's attention to detail and technical expertise is outstanding.",
                author: "Sarah Johnson",
                role: "CEO, TechMart",
                rating: 5,
              },
              {
                quote:
                  "The mobile banking app they created for us has been a game-changer. User adoption rates have been incredible and the feedback has been overwhelmingly positive.",
                author: "Michael Chen",
                role: "CTO, FinanceFlow",
                rating: 5,
              },
              {
                quote:
                  "Working with Suitmedia was a pleasure. They understood our healthcare needs perfectly and delivered a solution that improved our workflow significantly.",
                author: "Dr. Emily Rodriguez",
                role: "Director, MedTech Solutions",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="border-primary/10 bg-white/70 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                      <span key={starIndex} className="text-primary text-lg">
                        ⭐
                      </span>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary/5 via-orange-50 to-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready for Your Next Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss how we can create a digital solution that drives
            real results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Your Project
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/5"
            >
              View More Work
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
