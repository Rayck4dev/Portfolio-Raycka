import {
  FaCode,
  FaServer,
  FaDatabase,
  FaCubes,
  FaCloudUploadAlt,
  FaTools,
} from "react-icons/fa";

export default function HardSkills() {
  return (
    <section
      id="hardskills"
      className="min-h-screen relative flex flex-col items-center px-6 py-24 overflow-hidden bg-black"
    >
      <div className="absolute right-0 top-0 w-[300px] h-full bg-neonYellow/20 blur-[150px] pointer-events-none"></div>

      <div className="absolute inset-0 bg-gradient-to-b from-neonYellow/10 via-black to-black pointer-events-none"></div>

      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(transparent_95%,rgba(255,255,255,0.1)_100%)] bg-[length:100%_4px] pointer-events-none"></div>

      <Particles />

      <h2 className="relative z-10 text-5xl font-audiowide text-neonYellow mb-10 drop-shadow-[0_0_15px_#FFFF33] animate-fadeUp">
        Hard Skills
      </h2>

      <p className="relative z-10 text-white font-orbitron font-bold text-center mb-12 animate-fadeUp">
        {" "}
        Competências técnicas que aplico para construir aplicações modernas,
        eficientes e bem estruturadas.
      </p>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full max-w-5xl">
        <SkillCard
          icon={<FaCode />}
          title="Desenvolvimento Front-End"
          desc="Criação de interfaces modernas, responsivas e acessíveis."
        />

        <SkillCard
          icon={<FaServer />}
          title="Desenvolvimento Back-End"
          desc="APIs REST, lógica de negócio e integrações."
        />

        <SkillCard
          icon={<FaDatabase />}
          title="Banco de Dados"
          desc="Modelagem, consultas SQL e integração com aplicações."
        />

        <SkillCard
          icon={<FaCubes />}
          title="Arquitetura de Componentes"
          desc="Organização, reuso e escalabilidade no front-end."
        />

        <SkillCard
          icon={<FaCloudUploadAlt />}
          title="Deploy & Hospedagem"
          desc="Publicação de aplicações em produção (Vercel, Render, etc.)."
        />

        <SkillCard
          icon={<FaTools />}
          title="Boas Práticas"
          desc="Versionamento, clean code e otimização de performance."
        />
      </div>
    </section>
  );
}

function SkillCard({ icon, title, desc }) {
  return (
    <div
      className="
        group bg-black/30 backdrop-blur-md border border-neonYellow/40 rounded-xl p-8 text-center text-white
        hover:border-neonYellow hover:shadow-[0_0_25px_#FFFF33]
        transition-all duration-300 cursor-pointer
        hover:-translate-y-2 hover:rotate-1
        animate-fadeUp
      "
    >
      <div className="text-4xl mb-4 text-neonYellow drop-shadow-[0_0_10px_#FFFF33] group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      <h3 className="text-xl font-orbitron mb-2 drop-shadow-[0_0_10px_#FFFF33]">
        {title}
      </h3>

      <p className="text-techGray text-sm">{desc}</p>
    </div>
  );
}

function Particles() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute w-2 h-2 bg-neonYellow/40 rounded-full blur-sm top-10 left-1/4 animate-ping"></div>
      <div className="absolute w-1 h-1 bg-neonYellow/30 rounded-full blur-sm top-1/3 left-2/3 animate-pulse"></div>
      <div className="absolute w-3 h-3 bg-neonYellow/20 rounded-full blur-md top-2/3 left-1/5 animate-ping"></div>
      <div className="absolute w-2 h-2 bg-neonYellow/30 rounded-full blur-sm top-1/2 left-1/2 animate-pulse"></div>
    </div>
  );
}
