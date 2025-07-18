import HeroSection from "@/components/hero-section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Suitmedia",
  description:
    "Get in touch with Suitmedia for your next digital project. Contact our team for inquiries, collaborations, or consultations.",
  keywords:
    "contact suitmedia, get in touch, digital agency contact, project inquiry",
  openGraph: {
    title: "Contact Us - Suitmedia",
    description: "Get in touch with Suitmedia for your next digital project.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100/30">
      {/* Hero Section */}
      <HeroSection
        title="Contact"
        description="Ready to transform your digital presence? We'd love to discuss your project and explore how we can bring your vision to life."
        backgroundImage="/bg-contact.jpg"
      />

      {/* Contact Form & Info */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-12">
                <Badge
                  variant="secondary"
                  className="mb-4 bg-primary/10 text-primary border-primary/20"
                >
                  Send us a Message
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Start Your Project
                </h2>
                <p className="text-lg text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>
              </div>

              <Card className="border-primary/10 bg-gradient-to-br from-white to-orange-50/20">
                <CardContent className="p-8">
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          First Name *
                        </label>
                        <Input
                          placeholder="John"
                          className="border-primary/20 focus:border-primary focus:ring-primary/20"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Last Name *
                        </label>
                        <Input
                          placeholder="Doe"
                          className="border-primary/20 focus:border-primary focus:ring-primary/20"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        className="border-primary/20 focus:border-primary focus:ring-primary/20"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Company
                      </label>
                      <Input
                        placeholder="Your Company Name"
                        className="border-primary/20 focus:border-primary focus:ring-primary/20"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Project Type
                      </label>
                      <select className="w-full px-3 py-2 border border-primary/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-background">
                        <option>Select project type</option>
                        <option>Web Development</option>
                        <option>Mobile App</option>
                        <option>UI/UX Design</option>
                        <option>Branding</option>
                        <option>Consultation</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Budget Range
                      </label>
                      <select className="w-full px-3 py-2 border border-primary/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-background">
                        <option>Select budget range</option>
                        <option>$5,000 - $10,000</option>
                        <option>$10,000 - $25,000</option>
                        <option>$25,000 - $50,000</option>
                        <option>$50,000+</option>
                        <option>Let's discuss</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Project Details *
                      </label>
                      <Textarea
                        placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                        rows={6}
                        className="border-primary/20 focus:border-primary focus:ring-primary/20"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <div className="mb-12">
                <Badge
                  variant="secondary"
                  className="mb-4 bg-primary/10 text-primary border-primary/20"
                >
                  Contact Information
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Let's Talk
                </h2>
                <p className="text-lg text-muted-foreground">
                  Have questions? We're here to help and answer any questions
                </p>
              </div>

              <div className="space-y-8">
                {[
                  {
                    icon: "📍",
                    title: "Office Location",
                    content:
                      "123 Innovation Street\nTech District, TD 12345\nUnited States",
                    link: null,
                  },
                  {
                    icon: "📞",
                    title: "Phone",
                    content: "+1 (555) 123-4567",
                    link: "tel:+15551234567",
                  },
                  {
                    icon: "📧",
                    title: "Email",
                    content: "hello@suitmedia.com",
                    link: "mailto:hello@suitmedia.com",
                  },
                ].map((contact, index) => (
                  <Card
                    key={index}
                    className="border-primary/10 bg-gradient-to-br from-white to-orange-50/20 hover:shadow-lg transition-all duration-300 hover:border-primary/20"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="text-3xl">{contact.icon}</div>
                        <div>
                          <h3 className="font-semibold text-xl text-foreground mb-2">
                            {contact.title}
                          </h3>
                          {contact.link ? (
                            <a
                              href={contact.link}
                              className="text-primary hover:text-primary/80 transition-colors"
                            >
                              {contact.content}
                            </a>
                          ) : (
                            <p className="text-muted-foreground whitespace-pre-line">
                              {contact.content}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Office Hours */}
              <Card className="mt-8 border-primary/10 py-5 bg-gradient-to-br from-white to-orange-50/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <span className="text-2xl">🕒</span>
                    <span className="text-xl">Office Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with Accordion */}
      <section className="py-20 px-6 bg-gradient-to-r from-orange-50/50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="secondary"
              className="mb-4 bg-primary/10 text-primary border-primary/20"
            >
              Frequently Asked Questions
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Quick Answers
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about our services and process
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="item-1"
              className="border border-primary/10 rounded-lg px-6 bg-white/70 hover:bg-white transition-colors"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors">
                How long does a typical project take?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                Project timelines vary depending on scope and complexity. Simple
                websites typically take 4-6 weeks, while complex applications
                can take 3-6 months. We'll provide a detailed timeline during
                our initial consultation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border border-primary/10 rounded-lg px-6 bg-white/70 hover:bg-white transition-colors"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors">
                Do you work with international clients?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                Yes! We work with clients worldwide and have experience managing
                projects across different time zones. We use modern
                collaboration tools to ensure smooth communication throughout
                the project.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="border border-primary/10 rounded-lg px-6 bg-white/70 hover:bg-white transition-colors"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors">
                What's included in your web development service?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                Our web development includes design, development, testing,
                deployment, and post-launch support. We also provide training
                and documentation to help you manage your website effectively.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="border border-primary/10 rounded-lg px-6 bg-white/70 hover:bg-white transition-colors"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors">
                Do you provide ongoing maintenance?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                Absolutely! We offer various maintenance packages to keep your
                website secure, updated, and performing optimally. Our support
                team is always available to help with any issues or updates.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="border border-primary/10 rounded-lg px-6 bg-white/70 hover:bg-white transition-colors"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors">
                What technologies do you specialize in?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                We specialize in modern web technologies including React,
                Next.js, TypeScript, Node.js, and various cloud platforms. We
                stay up-to-date with the latest trends to deliver cutting-edge
                solutions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-6"
              className="border border-primary/10 rounded-lg px-6 bg-white/70 hover:bg-white transition-colors"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors">
                How do you handle project communication?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                We believe in transparent communication. You'll have a dedicated
                project manager, regular progress updates, and access to our
                project management tools. We're always available for questions
                and feedback.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary/5 via-orange-50 to-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Don't wait any longer. Contact us today and let's discuss how we can
            help transform your digital presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Schedule a Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/5"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
