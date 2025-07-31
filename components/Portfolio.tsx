import { ExternalLink, ArrowRight, Eye } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { projects } from "@/constants/const";



interface PortfolioProps {
  onViewCaseStudy?: (project: typeof projects[0]) => void;
}

export function Portfolio({ onViewCaseStudy }: PortfolioProps) {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const handleViewCaseStudy = (project: typeof projects[0]) => {
    if (onViewCaseStudy) {
      onViewCaseStudy(project);
    }
  };

  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4">Featured Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A look at how I turn complex problems into simple, intuitive experiences—balancing business goals with user needs.
          </p>
        </div>
        
        <div className="space-y-16">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={`overflow-hidden group hover:shadow-xl transition-all duration-500 ${
                selectedProject === project.id ? "ring-2 ring-primary" : ""
              }`}
              onMouseDown={() => { setSelectedProject(project.id); handleViewCaseStudy(project); }}
              onMouseLeave={() => setSelectedProject(null)}
            >
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Project Image */}
                <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="aspect-[4/3] lg:aspect-auto lg:h-full">
                    <ImageWithFallback
                      width={1200}
                      height={1200}
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  
                  

                  {/* Project Number */}
                  <div className="absolute top-6 left-6">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <span className="text-lg font-semibold text-primary">
                        {project.id.toString().padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <CardContent className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="mb-4">
                    <Badge variant="secondary" className="mb-2">
                      {project.year}
                    </Badge>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-2xl lg:text-3xl mb-2">
                    {project.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    {project.subtitle}
                  </p>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Project Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-muted/50 rounded-lg">
                    <div>
                      <div className="text-sm text-muted-foreground">Client</div>
                      <div className="font-medium">{project.client}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Duration</div>
                      <div className="font-medium">{project.duration}</div>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="text-center">
                        <div className="text-lg font-semibold text-primary">
                          {metric.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Button onClick={() => handleViewCaseStudy(project)}>
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
        
        
      </div>
    </section>
  );
}