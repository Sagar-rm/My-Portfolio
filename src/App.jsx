import ParticleBackground from "./components/ParticleBackground"
import CustomCursor from "./components/CustomCursor"
import Navigation from "./components/Navigation"
import HeroSection from "./components/sections/HeroSection"
import TechStackCarousel from "./components/sections/TechStackCarousel"
import AboutSection from "./components/sections/AboutSection"
import ExperienceSection from "./components/sections/ExperienceSection"
import ProjectsSection from "./components/sections/ProjectsSection"
import AchievementsSection from "./components/sections/AchievementsSection"
import ContactSection from "./components/sections/ContactSection"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <ParticleBackground />
      <CustomCursor />
      <Navigation />

      <main>
        <HeroSection />
        <TechStackCarousel />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}