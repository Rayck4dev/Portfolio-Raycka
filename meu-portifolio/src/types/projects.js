import IconDelicias from "@/assets/faviconDelicias.png.png";
import IconPetClini from "@/assets/petclinifavic.png";
import IconDash from "@/assets/cinemaplay.png";

export const projects = [
  {
    title: "Delícias no Pote 2.0",
    desc: "Sistema de catálogo digital com painel administrativo e CRUD completo, permitindo gestão de produtos em tempo real",
    color: "neonPink",
    link: "https://deliciasnopoterm.netlify.app",
    icon: IconDelicias,
  },
  {
    title: "Dashboard de Filmes",
    desc: "Dashboard criado para aprendizado durante a Imersão Alura, com dados reais da API TMDb.",
    link: "https://dashboard-filmes.streamlit.app",
    color: "neonRed",
    icon: IconDash,
  },
  {
    title: "Pet Clini",
    desc: "Landing Page estática para pet shop, desenvolvida apenas com foco em design responsivo e experiência do usuário",
    color: "neonGreen",
    link: "https://github.com/Rayck4dev/Landing-Pages/tree/PetClini",
    icon: IconPetClini,
  },
  {
    title: "Corte Fino",
    desc: "Landing Page estática para Barbearia, desenvolvida apenas com foco em design responsivo e experiência do usuário",
    color: "neonYellow",
    soon: true,
  },
];
