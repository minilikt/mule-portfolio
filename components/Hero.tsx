import { ArrowDown, Download } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function Hero() {
  const scrollToWork = () => {
    const element = document.getElementById('work');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <Badge variant="secondary" className="mb-4">
            Screens to Systems
          </Badge>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-4 tracking-tight">
          Design Specialist
        </h1>
        
        <div className="my-8">
          <span className="text-muted-foreground text-2xl sm:text-3xl lg:text-4xl">Digital Craftsman</span>
        </div>
        
        <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          I create intuitive digital experiences that blend beautiful design with thoughtful user research. 
          Based in Addis Ababa, working with clients worldwide.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" onClick={scrollToWork}>
            View My Work
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg">
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-border">
          <div>
            <div className="text-2xl">25+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div>
            <div className="text-2xl">2+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div>
            <div className="text-2xl">20+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div>
            <div className="text-2xl">100%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}