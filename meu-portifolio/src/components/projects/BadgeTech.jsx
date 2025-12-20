import { FaReact, FaJava, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss, SiSupabase, SiJavascript, SiCanva, SiPhp, SiMysql } from "react-icons/si";
import { TbApi } from "react-icons/tb";

export default function BadgeTech({ tech }) {
  const iconMap = {
    React: <FaReact />,
    HTML5: <FaHtml5 />,
    CSS3: <FaCss3Alt />,
    TailwindCSS: <SiTailwindcss />,
    Canva : <SiCanva />,
    JavaScript: <SiJavascript />,
    Supabase: <SiSupabase />,
    MySql : <SiMysql />,
    Java: <FaJava />,
    Php : <SiPhp />,
    "API REST": <TbApi />,
  };

  const colorMap = {
    React: "text-neonCyan border-neonCyan",
    HTML5: "text-neonRed border-neonRed",
    CSS3: "text-neonBlue border-neonBlue",
    TailwindCSS: "text-neonBlue border-neonBlue",
    Canva: "text-neonPurple border-neonPurple",
    JavaScript: "text-neonYellow border-neonYellow",
    Supabase: "text-neonGreen border-neonGreen",
    MySql: "text-neonLime border-neonGreen",
    Java: "text-neonRed border-neonRed",
    Php : "text-neonMagenta border-neonMagenta",
    "API REST": "text-neonOrange border-neonOrange",
    Default: "text-white border-white",
  };

  const icon = iconMap[tech] || null;
  const classes = colorMap[tech] || colorMap.Default;

  return (
    <span
      className={`flex items-center gap-1 px-2 py-1 text-xs font-bold bg-black/60 rounded border ${classes} shadow-[0_0_10px_var(--tw-shadow-color)]`}
      style={{ "--tw-shadow-color": "var(--neonCyan)" }}
    >
      {icon} {tech}
    </span>
  );
}
