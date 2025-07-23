import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-xl mb-4">Abraham Mulugeta</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Creating meaningful digital experiences through thoughtful design and user research. 
              Let's build something amazing together.
            </p>
            <Button>Start a Project</Button>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#about" className="hover:text-foreground transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">Services</a></li>
              <li><a href="#work" className="hover:text-foreground transition-colors">Portfolio</a></li>
              <li><a href="#skills" className="hover:text-foreground transition-colors">Skills</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>UI/UX Design</li>
              <li>User Research</li>
              <li>Prototyping</li>
              <li>Design Systems</li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Abraham Mulugeta. All rights reserved.
          </div>
          <div className="flex items-center text-muted-foreground">
            <div className="flex items-center">
              Made with 
              <span className="mx-1 flex items-center">
                <span className="text-green-500">♥</span>
                <span className="text-yellow-500">♥</span>
                <span className="text-red-500">♥</span>
              </span> 
              in Ethiopia
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}