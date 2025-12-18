import { TbApi } from "react-icons/tb";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPhp,
  FaJava,
  FaWordpress,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiJavascript,
  SiPostgresql,
  SiFigma,
  SiVite,
  SiMysql,
  SiSupabase,
} from "react-icons/si";

export default function TechStack() {
  return (
    <section
      id="technologies"
      className="min-h-screen flex flex-col items-center px-6 py-24 relative overflow-hidden bg-black"
    >
      <div className="absolute left-0 top-0 w-[120px] h-full bg-neonPurple/20 blur-[150px] pointer-events-none"></div>

      <div className="absolute inset-0 bg-gradient-to-b from-neonPurple/10 via-black to-black pointer-events-none"></div>

      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(transparent_95%,rgba(255,255,255,0.1)_100%)] bg-[length:100%_4px]"></div>

      <h2 className="relative z-10 text-5xl font-audiowide text-neonPurple mb-10 drop-shadow-[0_0_15px_#a855f7] animate-fadeUp">
        Technologies
      </h2>

      <p className="relative z-10 text-white font-orbitron font-bold text-center mb-14 animate-fadeUp">
        Tecnologias que estudo e aplico para construir interfaces modernas,
        sistemas eficientes e aplicações completas
      </p>

      <Particles />

      <div className="relative z-10 flex flex-col gap-20 w-full max-w-5xl">
        {/* FRONT-END */}
        <Category
          title="Front-End"
          color="neonPink"
          items={[
            { name: "HTML", icon: <FaHtml5 /> },
            { name: "CSS", icon: <FaCss3Alt /> },
            { name: "TailwindCSS", icon: <SiTailwindcss /> },
            { name: "React", icon: <FaReact /> },
            { name: "WordPress", icon: <FaWordpress /> },
          ]}
        />

        {/* BACK-END */}
        <Category
          title="Back-End"
          color="neonBlue"
          items={[
            { name: "Node.js", icon: <FaNodeJs /> },
            { name: "PHP", icon: <FaPhp /> },
            { name: "Java", icon: <FaJava /> },
            { name: "JavaScript", icon: <SiJavascript /> },
            { name: "API REST", icon: <TbApi /> },
          ]}
        />

        {/* DATABASES */}
        <Category
          title="Databases"
          color="neonGreen"
          items={[
            { name: "PostgreSQL", icon: <SiPostgresql /> },
            { name: "MySQL", icon: <SiMysql /> },
            { name: "Supabase", icon: <SiSupabase /> },
          ]}
        />

        {/* TOOLS */}

        <Category
          title="Tools & Others"
          color="neonRed"
          items={[
            { name: "Git / GitHub", icon: <FaGitAlt /> },
            { name: "Figma", icon: <SiFigma /> },
            { name: "Vite", icon: <SiVite /> },
          ]}
        />
      </div>
    </section>
  );
}

function Category({ title, color, items }) {
  return (
    <div className="animate-fadeUp">
      <h3
        className={`text-4xl font-audiowide text-${color} mb-6 text-center drop-shadow-[0_0_10px]`}
      >
        {title}
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((tech) => (
          <TechCard
            key={tech.name}
            icon={tech.icon}
            name={tech.name}
            color={color}
          />
        ))}
      </div>
    </div>
  );
}

function TechCard({ icon, name, color }) {
  return (
    <div
      className={`
        group bg-black/40 border border-${color}/40 rounded-xl p-6 text-center text-white font-medium
        hover:border-${color} hover:shadow-[0_0_20px_var(--tw-shadow-color)]
        transition-all duration-300 cursor-pointer
        hover:-translate-y-2 hover:rotate-1
      `}
      style={{ "--tw-shadow-color": "currentColor" }}
    >
      <div className={`text-4xl mb-3 text-${color} drop-shadow-[0_0_10px]`}>
        {icon}
      </div>
      <span className="text-lg font-orbitron">{name}</span>
    </div>
  );
}

function Particles() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute w-3 h-3 bg-neonPurple/40 rounded-full blur-sm top-10 left-1/4 animate-ping"></div>
      <div className="absolute w-1 h-2 bg-neonPurple/30 rounded-full blur-sm top-1/3 left-2/3 animate-pulse"></div>
      <div className="absolute w-4 h-3 bg-neonPurple/20 rounded-full blur-md top-2/3 left-1/5 animate-ping"></div>
      <div className="absolute w-2 h-2 bg-neonPurple/30 rounded-full blur-sm top-1/2 left-1/2 animate-pulse"></div>
    </div>
  );
}
