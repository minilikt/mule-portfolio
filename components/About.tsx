import profileImage from "figma:asset/0fd52c9e11bc502d72b7c41fe55b4173e89699ac.png";
import { Card } from "./ui/card";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl mb-6">
              Digital experiences that feel as good as they look
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p>
                With over 2 years of experience in UI/UX design, I specialize in creating 
                digital products that are not only visually stunning but also highly functional 
                and user-centered. My approach combines deep user research with modern design 
                principles to deliver solutions that drive business results.
              </p>
              <p>
                I've had the privilege of working with startups and established companies 
                across various industries, from fintech to healthcare, helping them transform 
                complex problems into simple, elegant solutions.
              </p>
              <p>
                When I'm not designing, you can find me exploring the latest design trends, 
                contributing to open-source projects, or exploring the beautiful landscapes of Ethiopia.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/10">
              <Image
                src="/mule.jpg"
                alt="Abraham Mulugeta"
                width={400}
                height={400}
                className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
              >
              </Image>
            </Card>
            
            {/* Floating Achievement Cards */}
            <div className="absolute -top-4 -right-4 bg-background border border-border rounded-lg p-4 shadow-lg">
              <div className="text-2xl">🏆</div>
              <div className="text-sm">Design Award</div>
              <div className="text-xs text-muted-foreground">2024</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-background border border-border rounded-lg p-4 shadow-lg">
              <div className="text-2xl">⭐</div>
              <div className="text-sm">5.0 Rating</div>
              <div className="text-xs text-muted-foreground">Upwork</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}