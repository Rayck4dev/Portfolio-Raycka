import HeadIcon from "@/assets/headlog_dev.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import BinaryBackground from "@/components/ui/BinaryBackground";

export default function HeroSection() {
  const [showHead, setShowHead] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowHead(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-[#010102] text-white min-h-screen pt-20 flex flex-col md:flex-row px-6 sm:px-12 lg:px-20 overflow-hidden">
      <BinaryBackground />

      {/* ESQUERDA */}
      <div className="max-w-lg z-20 flex flex-col items-center text-center md:items-start md:text-left justify-center flex-1">
        <h1 className="text-base sm:text-lg lg:text-xl font-bold text-white font-orbitron tracking-wide">
          HI, I'M RAYCKA
        </h1>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-4 text-white font-bold font-audiowide leading-tight">
          I'M A <br />
          FULLSTACK DEVELOPER
        </h2>

        <p className="mt-6 mb-8 max-w-xl text-white text-sm sm:text-base lg:text-lg font-bricolage font-semibold leading-relaxed px-2 md:px-0">
          Atualmente mergulhada no universo full‑stack, aprendendo novas
          tecnologias e criando projetos que refletem minha evolução como dev.
          Aqui você encontra um pouco do meu processo, minhas habilidades e tudo
          o que venho construindo nessa caminhada.
        </p>

        <Link
          to="/projects"
          className="mt-4 inline-block border-2 border-neonPurple text-neonPurple px-6 py-3 rounded hover:bg-neonPurple hover:text-white hover:scale-110 hover:shadow-[0_0_15px_#A855F7] transition-all duration-300 ease-out font-audiowide text-sm md:text-base"
        >
          VIEW MY PROJECTS
        </Link>
      </div>

      {/* DIREITA - só aparece em md+ */}
      <div className="hidden md:flex relative w-64 h-64 lg:w-[400px] lg:h-[680px] z-10 items-center justify-center flex-1">
        <div
          className={`transition-all duration-700 ease-out ${
            showHead
              ? "translate-x-0 opacity-100 blur-0"
              : "translate-x-8 opacity-0 blur-md"
          } md:absolute md:right-6`}
        >
          <img
            src={HeadIcon}
            alt="Cabeça Tech"
            className="w-full h-full object-contain drop-shadow-[0_0_20px_#A855F7] animate-float"
          />
        </div>
      </div>
    </section>
  );
}
