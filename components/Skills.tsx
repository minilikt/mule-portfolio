import { ImageWithFallback } from "./ImageWithFallback";
import { Card, CardContent } from "./ui/card";
import { Progress } from "./ui/progress";

const designTools = [
  { 
    name: "Figma", 
    level: 95,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
  },
  { 
    name: "Adobe Creative Suite", 
    level: 90,
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg"
  },
  { 
    name: "Sketch", 
    level: 85,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg"
  },
  { 
    name: "Framer", 
    level: 70,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg"
  },
  { 
    name: "Principle", 
    level: 80,
    logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=50&h=50&fit=crop"
  }
];

const skills = [
  { name: "User Research", level: 92 },
  { name: "Prototyping", level: 85 },
  { name: "Information Architecture", level: 90 },
  { name: "Interaction Design", level: 87 },
  { name: "Visual Design", level: 93 }
];

const technologies = [
  {
    name: "HTML/CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
  },
  {
    name: "Tailwind CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
  },
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  }
];

const platforms = [
  {
    name: "GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
  },
  {
    name: "Slack",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg"
  },
  {
    name: "Notion",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png"
  },
  {
    name: "Jira",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg"
  },
  {
    name: "Miro",
    logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=50&h=50&fit=crop"
  },
  {
    name: "Linear",
    logo: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=50&h=50&fit=crop"
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4">Skills &amp; Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for creating exceptional digital experiences
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Design Tools */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl mb-6">Design Tools</h3>
              <div className="space-y-6">
                {designTools.map((tool) => (
                  <div key={tool.name}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-lg bg-background border border-border flex items-center justify-center">
                          <ImageWithFallback
                            src={tool.logo}
                            alt={tool.name}
                            className="w-6 h-6"
                          />
                        </div>
                        <span>{tool.name}</span>
                      </div>
                      <span className="text-muted-foreground">{tool.level}%</span>
                    </div>
                    <Progress value={tool.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Core Skills */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl mb-6">Core Skills</h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span>{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Technologies */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl mb-6">Technologies</h3>
              <div className="grid grid-cols-3 gap-4">
                {technologies.map((tech) => (
                  <div key={tech.name} className="flex flex-col items-center p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-background border border-border flex items-center justify-center mb-2">
                      <ImageWithFallback
                        src={tech.logo}
                        alt={tech.name}
                        className="w-8 h-8"
                      />
                    </div>
                    <span className="text-xs text-center">{tech.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Platforms & Tools */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl mb-6">Platforms &amp; Tools</h3>
              <div className="grid grid-cols-3 gap-4">
                {platforms.map((platform) => (
                  <div key={platform.name} className="flex flex-col items-center p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-background border border-border flex items-center justify-center mb-2">
                      <ImageWithFallback
                        src={platform.logo}
                        alt={platform.name}
                        className="w-8 h-8"
                      />
                    </div>
                    <span className="text-xs text-center">{platform.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Certifications */}
        <Card className="mt-8">
          <CardContent className="p-6">
            <h3 className="text-xl mb-6">Certifications &amp; Education</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-primary">🎓</span>
                </div>
                <div>
                  <h4 className="mb-1">Google UX Design Certificate</h4>
                  <p className="text-muted-foreground text-sm">Coursera • 2023</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-primary">🏛️</span>
                </div>
                <div>
                  <h4 className="mb-1">UX Strategy & Research from IDF</h4>
                  <p className="text-muted-foreground text-sm">Interaction Design Foundation • 2024</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}