import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100/30">
      {/* Hero Section */}
      <section className="py-24 px-6 ">
        <div className="max-w-6xl mx-auto text-center">
          <Badge
            variant="secondary"
            className="mb-6 bg-primary/10 mt-10 text-primary border-primary/20"
          >
            Welcome to Suitmedia
          </Badge>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-primary via-orange-600 to-primary bg-clip-text text-transparent leading-tight">
            Digital Innovation
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
            We craft exceptional digital experiences that transform businesses
            and connect brands with their audiences through innovative
            technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Explore Services
              </Button>
            </Link>
            <Link href="/work">
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/5"
              >
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* Services Preview */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="secondary"
              className="mb-4 bg-primary/10 text-primary border-primary/20"
            >
              What We Do
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From concept to launch, we provide comprehensive digital solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "💻",
                title: "Web Development",
                description:
                  "Modern, responsive websites and web applications built with cutting-edge technologies.",
              },
              {
                icon: "📱",
                title: "Mobile Apps",
                description:
                  "Native and cross-platform mobile applications that deliver exceptional user experiences.",
              },
              {
                icon: "🎨",
                title: "UI/UX Design",
                description:
                  "User-centered design solutions that create engaging and intuitive digital experiences.",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="border-primary/10 py-5 bg-gradient-to-br from-white to-orange-50/20 hover:shadow-lg transition-all duration-300 hover:border-primary/20 group text-center"
              >
                <CardHeader>
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5"
              >
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 px-6 bg-gradient-to-r from-orange-50/50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge
                variant="secondary"
                className="mb-4 bg-primary/10 text-primary border-primary/20"
              >
                About Us
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Crafting Digital Excellence
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We are a passionate team of digital innovators committed to
                creating exceptional solutions that drive business growth and
                user engagement. Our expertise spans web development, mobile
                applications, and digital strategy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Learn More About Us
                  </Button>
                </Link>
                <Link href="/careers">
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/5"
                  >
                    Join Our Team
                  </Button>
                </Link>
              </div>
            </div>
            <div className="text-center">
              <div className="text-8xl mb-6">🚀</div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="border-primary/10 bg-white/70 p-4">
                  <div className="text-3xl font-bold text-primary">100+</div>
                  <div className="-mt-5 text-md text-muted-foreground">
                    Projects Completed
                  </div>
                </Card>
                <Card className="border-primary/10 bg-white/70 p-4">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="-mt-5 text-md text-muted-foreground">
                    Happy Clients
                  </div>
                </Card>
                <Card className="border-primary/10 bg-white/70 p-4">
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="-mt-5 text-md text-muted-foreground">
                    Years Experience
                  </div>
                </Card>
                <Card className="border-primary/10 bg-white/70 p-4">
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="-mt-5 text-md text-muted-foreground">
                    Support
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary/5 via-orange-50 to-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Let&apos;s bring your digital vision to life. Contact us today to
            discuss your project and discover how we can help your business
            grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started
              </Button>
            </Link>
            <Link href="/ideas">
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/5"
              >
                Browse Ideas
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
