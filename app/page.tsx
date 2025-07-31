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
import { sampleProject } from "@/constants/const";
import { useEffect, useState } from "react";



export default function Home() {
  const [currentView, setCurrentView] = useState<'portfolio' | 'case-study'>('portfolio');
  const [selectedProject, setSelectedProject] = useState(sampleProject);

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };
  const showCaseStudy = (project: typeof sampleProject) => {
    setSelectedProject(project);
    setCurrentView('case-study');
    window.scrollTo(0, 0);
  };
  const [backTarget, setBackTarget] = useState<'back' | 'contact'>('back');

  const showPortfolio = () => {
    setCurrentView('portfolio');
    setBackTarget('back');
    console.log("Portfolio view activated");
  };

  const showContact = () => {
    setCurrentView('portfolio');
    setBackTarget('contact');
    console.log("Contact view activated");
  };

  useEffect(() => {
    if (currentView === 'portfolio') {
      const timeout = setTimeout(() => {
        if (backTarget === "back") {
          scrollToSection('work');
        } else {
          scrollToSection('contact');
        }
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [currentView, backTarget]);

  if (currentView === 'case-study') {
    return (
      <CaseStudy onBack={showPortfolio} contact={showContact} project={selectedProject} />
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