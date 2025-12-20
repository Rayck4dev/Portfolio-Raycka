import { useState, useEffect, useRef } from "react";
import PixelButton from "@/components/ui/PixelButton";
import { projects } from "../../Types/projects";

import { FaChevronLeft, FaChevronRight, FaTools } from "react-icons/fa";

export default function FeaturedProjects() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const next = () => setIndex((prev) => (prev + 1) % projects.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  const startAutoplay = () => {
    intervalRef.current = setInterval(next, 3000);
  };

  const stopAutoplay = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, []);

  return (
    <section
      id="featured"
      className="py-24 bg-black relative overflow-hidden flex flex-col items-center"
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      <div className="absolute left-0 top-0 w-[300px] h-full bg-neonCyan/20 blur-[150px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-neonCyan/10 via-black to-black pointer-events-none"></div>
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(transparent_95%,rgba(255,255,255,0.1)_100%)] bg-[length:100%_4px] pointer-events-none"></div>

      <h2 className="text-5xl font-audiowide text-neonCyan mb-14 drop-shadow-[0_0_15px_#40E0D0]">
        Top Projects
      </h2>

      <p className="text-white/70 text-center max-w-2xl font-bricolage text-base mb-12 px-4">
        Aqui estão alguns dos meus projetos favoritos — cada um com sua
        identidade visual, propósito e desafios únicos. Explore e veja como
        aplico design, código e criatividade em cada entrega.
      </p>

      <Particles />

      <div
        className="relative w-[480px] h-[280px] mx-auto mt-12"
        style={{ perspective: "950px" }}
      >
        <button
          onClick={prev}
          className={`
            absolute left-[-70%] top-1/2 -translate-y-1/2 z-30
            text-neonCyan text-3xl p-2 rounded-full
            hover:text-white hover:scale-110 transition
            drop-shadow-[0_0_10px_var(--tw-shadow-color)]
          `}
          style={{ "--tw-shadow-color": "var(--neonCyan)" }}
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={next}
          className={`
            absolute right-[-70%] top-1/2 -translate-y-1/2 z-30
            text-neonCyan text-3xl p-2 rounded-full
            hover:text-white hover:scale-110 transition
            drop-shadow-[0_0_10px_var(--tw-shadow-color)]
          `}
          style={{ "--tw-shadow-color": "var(--neonCyan)" }}
        >
          <FaChevronRight />
        </button>

        {projects.map((p, i) => {
          const angle = (360 / projects.length) * (i - index);
          const visible = i === index;

          return (
            <div
              key={p.title}
              className={`
                absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-2
                rounded-xl border border-${
                  p.color
                }/40 bg-black/40 backdrop-blur-md
                transition-transform duration-700
                ${visible ? "z-10 scale-100" : "z-0 scale-90 opacity-40"}
                hover:shadow-[0_0_25px_var(--tw-shadow-color)]
                hover:border-${p.color}
                cursor-pointer
              `}
              style={{
                "--tw-shadow-color": `var(--${p.color})`,
                transform: `
                  rotateY(${angle}deg)
                  translateZ(160px)
                `,
              }}
            >
              {p.title === "Eventix" && (
                <span
                  className="text-xs font-bold text-neonOrange bg-black/60 px-2 py-1 rounded shadow-[0_0_8px_var(--tw-shadow-color)] mb-1"
                  style={{ "--tw-shadow-color": "var(--neonOrange)" }}
                >
                  🎓 Trabalho Acadêmico
                </span>
              )}

              {p.category && (
                <span
                  className="absolute top-2 right-2 text-xs font-bold bg-black/60 px-2 py-1 rounded shadow-[0_0_8px_var(--tw-shadow-color)]"
                  style={{
                    "--tw-shadow-color": `var(--${p.color})`,
                    color: `var(--${p.color})`,
                  }}
                >
                  {p.category}
                </span>
              )}

              {p.soon ? (
                <FaTools className="text-4xl mb-4 text-neonCyan drop-shadow-[0_0_12px_var(--tw-shadow-color)]" />
              ) : (
                <img
                  src={p.icon}
                  alt={`${p.title} icon`}
                  className="w-14 h-14 mb-4 drop-shadow-[0_0_12px_var(--tw-shadow-color)]"
                />
              )}

              <h3 className={`text-2xl font-audiowide text-${p.color} mb-1`}>
                {p.title}
              </h3>
              <p className="text-white/80 text-center px-4 font-bricolage text-sm mb-2">
                {p.desc}
              </p>

              <a href={p.link} target="_blank">
                {p.soon ? (
                  <PixelButton
                    color={p.title === "Pet Clini" ? "neonPink" : p.color}
                  >
                    🚀 Em breve
                  </PixelButton>
                ) : p.academic ? (
                  <PixelButton color={p.color}>
                    🎓 Ver Trabalho Acadêmico
                  </PixelButton>
                ) : (
                  <PixelButton color={p.color}>Ver mais</PixelButton>
                )}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Particles() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute w-3 h-3 bg-neonGreen/40 rounded-full blur-sm top-10 left-1/4 animate-ping"></div>
      <div className="absolute w-1 h-2 bg-neonGreen/30 rounded-full blur-sm top-1/3 left-2/3 animate-pulse"></div>
      <div className="absolute w-4 h-3 bg-neonGreen/20 rounded-full blur-md top-2/3 left-1/5 animate-ping"></div>
      <div className="absolute w-2 h-2 bg-neonGreen/30 rounded-full blur-sm top-1/2 left-1/2 animate-pulse"></div>
    </div>
  );
}
