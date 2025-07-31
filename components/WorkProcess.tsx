import { processSteps } from "@/constants/const";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";



export function WorkProcess() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">How I Work</Badge>
          <h2 className="text-3xl sm:text-4xl mb-4">My Design Process</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that ensures every project delivers exceptional results through strategic thinking and creative execution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={step.id} className="relative group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-6">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                      {step.id}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mb-4 mt-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Duration */}
                  <div className="mb-4">
                    <Badge variant="outline" className="text-xs">
                      {step.duration}
                    </Badge>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <h4 className="text-sm mb-2 text-muted-foreground">Key Deliverables:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {step.deliverables.map((deliverable) => (
                        <li key={deliverable} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border transform -translate-y-1/2"></div>
                )}
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full border border-border/50">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <p className="text-sm text-muted-foreground">
              Timeline may vary based on project complexity and scope
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}