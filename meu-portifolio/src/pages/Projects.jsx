import { useEffect } from "react";
import Footer from "@/components/home/Footer";
import NavbarProjects from "@/components/projects/NavbarP";
import Section from "@/components/projects/Section";
import { projectsData } from "@/types/projects2";
import { motion } from "framer-motion";

export default function Projects() {
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
              className="bg-gradient-to-r from-neonPink via-neonBlue via-neonPurple to-neonGreen bg-clip-text text-transparent inline-block"
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              🚀 Meus Projetos
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-white/80 text-lg md:text-xl font-audiowide mt-6 max-w-3xl leading-relaxed drop-shadow-[0_0_10px_var(--tw-shadow-color)]"
            style={{ "--tw-shadow-color": "var(--neonCyan)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Aqui você encontra uma coleção dos meus projetos organizados por
            categoria e status. Explore cada seção para conhecer mais sobre meu
            trabalho em diferentes áreas como e-commerce, sistemas inteligentes,
            landing pages e aplicações completas.
          </motion.p>

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
          title="Recentes"
          icon="✨"
          intro="Últimos projetos lançados, destacando evolução contínua em design, arquitetura e experiência do usuário"
          items={projectsData.recentes}
          bg="bg-gradient-to-r from-neonBlue/20 to-neonPurple/20"
        />
        <Section
          id="desenvolvimento"
          title="Em Desenvolvimento"
          icon="🚀"
          intro="Projetos em fase de implementação, onde ideias estão sendo transformadas em sistemas funcionais com testes e melhorias constantes"
          items={projectsData.desenvolvimento}
          bg="bg-gradient-to-r from-neonPink/20 to-neonOrange/20"
        />
        <Section
          id="ecommerce"
          title="E-commerce"
          icon="🛒"
          intro="Plataformas de vendas online criadas para simular lojas virtuais completas, com foco em escalabilidade e fluxo de compra"
          items={projectsData.ecommerce}
          bg="bg-gradient-to-r from-neonBlue/20 to-neonGold/20"
        />
        <Section
          id="landing"
          title="Landing Pages"
          icon="🌐"
          intro="Páginas estáticas desenvolvidas para treinar habilidades de FrontEnd, design responsivo e otimização de conversão"
          items={projectsData.landing}
          bg="bg-gradient-to-r from-neonGreen/20 to-neonCyan/20"
        />
        <Section
          id="academicos"
          title="Trabalhos Acadêmicos"
          icon="🎓"
          intro="Projetos realizados em contexto acadêmico, aplicando teoria em soluções práticas e explorando diferentes linguagens e frameworks"
          items={projectsData.academicos}
          bg="bg-gradient-to-r from-neonOrange/20 to-neonMagenta/20"
        />
        <Section
          id="sistemas"
          title="Sistemas"
          icon="🧪"
          intro="Ferramentas inteligentes criadas para resolver problemas específicos, aplicando tecnologia em cenários reais como piscicultura e gestão"
          items={projectsData.sistemas}
          bg="bg-gradient-to-r from-neonYellow/20 to-neonGreen/20"
        />

        <Section
          id="completos"
          title="Projetos Concluídos"
          icon="💻"
          intro="Sites e sistemas finalizados, com design personalizado e funcionalidades robustas prontos para uso"
          items={projectsData.completos}
          bg="bg-gradient-to-r from-neonPurple/20 to-neonTeal/20"
        />
      </main>
      <Footer />
    </>
  );
}
