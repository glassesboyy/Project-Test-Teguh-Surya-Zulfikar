import HeroSection from "@/components/hero-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Suitmedia - Zul",
  description:
    "Join our dynamic team at Suitmedia! Explore exciting career opportunities and grow your skills in a collaborative environment.",
  keywords: "careers, jobs, suitmedia, hiring, team, opportunities",
  openGraph: {
    title: "Careers | Suitmedia",
    description: "Join our dynamic team at Suitmedia!",
    type: "website",
  },
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection
        title="Careers"
        description="We're looking for passionate, creative, and talented individuals to join our mission of transforming digital experiences. Discover opportunities to grow your career with Suitmedia."
        backgroundImage="/bg-careers.jpg"
      />

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-20">
        {/* Why Join Us Section */}
        <section className="py-8">
          <div className="text-center mb-16">
            <Badge
              variant="secondary"
              className="mb-4 bg-primary/10 text-primary border-primary/20"
            >
              Why Join Us
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Build Your Future With Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe in nurturing talent and creating an environment where
              innovation thrives
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🚀",
                title: "Growth Opportunities",
                description:
                  "Accelerate your career with mentorship, training, and challenging projects that push your boundaries.",
              },
              {
                icon: "🏆",
                title: "Competitive Benefits",
                description:
                  "Comprehensive packages including health insurance, flexible hours, and performance bonuses.",
              },
              {
                icon: "🌟",
                title: "Innovation Culture",
                description:
                  "Work with cutting-edge technologies and contribute to projects that make a real impact.",
              },
              {
                icon: "🤝",
                title: "Collaborative Team",
                description:
                  "Join a diverse team of passionate professionals who support each other's success.",
              },
              {
                icon: "📚",
                title: "Learning & Development",
                description:
                  "Access to courses, conferences, and resources to keep your skills sharp and current.",
              },
              {
                icon: "⚖️",
                title: "Work-Life Balance",
                description:
                  "Flexible working arrangements that help you maintain a healthy balance between work and life.",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="text-center py-5 border-primary/10 bg-white/70 hover:bg-white hover:shadow-lg transition-all duration-300 hover:border-primary/20"
              >
                <CardHeader>
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <CardTitle className="text-xl text-foreground">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-16" />

        {/* Open Positions Section */}
        <section className="py-8">
          <div className="text-center mb-16">
            <Badge
              variant="secondary"
              className="mb-4 bg-primary/10 text-primary border-primary/20"
            >
              Open Positions
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Current Opportunities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore exciting roles that match your skills and aspirations
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Senior Frontend Developer",
                department: "Engineering",
                location: "Remote / Jakarta",
                type: "Full-time",
                description:
                  "Lead frontend development using React, Next.js, and modern web technologies. Build scalable user interfaces and mentor junior developers.",
                requirements: [
                  "5+ years experience with React/Next.js",
                  "Strong TypeScript skills",
                  "Experience with modern CSS frameworks",
                  "Leadership and mentoring experience",
                ],
              },
              {
                title: "UX/UI Designer",
                department: "Design",
                location: "Jakarta",
                type: "Full-time",
                description:
                  "Create intuitive user experiences and beautiful interfaces for web and mobile applications. Collaborate closely with development teams.",
                requirements: [
                  "3+ years in UX/UI design",
                  "Proficiency in Figma and design systems",
                  "Strong portfolio of digital products",
                  "User research and testing experience",
                ],
              },
              {
                title: "Backend Developer",
                department: "Engineering",
                location: "Remote / Jakarta",
                type: "Full-time",
                description:
                  "Build robust backend systems and APIs. Work with Node.js, databases, and cloud infrastructure to create scalable solutions.",
                requirements: [
                  "4+ years backend development experience",
                  "Strong knowledge of Node.js and databases",
                  "Experience with cloud platforms (AWS, GCP)",
                  "API design and microservices architecture",
                ],
              },
              {
                title: "Digital Marketing Specialist",
                department: "Marketing",
                location: "Jakarta",
                type: "Full-time",
                description:
                  "Develop and execute digital marketing strategies. Manage campaigns across various channels and analyze performance metrics.",
                requirements: [
                  "3+ years in digital marketing",
                  "Google Analytics and Ads certification",
                  "Social media marketing expertise",
                  "Content creation and SEO knowledge",
                ],
              },
            ].map((job, index) => (
              <Card
                key={index}
                className="border-primary/10 py-4 bg-gradient-to-r from-white to-orange-50/20 hover:shadow-lg transition-all duration-300 hover:border-primary/20"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-2xl text-foreground mb-3">
                        {job.title}
                      </CardTitle>
                      <div className="flex flex-wrap gap-2">
                        <Badge
                          variant="outline"
                          className="border-primary/30 text-primary"
                        >
                          {job.department}
                        </Badge>
                        <Badge variant="secondary">{job.location}</Badge>
                        <Badge variant="secondary">{job.type}</Badge>
                      </div>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      Apply Now
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {job.description}
                  </p>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Requirements:
                    </h4>
                    <ul className="text-muted-foreground space-y-1">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-16" />

        {/* Application Process Section */}
        <section className="py-8">
          <div className="text-center mb-16">
            <Badge
              variant="secondary"
              className="mb-4 bg-primary/10 text-primary border-primary/20"
            >
              Application Process
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How to Join Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our hiring process is designed to be transparent and efficient
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Application",
                description:
                  "Submit your resume and portfolio through our careers page.",
              },
              {
                step: "02",
                title: "Screening",
                description:
                  "Initial review of your application and a brief phone call.",
              },
              {
                step: "03",
                title: "Interview",
                description:
                  "Technical and cultural fit interviews with our team.",
              },
              {
                step: "04",
                title: "Decision",
                description:
                  "Final decision and offer discussion within 1-2 weeks.",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">
                    {process.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {process.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-8 mt-16 rounded-2xl bg-gradient-to-r from-primary/5 via-orange-50 to-primary/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Don&apos;t see a position that fits? Send us your resume anyway -
              we&apos;re always looking for exceptional talent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Send Your Resume
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/5"
              >
                Learn More About Us
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
