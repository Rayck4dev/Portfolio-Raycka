import {
  FaComments,
  FaPuzzlePiece,
  FaUsers,
  FaSync,
  FaBolt,
  FaClipboardList,
} from "react-icons/fa";

export default function SoftSkills() {
  return (
    <section
      id="softskills"
      className="min-h-screen relative flex flex-col items-center px-6 py-24 overflow-hidden bg-black"
    >
      <div className="absolute left-0 top-0 w-[300px] h-full bg-neonBlue/20 blur-[150px] pointer-events-none"></div>

      <div className="absolute inset-0 bg-gradient-to-b from-neonBlue/10 via-black to-black pointer-events-none"></div>

      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(transparent_95%,rgba(255,255,255,0.1)_100%)] bg-[length:100%_4px] pointer-events-none"></div>

      <Particles />

      <h2 className="relative z-10 text-5xl font-audiowide text-neonBlue mb-10 drop-shadow-[0_0_15px_#00C2FF] animate-fadeUp">
        Soft Skills
      </h2>

      <p className="text-white/70 text-center max-w-2xl font-bricolage text-base mb-12 px-4">
        Competências comportamentais que fortalecem minha atuação como
        desenvolvedora e potencializam cada projeto
      </p>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full max-w-5xl">
        <SkillCard icon={<FaComments />} name="Comunicação" />
        <SkillCard icon={<FaClipboardList />} name="Organização" />
        <SkillCard icon={<FaPuzzlePiece />} name="Resolução de Problemas" />
        <SkillCard icon={<FaUsers />} name="Trabalho em Equipe" />
        <SkillCard icon={<FaSync />} name="Adaptabilidade" />
        <SkillCard icon={<FaBolt />} name="Proatividade" />
      </div>
    </section>
  );
}

function SkillCard({ icon, name }) {
  return (
    <div
      className="
        group bg-black/30 backdrop-blur-md border border-neonBlue/40 rounded-xl p-8 text-center text-white font-medium
        hover:border-neonBlue hover:shadow-[0_0_25px_#00C2FF]
        transition-all duration-300 cursor-pointer
        hover:-translate-y-2 hover:rotate-1
        animate-fadeUp
      "
    >
      <div className="text-4xl mb-4 text-neonBlue drop-shadow-[0_0_10px_#00C2FF] group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      <span className="text-xl font-orbitron drop-shadow-[0_0_10px_#00C2FF]">
        {name}
      </span>
    </div>
  );
}

function Particles() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute w-2 h-2 bg-neonBlue/40 rounded-full blur-sm top-10 left-1/4 animate-ping"></div>
      <div className="absolute w-1 h-1 bg-neonBlue/30 rounded-full blur-sm top-1/3 left-2/3 animate-pulse"></div>
      <div className="absolute w-3 h-3 bg-neonBlue/20 rounded-full blur-md top-2/3 left-1/5 animate-ping"></div>
      <div className="absolute w-2 h-2 bg-neonBlue/30 rounded-full blur-sm top-1/2 left-1/2 animate-pulse"></div>
    </div>
  );
}
