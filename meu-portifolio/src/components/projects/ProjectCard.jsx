import PixelButton from "@/components/ui/PixelButton";
import BadgeTech from "./BadgeTech";

export default function ProjectCard({ project }) {
  const { title, desc, color, soon, link, code, image, techs } = project;

  return (
    <div
      className="relative hover:scale-[1.03] hover:shadow-[0_0_30px_var(--tw-shadow-color)] transition-transform duration-300 rounded-xl p-4 bg-black/40 border-2"
      style={{
        "--tw-shadow-color": `var(--${color} || var(--neonCyan))`,
        borderColor: `var(--${color} || var(--neonCyan))`,
      }}
    >
      {image && (
        <div
          className="w-full max-h-[520px] overflow-hidden rounded-md mb-4 border border-neonCyan shadow-[0_0_15px_var(--tw-shadow-color)]"
          style={{ "--tw-shadow-color": "var(--neonCyan)" }}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>
      )}

      <h3 className="text-xl font-audiowide mb-2 text-neonCyan">{title}</h3>

      <p className="text-white/70 text-sm font-bricolage mb-3 line-clamp-3">
        {desc}
      </p>
      {techs && (
        <div className="flex flex-wrap gap-2 mb-4">
          {techs.map((t) => (
            <BadgeTech key={t} tech={t} />
          ))}
        </div>
      )}

      <div className="flex gap-4">
        {link && (
          <a href={link} target="_blank" rel="noreferrer">
            <PixelButton color={color}>Ver Projeto</PixelButton>
          </a>
        )}
        {code && (
          <a href={code} target="_blank" rel="noreferrer">
            <PixelButton color={color}>Ver Código</PixelButton>
          </a>
        )}
        {soon && <PixelButton color={color}>🚀 Em breve</PixelButton>}
      </div>
    </div>
  );
}
