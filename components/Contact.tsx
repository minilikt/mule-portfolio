import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Send, ArrowDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const name = formData.get('name');
    const email = formData.get('email');
    const company = formData.get('company');
    const message = formData.get('message');
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`New Project Inquiry from ${name}`);
    const body = encodeURIComponent(`
Name: ${name}
Email: ${email}
Company: ${company || 'Not specified'}

Message:
${message}
    `);
    
    window.location.href = `mailto:abrahammulugetaadebash@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Let&apos;s Work Together
          </Badge>
          <h2 className="text-3xl sm:text-4xl mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I&apos;d love to hear about it. Let&apos;s discuss how we can bring your vision to life.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <a 
                        href="mailto:abrahammulugetaadebash@gmail.com"
                        className="hover:text-primary transition-colors cursor-pointer"
                      >
                        abrahammulugetaadebash@gmail.com
                      </a>
                      <div className="text-sm text-muted-foreground">Email me anytime</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <a 
                        href="tel:+251918968852"
                        className="hover:text-primary transition-colors cursor-pointer"
                      >
                        +251 918 968 852
                      </a>
                      <div className="text-sm text-muted-foreground">08:00 AM – 11:00 PM EAT</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <div>Addis Ababa, Ethiopia</div>
                      <div className="text-sm text-muted-foreground">Remote work available</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="mb-4">Follow Me</h4>
                  <div className="flex space-x-3">
                    <Button  variant="outline" size="icon">
                      <Link href="https://www.linkedin.com/in/abraham-mulugeta-41605b378?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                        <Linkedin className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon">
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Instagram className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-muted rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Available for new projects</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-6">Send me a message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block mb-2">Name *</label>
                      <Input id="name" name="name" placeholder="Your name" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2">Email *</label>
                      <Input id="email" name="email" type="email" placeholder="your@email.com" required />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block mb-2">Company</label>
                    <Input id="company" name="company" placeholder="Your company name" />
                  </div>
                    <label htmlFor="preference" className="block mb-2">Preference</label>
                    <div className="ml-4 flex flex-row mt-2 ">
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center gap-2 px-4 py-2 border rounded-md bg-background hover:bg-muted transition-colors">
                        Inquires
                        <ArrowDown className="h-4 w-4 text-muted-foreground" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Project work</DropdownMenuItem>
                        <DropdownMenuItem>Collaboration</DropdownMenuItem>
                        <DropdownMenuItem>Consultation</DropdownMenuItem>
                        <DropdownMenuItem>Other</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    </div>
                  
                  
                  <div>
                    <label htmlFor="message" className="block mb-2">Project Details *</label>
                    <Textarea 
                      id="message" 
                      name="message"
                      placeholder="Tell me about your project, timeline, and goals..."
                      className="min-h-[120px]"
                      required 
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}