import Navigation from "@/components/Navigation";
import InteractiveBackground from "@/components/InteractiveBackground";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import CaseStudySection from "@/components/CaseStudySection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", position: "relative" }}>
      <InteractiveBackground />
      <Navigation />
      <main style={{ flex: 1, position: "relative", zIndex: 1 }}>
        <Hero />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <CaseStudySection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
