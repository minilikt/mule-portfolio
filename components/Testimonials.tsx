import { Star, Quote } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Product Manager",
    company: "TechFlow Inc.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b602?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Abraham transformed our complex fintech platform into an intuitive experience that our users absolutely love. The attention to detail and user research was exceptional. Our user engagement increased by 45% after the redesign.",
    project: "Banking App Redesign"
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "CEO",
    company: "HealthConnect",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Working with Abraham was a game-changer for our healthcare platform. The design system he created not only looks beautiful but also ensures consistency across all our products. Highly recommended!",
    project: "Healthcare Platform"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    position: "Marketing Director",
    company: "EcoShop",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Abraham's redesign of our e-commerce platform exceeded all expectations. The conversion rate improved by 60%, and customer feedback has been overwhelmingly positive. Professional, creative, and results-driven.",
    project: "E-commerce Redesign"
  },
  {
    id: 4,
    name: "David Kim",
    position: "Founder",
    company: "LearnSpace",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "The educational platform Abraham designed for us is both beautiful and functional. Students and educators love the intuitive interface, and we've seen significant improvements in user engagement.",
    project: "Educational Platform"
  },
  {
    id: 5,
    name: "Lisa Wang",
    position: "VP of Design",
    company: "StartupFlow",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Abraham brought fresh perspectives to our design challenges. The user research insights were invaluable, and the final designs perfectly balanced user needs with business objectives. A true professional.",
    project: "SaaS Dashboard"
  },
  {
    id: 6,
    name: "James Thompson",
    position: "CTO",
    company: "InnovateLab",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "The mobile app design Abraham created for us is stunning and highly functional. The user flow is seamless, and we've received countless compliments from our users. Definitely working together again!",
    project: "Mobile App Design"
  }
];

export function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Testimonials</Badge>
          <h2 className="text-3xl sm:text-4xl mb-4">What Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it. Here's what clients say about working with me.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-primary/20" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Project Badge */}
                <div className="mb-4">
                  <Badge variant="outline" className="text-xs">
                    {testimonial.project}
                  </Badge>
                </div>

                {/* Client Info */}
                <div className="flex items-center">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-sm font-medium">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.position} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-border">
          <div className="text-center">
            <div className="text-2xl font-medium mb-2">5.0</div>
            <div className="text-muted-foreground text-sm">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-medium mb-2">20+</div>
            <div className="text-muted-foreground text-sm">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-medium mb-2">100%</div>
            <div className="text-muted-foreground text-sm">Project Success</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-medium mb-2">24hr</div>
            <div className="text-muted-foreground text-sm">Response Time</div>
          </div>
        </div>
      </div>
    </section>
  );
}