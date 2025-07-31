import { Monitor, Smartphone, Layers, Zap, CheckCircle, Clock, Users, Target, BarChart } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { ServiceModal } from "./ServiceModel";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    description: string;
    features: string[];
    process: string[];
    timeline: string;
    idealFor: string[];
    outcomes: string[];
  } | null;
}
const servicesData = [
  {
    id: 1,
    title: "Product Design",
    shortDescription: "End-to-end product design from concept to launch, creating cohesive digital experiences that users love and businesses need.",
    description: "Comprehensive product design service that takes your idea from initial concept through to market-ready digital product. I work closely with stakeholders to understand business goals, user needs, and technical constraints to create products that are both beautiful and functional.",
    icon: Monitor,
    features: ["User Journey Mapping", "Information Architecture", "Design Strategy", "Product Roadmapping", "Stakeholder Workshops", "Competitive Analysis", "User Flow Design", "Wireframing & Prototyping"],
    process: [
      "Discovery & stakeholder interviews",
      "User research & market analysis", 
      "Information architecture & user flows",
      "Wireframing & low-fidelity prototypes",
      "Visual design & high-fidelity mockups",
      "Interactive prototyping & testing",
      "Design system creation",
      "Handoff & implementation support"
    ],
    timeline: "6-12 weeks",
    idealFor: ["Startups launching new products", "Companies redesigning existing products", "Businesses entering new markets", "Teams needing design strategy"],
    outcomes: ["Clear product vision & strategy", "User-validated design solutions", "Scalable design system", "Reduced development risks", "Improved user engagement", "Higher conversion rates"]
  },
  {
    id: 2,
    title: "UX Design & Research",
    shortDescription: "Deep user research and experience design that uncovers insights and creates intuitive, user-centered solutions.",
    description: "Research-driven UX design that puts users at the center of every decision. Through comprehensive user research, usability testing, and data analysis, I help you understand your users deeply and create experiences that truly serve their needs.",
    icon: Users,
    features: ["User Research", "Usability Testing", "Personas & Scenarios", "Competitive Analysis", "User Interviews", "Survey Design", "Journey Mapping", "Accessibility Audits"],
    process: [
      "Research planning & methodology",
      "User interviews & surveys",
      "Competitive analysis & benchmarking",
      "Data analysis & insights synthesis",
      "Persona development & journey mapping",
      "Usability testing & validation",
      "Recommendations & strategy",
      "Implementation guidance"
    ],
    timeline: "4-8 weeks",
    idealFor: ["Companies with existing products", "Teams needing user insights", "Products with usability issues", "Businesses planning major updates"],
    outcomes: ["Deep user understanding", "Validated design decisions", "Improved usability metrics", "Reduced support tickets", "Higher user satisfaction", "Data-driven insights"]
  },
  {
    id: 3,
    title: "UI Design",
    shortDescription: "Beautiful, modern interfaces that bring your brand to life while ensuring exceptional usability and accessibility.",
    description: "Pixel-perfect visual design that combines aesthetic appeal with functional excellence. I create interfaces that not only look stunning but also guide users effortlessly through their journey while maintaining brand consistency and accessibility standards.",
    icon: Layers,
    features: ["Visual Design", "Design Systems", "Responsive Design", "Accessibility Standards", "Brand Integration", "Micro-interactions", "Component Libraries", "Style Guides"],
    process: [
      "Brand analysis & visual direction",
      "Style guide & color palette creation",
      "Typography & grid system setup",
      "Component design & documentation",
      "High-fidelity mockup creation",
      "Responsive design adaptation",
      "Accessibility compliance check",
      "Asset preparation & handoff"
    ],
    timeline: "3-6 weeks",
    idealFor: ["Brands needing visual refresh", "Products requiring UI updates", "New brands launching digitally", "Teams needing design consistency"],
    outcomes: ["Cohesive visual identity", "Improved brand perception", "Better user engagement", "Accessibility compliance", "Consistent user experience", "Reduced design debt"]
  },
  {
    id: 4,
    title: "Mobile App Design",
    shortDescription: "Native and cross-platform mobile experiences optimized for touch interactions and platform-specific patterns.",
    description: "Mobile-first design that leverages platform-specific patterns and touch interactions. I create mobile experiences that feel natural on each platform while maintaining your brand identity and ensuring optimal performance across different devices.",
    icon: Smartphone,
    features: ["iOS & Android Design", "Touch Interactions", "Mobile Prototyping", "App Store Assets", "Platform Guidelines", "Gesture Design", "Offline States", "Performance Optimization"],
    process: [
      "Platform research & guidelines review",
      "User flow mapping for mobile",
      "Wireframing & interaction design",
      "Platform-specific UI design",
      "Prototype creation & testing",
      "Animation & micro-interaction design",
      "App store asset creation",
      "Developer handoff & support"
    ],
    timeline: "4-8 weeks",
    idealFor: ["Companies launching mobile apps", "Existing apps needing redesign", "Cross-platform mobile products", "Businesses going mobile-first"],
    outcomes: ["Platform-optimized experiences", "Improved app store ratings", "Higher user retention", "Better performance metrics", "Intuitive touch interactions", "Increased downloads"]
  },
  {
    id: 5,
    title: "Design Systems",
    shortDescription: "Scalable design systems and component libraries that ensure consistency across all your digital products.",
    description: "Comprehensive design systems that serve as the foundation for consistent, scalable digital products. I create documentation, component libraries, and guidelines that empower teams to build efficiently while maintaining design quality.",
    icon: Zap,
    features: ["Component Libraries", "Style Guides", "Documentation", "Figma/Sketch Assets", "Token Systems", "Pattern Libraries", "Governance Guidelines", "Team Training"],
    process: [
      "Audit existing design patterns",
      "Define design principles & tokens",
      "Create component architecture",
      "Design & document components",
      "Build pattern library",
      "Create usage guidelines",
      "Team training & workshops",
      "Ongoing maintenance planning"
    ],
    timeline: "6-10 weeks",
    idealFor: ["Growing design teams", "Multiple product portfolios", "Inconsistent design experiences", "Companies scaling rapidly"],
    outcomes: ["Design consistency at scale", "Faster design & development", "Reduced design debt", "Improved team efficiency", "Better user experience", "Lower maintenance costs"]
  },
  {
    id: 6,
    title: "Conversion Optimization",
    shortDescription: "Data-driven design improvements that increase conversion rates and improve key business metrics.",
    description: "Strategic design optimization focused on improving business metrics through user experience enhancements. Using data analysis, A/B testing, and user behavior insights to systematically improve conversion rates and key performance indicators.",
    icon: BarChart,
    features: ["A/B Testing", "Analytics Review", "Funnel Optimization", "Performance Tracking", "Conversion Audits", "User Behavior Analysis", "Landing Page Design", "Growth Design"],
    process: [
      "Current performance analysis",
      "Conversion funnel audit",
      "Hypothesis development",
      "Test design & implementation",
      "Data collection & analysis",
      "Iterative improvements",
      "Performance monitoring",
      "Results documentation"
    ],
    timeline: "4-12 weeks",
    idealFor: ["E-commerce businesses", "SaaS platforms", "Lead generation sites", "Companies with conversion goals"],
    outcomes: ["Higher conversion rates", "Improved ROI", "Better user engagement", "Increased revenue", "Data-driven insights", "Optimized user funnels"]
  }
];

export function Services() {
  const [selectedService, setSelectedService] = useState<typeof servicesData[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLearnMore = (service: typeof servicesData[0]) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">What I Offer</Badge>
          <h2 className="text-3xl sm:text-4xl mb-4">Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive design services tailored to your needs, from initial research to final implementation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {servicesData.map((service) => {
            const Icon = service.icon;
            return (
              <Card onMouseDown={() => handleLearnMore(service)} key={service.id} className="group hover:shadow-lg transition-all duration-300 h-full">
                
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/20 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                    {service.shortDescription}
                  </p>

                  {/* Features Preview */}
                  <div className="mb-6">
                    <h4 className="text-sm mb-3 text-muted-foreground">What&s Included:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature) => (
                        <li key={feature} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-sm text-muted-foreground ml-4">
                          +{service.features.length - 4} more
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="mt-auto">
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      onClick={() => handleLearnMore(service)}
                    >
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Card className="inline-block p-8 bg-gradient-to-r from-primary/5 to-accent/10">
            <h3 className="text-xl mb-4">Need a Custom Solution?</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Every project is unique. Let&apos;s discuss your specific needs and create a tailored proposal that fits your budget and timeline.
            </p>
            <Button size="lg">
              Get Custom Quote
            </Button>
          </Card>
        </div>
      </div>

      <ServiceModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service={selectedService}
      />
    </section>
  );
}
