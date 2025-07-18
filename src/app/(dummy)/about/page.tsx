import HeroSection from "@/components/hero-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Suitmedia",
  description:
    "Learn about Suitmedia's journey, mission, and the talented team behind our digital innovation and creative solutions.",
  keywords:
    "about suitmedia, digital agency team, company mission, creative professionals",
  openGraph: {
    title: "About Us - Suitmedia",
    description: "Learn about Suitmedia's journey, mission, and talented team.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100/30">
      {/* Hero Section */}
      <HeroSection
        title="About"
        description="We are a passionate team of digital innovators, designers, and developers dedicated to transforming ideas into extraordinary digital experiences."
        backgroundImage="/bg-about.jpg"
      />

      {/* Mission & Vision */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <Badge
                variant="secondary"
                className="mb-6 bg-primary/10 text-primary border-primary/20"
              >
                Our Mission
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Empowering Digital Transformation
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                At Suitmedia, we believe in the power of technology to transform
                businesses and create meaningful connections. Our mission is to
                craft digital solutions that not only meet today's needs but
                also anticipate tomorrow's challenges.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We combine strategic thinking, creative design, and cutting-edge
                technology to deliver experiences that drive growth, engagement,
                and success for our clients.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  icon: "🎯",
                  title: "Purpose-Driven",
                  description:
                    "Every project starts with understanding your goals and creating solutions that deliver real impact.",
                },
                {
                  icon: "🚀",
                  title: "Innovation First",
                  description:
                    "We stay ahead of the curve, using the latest technologies and methodologies to keep you competitive.",
                },
                {
                  icon: "🤝",
                  title: "Partnership Approach",
                  description:
                    "We work as an extension of your team, ensuring seamless collaboration and shared success.",
                },
              ].map((value, index) => (
                <Card
                  key={index}
                  className="border-primary/10 bg-gradient-to-br from-white to-orange-50/20 hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{value.icon}</div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-orange-50/50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="secondary"
              className="mb-4 bg-primary/10 text-primary border-primary/20"
            >
              Our Impact
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Numbers That Matter
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our success is measured by the success of our clients and the
              impact we create together.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "150+", label: "Projects Completed" },
              { number: "50+", label: "Happy Clients" },
              { number: "5+", label: "Years Experience" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <Card
                key={index}
                className="text-center border-primary/10 bg-white/70 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="secondary"
              className="mb-4 bg-primary/10 text-primary border-primary/20"
            >
              Meet the Team
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Creative Minds Behind the Magic
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our diverse team brings together expertise in design, development,
              strategy, and innovation to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Creative Director",
                description:
                  "Leads our creative vision with 8+ years of experience in digital design and brand strategy.",
              },
              {
                name: "Michael Chen",
                role: "Technical Lead",
                description:
                  "Expert in modern web technologies with a passion for building scalable and performant applications.",
              },
              {
                name: "Emily Rodriguez",
                role: "UX/UI Designer",
                description:
                  "Crafts intuitive user experiences that balance beauty with functionality and accessibility.",
              },
            ].map((member, index) => (
              <Card
                key={index}
                className="border-primary/10 py-5 bg-gradient-to-br from-white to-orange-50/20 hover:shadow-lg transition-all duration-300"
              >
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                    👤
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-primary font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section
        id="values"
        className="py-20 px-6 bg-gradient-to-r from-primary/5 via-orange-50 to-primary/5"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="secondary"
              className="mb-4 bg-primary/10 text-primary border-primary/20"
            >
              Our Values
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What Drives Us Forward
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These core values guide every decision we make and every project
              we undertake.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Excellence in Everything",
                description:
                  "We strive for perfection in every pixel, every line of code, and every client interaction.",
              },
              {
                title: "Continuous Learning",
                description:
                  "The digital landscape evolves rapidly, and we're committed to staying at the forefront of innovation.",
              },
              {
                title: "Transparent Communication",
                description:
                  "We believe in honest, open dialogue with our clients throughout every stage of the project.",
              },
              {
                title: "Sustainable Solutions",
                description:
                  "We create digital products that are built to last and grow with your business needs.",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="border-primary/10 py-5 bg-white/80 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="-mt-6 text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Let's turn your ideas into reality. Contact us today to start your
            digital transformation journey.
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
              View Our Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
