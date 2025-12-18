import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import TechStack from "@/components/home/TechStack";
import SoftSkills from "@/components/home/SoftSkills";
import HardSkills from "@/components/home/HardSkills";
import AboutMe from "@/components/home/AboutMe";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Footer from "@/components/home/Footer";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "PORTIFÓLIO";
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <TechStack />
      <SoftSkills />
      <HardSkills />
      <AboutMe />
      <FeaturedProjects />
      <Footer />
    </main>
  );
}
