import { CheckCircle, Clock, Users, Target } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";

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

const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };
export function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  if (!service) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl mb-4">{service.title}</DialogTitle>
          <DialogDescription>
            Comprehensive details about this service including what&apos;s included, process overview, timeline, and expected outcomes.
          </DialogDescription>

        </DialogHeader>
        
        <div className="space-y-8">
          {/* Overview */}
          <div>
            <p className="text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* What's Included */}
            <div>
              <h3 className="text-lg mb-4 flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                What&apos;s Included
              </h3>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Process */}
            <div>
              <h3 className="text-lg mb-4 flex items-center">
                <Target className="h-5 w-5 text-blue-500 mr-2" />
                Process Overview
              </h3>
              <ol className="space-y-2">
                {service.process.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-sm">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Timeline */}
            <div>
              <h3 className="text-lg mb-4 flex items-center">
                <Clock className="h-5 w-5 text-orange-500 mr-2" />
                Timeline
              </h3>
              <Badge variant="outline" className="text-sm">
                {service.timeline}
              </Badge>
            </div>

            {/* Ideal For */}
            <div>
              <h3 className="text-lg mb-4 flex items-center">
                <Users className="h-5 w-5 text-purple-500 mr-2" />
                Ideal For
              </h3>
              <ul className="space-y-1">
                {service.idealFor.map((item, index) => (
                  <li key={index} className="text-sm text-muted-foreground">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Expected Outcomes */}
          <div>
            <h3 className="text-lg mb-4">Expected Outcomes</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {service.outcomes.map((outcome, index) => (
                <div key={index} className="flex items-center p-3 bg-muted/50 rounded-lg">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-sm">{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="border-t pt-6">
            <div className="flex flex-col sm:flex-row gap-4">
                <Button
                onClick={() => {
                  scrollToSection('contact');
                  onClose();
                }}
                size="lg"
                className="flex-1"
                >
                Start This Project
                </Button>
              <Button onClick={() => {
                  scrollToSection('contact');
                  onClose();
                }} variant="outline" size="lg" className="flex-1">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}