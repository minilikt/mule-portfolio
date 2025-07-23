import { ExternalLink, ArrowRight, Eye } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const projects = [
  {
    id: 1,
    title: "Habeshlingo",
    subtitle: "African Language Learning App",
    description: "A gamified mobile app that makes indigenous African languages accessible through levels, points, and streaks—bringing cultural heritage to the digital age.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
    tags: ["Mobile App", "EdTech", "Gamification", "Cultural Preservation"],
    year: "2025",
    client: "Habeshlingo Inc.",
    duration: "10 weeks",
    timeline: "January 2025 – March 2025",
    role: "Lead UX/UI Designer",
    metrics: [
      { label: "User Engagement", value: "+65%" },
      { label: "Learning Completion", value: "+80%" },
      { label: "Cultural Reach", value: "12 Languages" }
    ],
    problemStatement: "Indigenous African languages are rapidly disappearing from younger generations due to lack of accessible, engaging learning platforms. Traditional language learning methods fail to capture the attention of digital natives, leading to cultural erosion and loss of linguistic heritage.",
    objectives: [
      "Create an engaging gamified learning experience for African languages",
      "Preserve and promote indigenous cultural heritage through technology",
      "Build a scalable platform that can accommodate multiple African languages",
      "Design age-appropriate interfaces for children and young adults"
    ],
    process: ["Discovery", "Research", "Design", "Testing", "Launch"],
    researchMethods: [
      "Interviews with language teachers and cultural experts",
      "Surveys with diaspora communities",
      "Competitive analysis of language learning apps",
      "Cultural workshops with elders"
    ],
    keyFindings: [
      "Visual storytelling resonates strongly with African learning traditions",
      "Gamification increases engagement when tied to cultural achievements",
      "Community features are essential for motivation and practice",
      "Audio pronunciation is critical for tonal languages"
    ],
    personas: [
      {
        name: "Diaspora Youth",
        description: "Second-generation Africans wanting to connect with their roots",
        needs: ["Cultural connection", "Flexible learning", "Community support"]
      },
      {
        name: "Local Students",
        description: "Young people in Africa learning additional indigenous languages",
        needs: ["Engaging content", "Offline access", "Achievement tracking"]
      }
    ],
    challenges: [
      {
        challenge: "Limited digital resources for African languages meant starting from scratch with audio, text, and cultural content.",
        solution: "Partnered with local universities and cultural institutions to create authentic, high-quality content with native speakers."
      },
      {
        challenge: "Balancing gamification with cultural sensitivity to avoid trivializing sacred or ceremonial language elements.",
        solution: "Conducted extensive cultural consultations and created content guidelines that respect traditional contexts while maintaining engagement."
      }
    ],
    features: [
      "Interactive Story Mode",
      "Cultural Context Lessons", 
      "Audio Pronunciation Guide",
      "Community Challenges",
      "Progress Streaks",
      "Cultural Badges System"
    ],
    designShowcase: [
      {
        title: "Onboarding Experience",
        description: "Culturally-rich introduction that celebrates African heritage",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop"
      },
      {
        title: "Learning Interface",
        description: "Gamified lessons with traditional African design patterns",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
      }
    ],
    reflection: {
      keyTakeaways: [
        "Cultural sensitivity must be at the forefront of design decisions",
        "Community involvement is crucial for authentic language learning",
        "Gamification works best when tied to meaningful cultural achievements"
      ],
      futureImprovements: [
        "Add AR features for immersive cultural experiences",
        "Expand to include more African languages",
        "Integrate with local educational institutions"
      ]
    },
    culturalContext: "This project has helped preserve linguistic heritage for over 12 African languages, connecting diaspora communities with their roots and encouraging younger generations to embrace their cultural identity through technology."
  },
  {
    id: 2,
    title: "Aelafat Zemare",
    subtitle: "Ethiopian Orthodox Hymn Streaming",
    description: "The first digital platform dedicated to preserving and sharing Ethiopian Orthodox hymns, connecting young believers with their spiritual heritage through sacred music.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
    tags: ["Mobile App", "Spirituality", "Cultural Heritage", "Audio Streaming"],
    year: "2024",
    client: "Ethiopian Orthodox Tewahedo Church",
    duration: "8 weeks",
    timeline: "October 2024 – December 2024",
    role: "Lead UX/UI Designer",
    metrics: [
      { label: "User Adoption", value: "+90%" },
      { label: "Session Duration", value: "45 min avg" },
      { label: "Hymn Collection", value: "500+ Hymns" }
    ],
    problemStatement: "Traditional Ethiopian Orthodox hymns are becoming inaccessible to younger generations and diaspora communities. The lack of digital preservation and modern access methods threatens the continuity of this sacred musical tradition that spans over 1,600 years.",
    objectives: [
      "Digitally preserve Ethiopian Orthodox hymn traditions",
      "Create accessible platform for youth and diaspora believers",
      "Maintain spiritual reverence in digital interface design",
      "Enable discovery of hymns by liturgical season and saint"
    ],
    process: ["Discovery", "Research", "Design", "Testing", "Launch"],
    researchMethods: [
      "Interviews with youth and clergy",
      "Diaspora community surveys",
      "Liturgical music research",
      "Spiritual technology usage studies"
    ],
    keyFindings: [
      "Young believers want to connect with tradition but need modern access",
      "Spiritual content requires different UX considerations than entertainment",
      "Search by liturgical calendar is more important than genre-based discovery",
      "Offline access is crucial for areas with limited connectivity"
    ],
    personas: [
      {
        name: "Diaspora Youth",
        description: "Young Orthodox believers living abroad seeking spiritual connection",
        needs: ["Authentic content", "Easy access", "Cultural learning"]
      },
      {
        name: "Local Faithful",
        description: "Church members wanting to learn and practice hymns",
        needs: ["Liturgical accuracy", "Offline access", "Learning resources"]
      }
    ],
    challenges: [
      {
        challenge: "Balancing modern UX patterns with the sacred, contemplative nature of Orthodox liturgical practice.",
        solution: "Created a minimal, reverent interface using traditional Orthodox colors and iconography, with distraction-free listening experiences."
      },
      {
        challenge: "Organizing vast hymn collections by complex liturgical calendar and theological themes rather than typical music categories.",
        solution: "Developed custom taxonomy based on Orthodox liturgical year, saints' days, and theological significance with expert clergy input."
      }
    ],
    features: [
      "Liturgical Calendar Integration",
      "Saint-based Search",
      "Offline Hymn Downloads",
      "Daily Spiritual Readings",
      "Prayer Reminder System",
      "Traditional Orthodox Interface"
    ],
    designShowcase: [
      {
        title: "Sacred Interface Design",
        description: "Minimal, reverent design reflecting Orthodox spiritual aesthetics",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
      },
      {
        title: "Liturgical Navigation",
        description: "Calendar-based discovery system for seasonal hymns",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop"
      }
    ],
    reflection: {
      keyTakeaways: [
        "Spiritual UX requires different principles than commercial applications",
        "Cultural authenticity builds trust with traditional communities",
        "Simplicity and reverence can coexist with modern usability"
      ],
      futureImprovements: [
        "Add multilingual support for global Orthodox communities",
        "Integrate with church service schedules",
        "Create interactive hymn learning features"
      ]
    },
    culturalContext: "This platform has become a bridge between ancient Orthodox traditions and modern technology, helping preserve sacred music while making it accessible to a new generation of believers worldwide."
  },
  {
    id: 3,
    title: "FlexET",
    subtitle: "AI-Powered Fitness Platform",
    description: "A futuristic fitness app that leverages AI to create personalized workout and nutrition plans, adapting to user mood, schedule, and fitness goals in real-time.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    tags: ["Mobile App", "AI/ML", "Health & Fitness", "Personalization"],
    year: "2025",
    client: "FlexET Technologies",
    duration: "12 weeks",
    timeline: "May 2025 – July 2025",
    role: "Senior UX/UI Designer",
    metrics: [
      { label: "User Retention", value: "+75%" },
      { label: "Workout Completion", value: "+85%" },
      { label: "AI Accuracy", value: "94%" }
    ],
    problemStatement: "Traditional fitness apps offer generic workout plans that don't adapt to users' changing circumstances, mood, or real-time constraints. This leads to low adherence rates and abandoned fitness goals, especially for busy professionals and students.",
    objectives: [
      "Create AI-driven personalized fitness experiences",
      "Develop adaptive workout plans based on real-time user data",
      "Build motivational features that prevent user drop-off",
      "Design intuitive interfaces for complex AI recommendations"
    ],
    process: ["Discovery", "Research", "Design", "Testing", "Launch"],
    researchMethods: [
      "Gym-goer behavior studies",
      "Fitness app usage analysis",
      "AI trainer interviews",
      "Mood-fitness correlation research"
    ],
    keyFindings: [
      "Users abandon fitness apps when plans don't fit their current reality",
      "Mood significantly impacts workout preferences and performance",
      "AI recommendations need clear explanations to build trust",
      "Visual progress tracking motivates continued usage"
    ],
    personas: [
      {
        name: "Busy Professional",
        description: "Time-constrained workers needing flexible, efficient workouts",
        needs: ["Quick sessions", "Adaptive scheduling", "Progress tracking"]
      },
      {
        name: "Fitness Beginner",
        description: "New to fitness, needs guidance and motivation",
        needs: ["Clear instructions", "Gradual progression", "Encouragement"]
      },
      {
        name: "Athlete",
        description: "Experienced fitness enthusiasts wanting optimization",
        needs: ["Advanced metrics", "Performance analysis", "Goal customization"]
      }
    ],
    challenges: [
      {
        challenge: "Making complex AI recommendations feel simple and trustworthy to users who may be skeptical of automated fitness advice.",
        solution: "Created transparent AI explanations with visual reasoning and option to override recommendations, building user confidence through education."
      },
      {
        challenge: "Balancing comprehensive personalization with app performance and battery life on mobile devices.",
        solution: "Implemented smart caching and progressive AI processing, with offline backup plans when connectivity is limited."
      }
    ],
    features: [
      "AI Workout Generator",
      "Mood-Based Training",
      "Smart Nutrition Planning",
      "Real-time Form Correction",
      "Progress Prediction",
      "Adaptive Goal Setting"
    ],
    improvements: [
      "Simplified complex AI interfaces for better user understanding",
      "Added visual workout demonstrations for clarity",
      "Improved onboarding to set realistic expectations",
      "Enhanced progress visualization for motivation"
    ],
    designShowcase: [
      {
        title: "AI Coach Interface",
        description: "Conversational AI that adapts to user needs and preferences",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop"
      },
      {
        title: "Smart Workout Flow",
        description: "Adaptive exercises that change based on real-time feedback",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop"
      }
    ],
    reflection: {
      keyTakeaways: [
        "AI transparency builds user trust and adoption",
        "Personalization must balance sophistication with simplicity",
        "Mood-based features significantly improve user engagement"
      ],
      futureImprovements: [
        "Add wearable device integration for better biometric tracking",
        "Implement social features for community motivation",
        "Expand AI to predict and prevent workout injuries"
      ]
    }
  },
  {
    id: 4,
    title: "HabariDOC",
    subtitle: "Comprehensive Healthcare Platform",
    description: "A medical platform bridging doctors and patients through seamless appointment scheduling, live consultations, and comprehensive health record management for improved healthcare accessibility.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
    tags: ["Web App", "Healthcare", "Telemedicine", "Accessibility"],
    year: "2025",
    client: "Ethiopian Ministry of Health",
    duration: "10 weeks",
    timeline: "February 2025 – April 2025",
    role: "Lead UX/UI Designer",
    metrics: [
      { label: "Patient Access", value: "+200%" },
      { label: "Appointment Efficiency", value: "+90%" },
      { label: "Doctor Satisfaction", value: "96%" }
    ],
    problemStatement: "Healthcare access in Ethiopia is severely limited by geographic barriers, doctor shortages, and inefficient appointment systems. Patients often travel long distances for basic consultations, while doctors struggle with paper-based record keeping and scheduling conflicts.",
    objectives: [
      "Increase healthcare accessibility through telemedicine",
      "Streamline doctor-patient communication and scheduling",
      "Digitize and secure patient health records",
      "Create trust-focused interfaces for medical consultations"
    ],
    process: ["Discovery", "Research", "Design", "Testing", "Launch"],
    researchMethods: [
      "Doctor workflow analysis",
      "Patient journey mapping",
      "Healthcare system audit",
      "Telemedicine best practices research"
    ],
    keyFindings: [
      "Trust is the primary barrier to telemedicine adoption",
      "Doctors need efficient tools that don't disrupt established workflows",
      "Patients value clear communication about diagnosis and treatment",
      "Language and literacy barriers require careful interface design"
    ],
    personas: [
      {
        name: "Rural Patient",
        description: "Lives far from medical facilities, needs basic healthcare access",
        needs: ["Easy scheduling", "Clear communication", "Affordable care"]
      },
      {
        name: "General Practitioner", 
        description: "Overworked doctor managing many patients daily",
        needs: ["Efficient workflow", "Patient history access", "Time management"]
      },
      {
        name: "Specialist Doctor",
        description: "Expert providing consultations and second opinions",
        needs: ["Quality patient data", "Diagnostic tools", "Professional collaboration"]
      }
    ],
    challenges: [
      {
        challenge: "Building trust in telemedicine among patients and doctors who prefer traditional face-to-face consultations.",
        solution: "Designed transparent communication features, doctor verification systems, and gradual onboarding that introduces telemedicine benefits step by step."
      },
      {
        challenge: "Creating interfaces accessible to users with varying literacy levels and limited technology experience.",
        solution: "Implemented voice navigation, visual icons, multilingual support, and simplified workflows with clear visual hierarchies."
      }
    ],
    features: [
      "Video Consultation Platform",
      "Smart Appointment Scheduling",
      "Digital Health Records",
      "Prescription Management",
      "Doctor Verification System",
      "Multi-language Support"
    ],
    improvements: [
      "Simplified booking process from 8 steps to 3",
      "Added visual appointment confirmations for low-literacy users",
      "Improved video quality optimization for poor internet connections",
      "Enhanced security features for patient data protection"
    ],
    designShowcase: [
      {
        title: "Patient Dashboard",
        description: "Clean, accessible interface for managing health and appointments",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop"
      },
      {
        title: "Doctor Console",
        description: "Efficient workflow management for healthcare providers",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop"
      }
    ],
    reflection: {
      keyTakeaways: [
        "Healthcare UX requires extra attention to trust and accessibility",
        "Cultural sensitivity is crucial when digitizing traditional practices",
        "Clear communication can overcome technology adoption barriers"
      ],
      futureImprovements: [
        "Add AI-powered symptom screening",
        "Integrate with national health insurance systems",
        "Expand to include mental health consultations"
      ]
    },
    culturalContext: "This platform has transformed healthcare delivery in rural Ethiopia, connecting remote communities with quality medical care and reducing the burden on overcrowded urban hospitals."
  }
];

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
              className="overflow-hidden group hover:shadow-xl transition-all duration-500"
              onMouseEnter={() => setSelectedProject(project.id)}
              onMouseLeave={() => setSelectedProject(null)}
            >
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Project Image */}
                <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="aspect-[4/3] lg:aspect-auto lg:h-full">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button 
                      variant="secondary" 
                      size="lg" 
                      className="bg-white/90 hover:bg-white"
                      onClick={() => handleViewCaseStudy(project)}
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      View Case Study
                    </Button>
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
                    <Button variant="ghost" size="icon">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Interested in seeing more work or case studies?
          </p>
          <Button variant="outline" size="lg">
            View Complete Portfolio
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}