import SectionTitle from "@/components/ui/SectionTitle";
import PixelButton from "@/components/ui/PixelButton";

export default function FeaturedProjects() {
  const projects = [
    {
      title: "Landing Page Pixel",
      desc: "Interface minimalista com estética retrô.",
    },
    { title: "Dashboard React", desc: "Dashboard moderno com Tailwind." },
    { title: "Portfólio V1", desc: "Primeira versão do meu portfólio." },
  ];

  return (
    <section className="py-16">
      <SectionTitle>Projetos em Destaque</SectionTitle>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {projects.map((p) => (
          <div
            key={p.title}
            className="border-2 border-black p-6 bg-white shadow-[4px_4px_0px_0px_#000]"
          >
            <h3 className="text-xl font-bold mb-2">{p.title}</h3>
            <p className="text-gray-600 mb-4">{p.desc}</p>
            <PixelButton>Ver mais</PixelButton>
          </div>
        ))}
      </div>
    </section>
  );
}
