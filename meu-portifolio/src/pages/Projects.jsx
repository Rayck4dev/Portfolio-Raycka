import { useEffect } from "react";
import Footer from "@/components/home/Footer";
import NavbarProjects from "@/components/projects/NavbarP";
import Section from "@/components/projects/Section";
import { projectsData } from "@/types/projects2";
import { motion } from "framer-motion";
import TechMotion from "@/components/ui/TechMotion";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();
  useEffect(() => {
    document.title = "Raycka Castro | FullStack Developer";
  }, []);

  return (
    <>
      <NavbarProjects />
      <main className="pt-24 bg-black relative overflow-hidden">
        <section className="h-[90vh] flex flex-col items-center justify-center text-center px-6 relative">
          <motion.h1
            className="text-6xl md:text-7xl font-audiowide text-center drop-shadow-[0_0_25px_var(--tw-shadow-color)]"
            style={{ "--tw-shadow-color": "var(--neonCyan)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 6, repeat: Infinity }}
              className="mt-14 bg-gradient-to-r from-neonPink via-neonBlue via-neonPurple to-neonGreen bg-clip-text text-transparent inline-block"
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              {t('projectsPage.title')}
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-white/80 text-lg md:text-xl font-audiowide mt-6 max-w-3xl leading-relaxed drop-shadow-[0_0_10px_var(--tw-shadow-color)]"
            style={{ "--tw-shadow-color": "var(--neonCyan)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {t('projectsPage.desc')}
          </motion.p>

          <div className="mt-36 w-full overflow-hidden relative">
            <TechMotion />
          </div>

          <motion.div
            className="absolute top-0 left-0 w-40 h-40 bg-neonPink/20 blur-3xl rounded-full -z-10"
            animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-48 h-48 bg-neonBlue/20 blur-3xl rounded-full -z-10"
            animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </section>

        <Section
          id="recentes"
          title={t('projectsPage.recent')}
          icon="✨"
          intro={t('projectsPage.recentIntro')}
          items={projectsData.recentes}
          bg="bg-gradient-to-r from-neonBlue/20 to-neonPurple/20"
        />
        <Section
          id="desenvolvimento"
          title={t('projectsPage.developing')}
          icon="🚀"
          intro={t('projectsPage.developingIntro')}
          items={projectsData.desenvolvimento}
          bg="bg-gradient-to-r from-neonPink/20 to-neonOrange/20"
        />
        <Section
          id="landing"
          title={t('projectsPage.landing')}
          icon="🌐"
          intro={t('projectsPage.landingIntro')}
          items={projectsData.landing}
          bg="bg-gradient-to-r from-neonGreen/20 to-neonCyan/20"
        />

        <Section
          id="academicos"
          title={t('projectsPage.academic')}
          icon="🎓"
          intro={t('projectsPage.academicIntro')}
          items={projectsData.academicos}
          bg="bg-gradient-to-r from-neonOrange/20 to-neonMagenta/20"
        />
        <Section
          id="outros"
          title={t('projectsPage.others')}
          icon="💻"
          intro={t('projectsPage.othersIntro')}
          items={projectsData.outros}
          bg="bg-gradient-to-r from-neonPink/20 to-neonBlue/20"
        />
      </main>
      <Footer />
    </>
  );
}
