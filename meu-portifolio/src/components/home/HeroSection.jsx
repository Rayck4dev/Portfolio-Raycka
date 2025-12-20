import HeadIcon from "@/assets/headlog_dev.png";
import Headphones from "@/assets/purplephone_dev.png";
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
    <section className="relative bg-[#010102] text-white min-h-screen flex flex-row items-center justify-between px-8 md:px-20 overflow-hidden">
      <BinaryBackground />

      {/* ESQUERDA */}
      <div className="max-w-lg z-20">
        <img
          src={Headphones}
          alt="Headphones"
          className="w-12 mb-4 drop-shadow-[0_0_10px_#A855F7] animate-pulse"
        />
        <h1 className="text-1xl font-bold text-white font-orbitron tracking-wide">
          HI, I'M RAYCKA
        </h1>

        <h2 className="text-6xl mt-4 text-white font-bold font-audiowide leading-tight">
          I'M A <br />
          FULLSTACK DEVELOPER
        </h2>

        <p className="mt-6 mb-8 max-w-xl text-white text-md font-bricolage font-semibold leading-relaxed">
          Atualmente mergulhada no universo full‑stack, aprendendo novas
          tecnologias e criando projetos que refletem minha evolução como dev.
          Aqui você encontra um pouco do meu processo, minhas habilidades e tudo
          o que venho construindo nessa caminhada.
        </p>

        <Link
          to="/projects"
          className="mt-8 inline-block border-2 border-neonPurple text-neonPurple px-6 py-3 rounded hover:bg-neonPurple hover:text-white hover:scale-110 hover:shadow-[0_0_15px_#A855F7] transition-all duration-300 ease-out font-audiowide text-sm md:text-base"
        >
          VIEW MY PROJECTS
        </Link>
      </div>

      {/* DIREITA */}
      <div className="relative w-[400px] h-[400px] z-10">
        <div
          className={`absolute top-0 right-6 z-10 transition-all duration-700 ease-out ${
            showHead
              ? "translate-x-0 opacity-100 blur-0"
              : "translate-x-32 opacity-0 blur-md"
          }`}
        >
          <img
            src={HeadIcon}
            alt="Cabeça Tech"
            className="max-w-[800px] h-auto drop-shadow-[0_0_20px_#A855F7] animate-float"
            style={{ backgroundColor: "transparent" }}
          />
        </div>
      </div>
    </section>
  );
}
