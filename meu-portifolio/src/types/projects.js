import IconDelicias from "@/assets/faviconDelicias.png.png";
import IconPortfolio from "@/assets/favicon_RC.ico";
import IconEventix from "@/assets/favicon-eventix.ico";

export const projects = [
  {
    title: "Delícias no Pote 2.0",
    desc: "Sistema de catálogo digital com painel administrativo e CRUD completo, permitindo gestão de produtos em tempo real",
    color: "neonPink",
    link: "https://deliciasnopoterm.netlify.app",
    icon: IconDelicias,
  },
  {
    title: "Portfólio Dev",
    desc: "Site pessoal interativo para apresentar meus projetos e evolução como desenvolvedor, com design futurista e animações dinâmicas",
    link: "",
    color: "neonPurple",
    icon: IconPortfolio,
  },
  {
    title: "Eventix",
    desc: "Plataforma acadêmica inspirada no Sympla, com 2 versões desencolvida para as matérias de DAPI e FRONTEND-FRAMEWORKS",
    color: "neonOrange",
    link: "https://github.com/Rayck4dev/Projeto_Eventix",
    icon: IconEventix,
    academic: true,
    category: "Acadêmico",
  },
  {
    title: "Pet Clini",
    desc: "Landing Page estática para pet shop, desenvolvida apenas com foco em design responsivo e experiência do usuário",
    soon: true,
    color: "neonGreen",
    soon: true,
    category: "Landing Page",
  },
  {
    title: "Elite Vougue Store",
    desc: "Versão totalmente em código de um e-commerce que antes era feito em WordPress. Agora com backend próprio, APIs REST e frontend em React para maior performance e escalabilidade",
    color: "neonBlue",
    soon: true,
    academic: false,
    category: "E-commerce",
  },
];
