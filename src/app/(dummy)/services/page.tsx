import HeroSection from "@/components/hero-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services - Suitmedia",
  description:
    "Discover Suitmedia's comprehensive digital services: web development, mobile apps, UI/UX design, digital marketing, and more.",
  keywords:
    "web development, mobile apps, UI/UX design, digital marketing, suitmedia services",
  openGraph: {
    title: "Our Services - Suitmedia",
    description:
      "Comprehensive digital solutions tailored to your business needs.",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100/30">
      {/* Hero Section */}
      <HeroSection
        title="Services"
        description="We offer comprehensive digital solutions designed to transform your business and create meaningful connections with your audience through innovative technology."
        backgroundImage="/bg-services.jpg"
      />

      {/* Main Services */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="secondary"
              className="mb-4 bg-primary/10 text-primary border-primary/20"
            >
              Core Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What We Specialize In
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From concept to launch, we provide end-to-end solutions that drive
              results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "💻",
                title: "Web Development",
                description:
                  "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
                features: [
                  "Responsive Design",
                  "Performance Optimization",
                  "SEO-Friendly",
                  "CMS Integration",
                ],
                color: "from-primary/20 to-orange-100/50",
              },
              {
                icon: "📱",
                title: "Mobile App Development",
                description:
                  "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
                features: [
                  "iOS & Android",
                  "Cross-Platform",
                  "UI/UX Design",
                  "App Store Optimization",
                ],
                color: "from-orange-100/50 to-primary/20",
              },
              {
                icon: "🎨",
                title: "UI/UX Design",
                description:
                  "User-centered design solutions that create intuitive and engaging digital experiences for your customers.",
                features: [
                  "User Research",
                  "Wireframing",
                  "Prototyping",
                  "Design Systems",
                ],
                color: "from-primary/20 to-orange-100/50",
              },
              {
                icon: "🚀",
                title: "Digital Marketing",
                description:
                  "Comprehensive digital marketing strategies to boost your online presence and drive measurable results.",
                features: [
                  "SEO/SEM",
                  "Social Media",
                  "Content Marketing",
                  "Analytics",
                ],
                color: "from-orange-100/50 to-primary/20",
              },
              {
                icon: "🔧",
                title: "Consulting & Strategy",
                description:
                  "Expert guidance and strategic planning to help you navigate the digital landscape and achieve your goals.",
                features: [
                  "Digital Strategy",
                  "Technology Audit",
                  "Process Optimization",
                  "Training",
                ],
                color: "from-primary/20 to-orange-100/50",
              },
              {
                icon: "☁️",
                title: "Cloud Solutions",
                description:
                  "Scalable cloud infrastructure and migration services to future-proof your business operations.",
                features: [
                  "Cloud Migration",
                  "DevOps",
                  "Infrastructure",
                  "Security",
                ],
                color: "from-orange-100/50 to-primary/20",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="border-primary/10 py-5 bg-gradient-to-br from-white to-orange-50/20 hover:shadow-lg transition-all duration-300 hover:border-primary/20 group"
              >
                <CardHeader>
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    className="w-full mt-6 border-primary/20 text-primary hover:bg-primary/5"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-orange-50/50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="secondary"
              className="mb-4 bg-primary/10 text-primary border-primary/20"
            >
              Our Process
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How We Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery
              every time
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description:
                  "We start by understanding your business goals, target audience, and project requirements through detailed research and planning.",
                icon: "🔍",
              },
              {
                step: "02",
                title: "Design & Prototyping",
                description:
                  "Our design team creates wireframes, mockups, and interactive prototypes to visualize your solution before development.",
                icon: "✏️",
              },
              {
                step: "03",
                title: "Development & Testing",
                description:
                  "We build your solution using best practices and conduct thorough testing to ensure quality and performance.",
                icon: "⚙️",
              },
              {
                step: "04",
                title: "Launch & Support",
                description:
                  "We deploy your solution and provide ongoing support to ensure it continues to meet your evolving needs.",
                icon: "🚀",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold text-lg">
                      {process.step}
                    </span>
                  </div>
                  <div className="text-3xl mb-4">{process.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
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

      {/* Technologies */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="secondary"
              className="mb-4 bg-primary/10 text-primary border-primary/20"
            >
              Technologies
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Tools We Master
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We use cutting-edge technologies to deliver robust and scalable
              solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "Frontend",
                technologies: [
                  "React",
                  "Next.js",
                  "Vue.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Framer Motion",
                ],
              },
              {
                category: "Backend",
                technologies: [
                  "Node.js",
                  "Python",
                  "PHP",
                  "PostgreSQL",
                  "MongoDB",
                  "Redis",
                ],
              },
              {
                category: "DevOps & Cloud",
                technologies: [
                  "AWS",
                  "Docker",
                  "Kubernetes",
                  "CI/CD",
                  "Terraform",
                  "Monitoring",
                ],
              },
            ].map((tech, index) => (
              <Card
                key={index}
                className="border-primary/10 py-5 bg-gradient-to-br from-white to-orange-50/20 hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground text-center">
                    {tech.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="-mt-6 flex flex-wrap gap-2 justify-center">
                    {tech.technologies.map((technology, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="border-primary/20 text-primary/80"
                      >
                        {technology}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-gradient-to-r from-orange-50/50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="secondary"
              className="mb-4 bg-primary/10 text-primary border-primary/20"
            >
              Pricing
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Flexible Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the package that best fits your needs and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$5,000",
                description: "Perfect for small businesses and startups",
                features: [
                  "Responsive Website",
                  "Basic SEO",
                  "Contact Forms",
                  "CMS Integration",
                  "3 Months Support",
                ],
                popular: false,
              },
              {
                name: "Professional",
                price: "$15,000",
                description: "Ideal for growing businesses",
                features: [
                  "Custom Web Application",
                  "Advanced SEO",
                  "CMS Integration",
                  "6 Months Support",
                  "Analytics Setup",
                ],
                popular: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "For large organizations with complex needs",
                features: [
                  "Full Digital Solution",
                  "Custom Development",
                  "Dedicated Team",
                  "12 Months Support",
                  "Training & Consultation",
                ],
                popular: false,
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`border-primary/10 bg-gradient-to-br py-5 from-white to-orange-50/20 hover:shadow-lg transition-all duration-300 relative ${
                  plan.popular ? "border-primary shadow-lg" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl text-foreground">
                    {plan.name}
                  </CardTitle>
                  <div className="text-3xl font-bold text-primary my-4">
                    {plan.price}
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                        : "bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20"
                    }`}
                  >
                    Get Started
                  </Button>
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Let's discuss your project and create a digital solution that drives
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
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
