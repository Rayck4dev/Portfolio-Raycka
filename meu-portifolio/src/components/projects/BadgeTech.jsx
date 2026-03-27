import {
  FaReact,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaMobileAlt,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiSupabase,
  SiJavascript,
  SiPhp,
  SiMysql,
  SiPandas,
  SiPlotly,
  SiStreamlit,
  SiTypescript,
  SiCodeigniter,
  SiMediapipe,
} from "react-icons/si";

import { TbApi, TbBrandReactNative, TbBrandNextjs } from "react-icons/tb";

export default function BadgeTech({ tech }) {
  const iconMap = {
    React: <FaReact />,
    "React Native": <TbBrandReactNative />,
    HTML5: <FaHtml5 />,
    CSS3: <FaCss3Alt />,
    Python: <FaPython />,
    TailwindCSS: <SiTailwindcss />,
    JavaScript: <SiJavascript />,
    TypeScript: <SiTypescript />,
    Supabase: <SiSupabase />,
    MySql: <SiMysql />,
    Java: <FaJava />,
    Php: <SiPhp />,
    Pandas: <SiPandas />,
    Plotly: <SiPlotly />,
    Streamlit: <SiStreamlit />,
    "API REST": <TbApi />,
    Codeigniter: <SiCodeigniter />,
    Mobile: <FaMobileAlt />,
    Nextjs: <TbBrandNextjs />,
    Mediapipe: <SiMediapipe />,
  };

  const colorMap = {
    React: "text-neonCyan border-neonCyan",
    HTML5: "text-neonRed border-neonRed",
    CSS3: "text-neonBlue border-neonBlue",
    Python: "text-neonYellow border-neonBlue",
    TailwindCSS: "text-neonTeal border-neonTeal",
    JavaScript: "text-neonYellow border-neonYellow",
    TypeScript: "text-neonBlue border-neonBlue",
    Supabase: "text-neonGreen border-neonGreen",
    MySql: "text-neonLime border-neonGreen",
    Java: "text-neonRed border-neonRed",
    Php: "text-neonMagenta border-neonMagenta",
    Streamlit: "text-neonRed border-neonRed",
    Plotly: "text-neonGreen border-neonGreen",
    Pandas: "text-neonGreen border-neonGreen",
    Codeigniter: "text-neonRed border-neonRed",
    "API REST": "text-neonOrange border-neonOrange",
    "React Native": "text-neonBlue border-neonBlue",
    Mobile: "text-neonGold border-neonGold",
    Nextjs: "text-neonOrange border-neonOrange",
    Mediapipe: "text-neonPink border-neonPink",

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
