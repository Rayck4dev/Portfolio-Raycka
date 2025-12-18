import HeadIcon from "@/assets/headlog_dev.png";
import Headphones from "@/assets/purplephone_dev.png";

import { useState, useEffect } from "react";

export default function HeroSection() {
  const [showHead, setShowHead] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowHead(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-[#010102] text-white min-h-screen flex flex-row items-center justify-between px-8 md:px-20 overflow-hidden">
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

        <div className="flex items-center gap-3">
          <h2 className="text-6xl mt-4 text-white font-bold font-audiowide">
            I'M A <br />
            FULLSTACK DEVELOPER
          </h2>
        </div>

        <p className="mt-6 max-w-xl text-white text-base font-orbitron font-semibold leading-relaxed">
          Atualmente mergulhada no universo full‑stack, aprendendo novas
          tecnologias e criando projetos que refletem minha evolução como dev.
          Aqui você encontra um pouco do meu processo, minhas habilidades e tudo
          o que venho construindo nessa caminhada.
        </p>

        <button
          className="mt-8 relative border-2 border-neonPurple text-neonPurple px-6 py-3 rounded 
      hover:bg-neonPurple hover:text-white
      hover:scale-110 hover:shadow-[0_0_15px_#A855F7] 
      transition-all duration-300 ease-out font-audiowide text-sm md:text-base"
        >
          VIEW MY PROJECTS
        </button>
      </div>

      {/* DIREITA */}
      <div className="relative w-[400px] h-[400px] z-10">
        <img
          src={HeadIcon}
          alt="Cabeça Tech"
          className={`absolute top-0 right-6 max-w-[800px] h-auto z-10 transition-all duration-700 ease-out 
        ${
          showHead
            ? "translate-x-0 opacity-100 blur-0 drop-shadow-[0_0_20px_#A855F7]"
            : "translate-x-32 opacity-0 blur-md drop-shadow-[0_0_40px_#A855F7]"
        }`}
          style={{ backgroundColor: "transparent" }}
        />
      </div>
    </section>
  );
}
