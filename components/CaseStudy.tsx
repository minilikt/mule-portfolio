
import { ArrowLeft, ExternalLink, Calendar, Users, Target, TrendingUp, CheckCircle, ArrowRight, Clock, Lightbulb, Zap, Eye, Heart } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

interface CaseStudyProps {
  onBack: () => void;
  contact: () => void;
  project: {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    tags: string[];
    year: string;
    client: string;
    duration: string;
    timeline: string;
    role: string;
    team?: string[];
    metrics: Array<{ label: string; value: string }>;
    
    // Detailed case study content
    problemStatement: string;
    objectives: string[];
    process: string[];
    researchMethods: string[];
    keyFindings: string[];
    personas: Array<{ name: string; description: string; needs: string[] }>;
    challenges: Array<{ challenge: string; solution: string }>;
    features: string[];
    improvements?: string[];
    designShowcase: Array<{ title: string; description: string; image: string }>;
    reflection: {
      keyTakeaways: string[];
      futureImprovements: string[];
    };
    liveUrl?: string;
    designSystem?: boolean;
    culturalContext?: string;
  };
}

export function CaseStudy({ onBack, project, contact }: CaseStudyProps) {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-12">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="mb-8 hover:bg-muted/50"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>
          
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-4">{project.title}</h1>
            <p className="text-xl sm:text-2xl text-muted-foreground">{project.subtitle}</p>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl">{project.description}</p>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-16">
          <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              height={48}
              width={1920}  
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <p className="text-sm text-muted-foreground">htasdghnasdbg</p>
          </div>
        </div>

        {/* Project Overview */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8">Project Overview</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6">
              <Calendar className="h-8 w-8 text-primary mb-4" />
              <h3 className="mb-2">Timeline</h3>
              <p className="text-muted-foreground">{project.timeline}</p>
              <p className="text-sm text-muted-foreground">({project.duration})</p>
            </Card>
            
            <Card className="p-6">
              <Users className="h-8 w-8 text-primary mb-4" />
              <h3 className="mb-2">Client</h3>
              <p className="text-muted-foreground">{project.client}</p>
              <p className="text-sm text-muted-foreground">{project.year}</p>
            </Card>
            
            <Card className="p-6">
              <Target className="h-8 w-8 text-primary mb-4" />
              <h3 className="mb-2">Role</h3>
              <p className="text-muted-foreground">{project.role}</p>
              <p className="text-sm text-muted-foreground">End-to-end design</p>
            </Card>

            <Card className="p-6">
              <TrendingUp className="h-8 w-8 text-primary mb-4" />
              <h3 className="mb-2">Impact</h3>
              <p className="text-muted-foreground">{project.metrics[0]?.value || 'High'}</p>
              <p className="text-sm text-muted-foreground">{project.metrics[0]?.label || 'User Satisfaction'}</p>
            </Card>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8">Problem Statement</h2>
          <Card className="p-8 bg-gradient-to-r from-red-50/50 to-orange-50/50 dark:from-red-950/20 dark:to-orange-950/20 border-l-4 border-l-red-500">
            <p className="text-lg leading-relaxed">{project.problemStatement}</p>
          </Card>
        </section>

        {/* Objectives & Goals */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8">Objectives & Goals</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.objectives.map((objective, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-sm font-medium mr-4 mt-1 flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="leading-relaxed">{objective}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8">Design Process</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {project.process.map((step, index) => (
              <div key={index} className="relative">
                <Card className="p-6 text-center h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-lg font-semibold text-primary">{index + 1}</span>
                  </div>
                  <h3 className="text-sm font-medium mb-2">{step}</h3>
                </Card>
                {index < project.process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-border transform -translate-y-1/2 z-10"></div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Research & Insights */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8">Research & Insights</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl mb-6">Research Methods</h3>
              <div className="space-y-4">
                {project.researchMethods.map((method, index) => (
                  <div key={index} className="flex items-center p-4 bg-muted/50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>{method}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl mb-6">Key Findings</h3>
              <div className="space-y-4">
                {project.keyFindings.map((finding, index) => (
                  <div key={index} className="flex items-start p-4 bg-blue-50/50 dark:bg-blue-950/20 rounded-lg">
                    <Lightbulb className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{finding}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* User Personas */}
          {project.personas.length > 0 && (
            <div className="mt-12">
              <h3 className="text-xl mb-6">User Personas</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.personas.map((persona, index) => (
                  <Card key={index} className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/20 rounded-full flex items-center justify-center mb-4">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="text-lg mb-2">{persona.name}</h4>
                    <p className="text-muted-foreground text-sm mb-4">{persona.description}</p>
                    <div>
                      <h5 className="text-sm font-medium mb-2">Key Needs:</h5>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {persona.needs.map((need, needIndex) => (
                          <li key={needIndex} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-1.5"></div>
                            {need}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Challenges & Solutions */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8">Challenges & Solutions</h2>
          <div className="space-y-6">
            {project.challenges.map((item, index) => (
              <Card key={index} className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-lg">⚠️</span>
                      </div>
                      <h3 className="text-lg">Challenge {index + 1}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed pl-11">{item.challenge}</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg flex items-center justify-center mr-3">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <h3 className="text-lg">Solution</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed pl-11">{item.solution}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* New Features & Functionalities */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8">New Features & Functionalities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="mb-2">{feature}</h3>
              </Card>
            ))}
          </div>
        </section>

        {/* Final Design Showcase */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8">Final Design Showcase</h2>
          <div className="space-y-12">
            {project.designShowcase.map((showcase, index) => (
              <div key={index} className="space-y-6">
                <div className="text-center">
                  <h3 className="text-xl mb-2">{showcase.title}</h3>
                  <p className="text-muted-foreground">{showcase.description}</p>
                </div>
                <div className="relative group">
                  <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                    <ImageWithFallback
                      height={1471}
                      width={1920}
                      src={showcase.image}
                      alt={showcase.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-xl flex items-center justify-center">
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Results & Impact */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8">Results & Impact</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {project.metrics.map((metric) => (
              <Card key={metric.label} className="p-8 text-center">
                <TrendingUp className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <div className="text-3xl font-semibold text-primary mb-2">
                  {metric.value}
                </div>
                <div className="text-muted-foreground">
                  {metric.label}
                </div>
              </Card>
            ))}
          </div>
          
          {project.culturalContext && (
            <Card className="p-8 bg-gradient-to-r from-primary/5 to-accent/10">
              <h3 className="text-xl mb-4">Cultural Impact</h3>
              <p className="text-muted-foreground leading-relaxed">{project.culturalContext}</p>
            </Card>
          )}
        </section>

        {/* Reflection */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8">Reflection</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-xl mb-6 flex items-center">
                <Heart className="h-6 w-6 text-red-500 mr-3" />
                Key Takeaways
              </h3>
              <ul className="space-y-3">
                {project.reflection.keyTakeaways.map((takeaway, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{takeaway}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="p-8">
              <h3 className="text-xl mb-6 flex items-center">
                <Clock className="h-6 w-6 text-blue-500 mr-3" />
                Future Improvements
              </h3>
              <ul className="space-y-3">
                {project.reflection.futureImprovements.map((improvement, index) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{improvement}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <Card className="p-12 bg-gradient-to-r from-primary/5 to-accent/10">
            <h3 className="text-2xl mb-4">Like what you see?</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let&s collaborate to create meaningful digital experiences that solve real problems and delight users.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={contact} size="lg">
                Start a Project
              </Button>
              {project.liveUrl && (
                <Button variant="outline" size="lg" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Live Project
                  </a>
                </Button>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}