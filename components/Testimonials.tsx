import { Star, Quote } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { testimonials } from "@/constants/const";


export function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Testimonials</Badge>
          <h2 className="text-3xl sm:text-4xl mb-4">What Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take my word for it. Here&apos;s what clients say about working with me.
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
                  &quot;{testimonial.text}&quot;
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