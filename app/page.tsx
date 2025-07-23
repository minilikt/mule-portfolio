"use client";
import { About } from "@/components/About";
import { CaseStudy } from "@/components/CaseStudy";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { Testimonials } from "@/components/Testimonials";
import { ThemeToggle } from "@/components/ThemeToggle";
import { WorkProcess } from "@/components/WorkProcess";
import { useState } from "react";

const sampleProject = {
  id: 1,
  title: "FinanceFlow",
  subtitle: "Banking Application Redesign",
  description: "Complete redesign of a mobile banking application focusing on user onboarding and transaction flows. Increased user engagement by 45% through intuitive design and improved accessibility.",
  image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
  tags: ["Mobile App", "Fintech", "User Research", "Accessibility"],
  year: "2024",
  client: "FinanceFlow Inc.",
  duration: "3 months",
  timeline: "Jan 2024 - Mar 2024",
  role: "Lead Designer",
  metrics: [
    { label: "User Engagement", value: "+45%" },
    { label: "Task Completion", value: "+60%" },
    { label: "App Store Rating", value: "4.8/5" }
  ],
  problemStatement: "Describe the main problem addressed by the project.",
  objectives: [
    "Increase user engagement",
    "Improve accessibility"
  ],
  process: [
    "Research",
    "Ideation",
    "Design",
    "Testing",
    "Launch"
  ],
  researchMethods: [
    "User Interviews",
    "Surveys"
  ],
  keyFindings: [
    "Users prefer simplicity",
    "Mobile usage is high"
  ],
  personas: [
    {
      name: "Jane Doe",
      description: "A busy professional",
      needs: ["Quick access", "Mobile friendly"]
    }
  ],
  challenges: [
    {
      challenge: "Low engagement",
      solution: "Redesigned onboarding"
    }
  ],
  features: [
    "Dark mode",
    "Notifications"
  ],
  designShowcase: [
    {
      title: "Homepage Redesign",
      description: "A modern, clean homepage.",
      image: "/path/to/showcase.jpg"
    }
  ],
  reflection: {
    keyTakeaways: [
      "Iterative design is key"
    ],
    futureImprovements: [
      "Add more personalization"
    ]
  }
};

export default function Home() {
  const [currentView, setCurrentView] = useState<'portfolio' | 'case-study'>('portfolio');
  const [selectedProject, setSelectedProject] = useState(sampleProject);

  const showCaseStudy = (project: typeof sampleProject) => {
    setSelectedProject(project);
    setCurrentView('case-study');
    window.scrollTo(0, 0);
  };

  const showPortfolio = () => {
    setCurrentView('portfolio');
  };

  if (currentView === 'case-study') {
    return (
      <CaseStudy onBack={showPortfolio} project={selectedProject} />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WorkProcess />
        <Portfolio onViewCaseStudy={showCaseStudy} />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}