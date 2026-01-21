import PixelButton from "@/components/ui/PixelButton";
import { projects } from "@/types/projects.js";
import { FaTools } from "react-icons/fa";

export default function FeaturedProjects() {
  return (
    <section
      id="featured"
      className="py-20 bg-black relative overflow-hidden flex flex-col items-center"
    >
      <div className="absolute left-0 top-0 w-[300px] h-full bg-neonCyan/20 blur-[150px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-neonCyan/10 via-black to-black pointer-events-none"></div>
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(transparent_95%,rgba(255,255,255,0.1)_100%)] bg-[length:100%_4px] pointer-events-none"></div>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-audiowide text-neonCyan mb-8 sm:mb-14 drop-shadow-[0_0_15px_#40E0D0] text-center">
        Top Projects
      </h2>

      <p className="text-white/70 text-center max-w-2xl font-bricolage text-sm sm:text-base mb-8 sm:mb-12 px-4">
        Aqui estão alguns dos meus projetos favoritos — cada um com sua
        identidade visual, propósito e desafios únicos. Explore e veja como
        aplico design, código e criatividade em cada entrega.
      </p>

      <Particles />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4 w-full max-w-6xl">
        {projects.map((p) => (
          <div
            key={p.title}
            className={`
              flex flex-col items-center justify-center gap-4 text-center
              rounded-xl border border-${p.color}/40 bg-black/40 backdrop-blur-md
              hover:shadow-[0_0_25px_var(--tw-shadow-color)]
              hover:border-${p.color}
              cursor-pointer p-6
            `}
            style={{
              "--tw-shadow-color": `var(--${p.color})`,
            }}
          >
            {p.title === "Academico" && (
              <span
                className="text-xs font-bold text-neonOrange bg-black/60 px-2 py-1 rounded shadow-[0_0_8px_var(--tw-shadow-color)]"
                style={{ "--tw-shadow-color": "var(--neonOrange)" }}
              >
                🎓 Trabalho Acadêmico
              </span>
            )}

            {p.category && (
              <span
                className="text-xs font-bold bg-black/60 px-2 py-1 rounded shadow-[0_0_8px_var(--tw-shadow-color)] mb-2"
                style={{
                  "--tw-shadow-color": `var(--${p.color})`,
                  color: `var(--${p.color})`,
                }}
              >
                {p.category}
              </span>
            )}

            {p.soon ? (
              <FaTools className="text-3xl sm:text-4xl text-neonCyan drop-shadow-[0_0_12px_var(--tw-shadow-color)]" />
            ) : (
              <img
                src={p.icon}
                alt={`${p.title} icon`}
                className="w-12 h-12 sm:w-14 sm:h-14 drop-shadow-[0_0_12px_var(--tw-shadow-color)]"
              />
            )}

            <h3
              className={`text-lg sm:text-xl lg:text-2xl font-audiowide text-${p.color}`}
            >
              {p.title}
            </h3>

            <p className="text-white/80 text-center font-bricolage text-xs sm:text-sm">
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
        ))}
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
