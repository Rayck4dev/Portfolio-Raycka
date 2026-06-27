import DevLabLogo from "@/assets/name_dev_crop.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

// Mapeamento estático mantido para o Tailwind compilar as cores perfeitamente
const neonColors = {
  neonPurple: { active: "text-neonPurple", hover: "hover:text-neonPurple" },
  neonCyan: { active: "text-neonCyan", hover: "hover:text-neonCyan" },
  neonRed: { active: "text-neonRed", hover: "hover:text-neonRed" },
  neonGold: { active: "text-neonGold", hover: "hover:text-neonGold" },
  neonOrange: { active: "text-neonOrange", hover: "hover:text-neonOrange" },
  neonGreen: { active: "text-neonGreen", hover: "hover:text-neonGreen" },
  neonBlue: { active: "text-neonBlue", hover: "hover:text-neonBlue" },
  neonPink: { active: "text-neonPink", hover: "hover:text-neonPink" },
};

export default function NavbarProjects() {
  const [active, setActive] = useState("recentes");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sections = [
      "home",
      "recentes",
      "desenvolvimento",
      "ecommerce",
      "landing",
      "freelance",
      "academicos",
      "outros",
    ];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let sec of sections) {
        const el = document.getElementById(sec);
        if (
          el &&
          scrollPos >= el.offsetTop &&
          scrollPos < el.offsetTop + el.offsetHeight
        ) {
          setActive(sec);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black backdrop-blur-sm z-50">
      <div className="w-full px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <img src={DevLabLogo} alt="DEV LAB" className="w-28 sm:w-32" />

        {/* BOTÃO MOBILE */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex items-center gap-8 text-white font-audiowide text-sm">
          <NavItem
            href="/"
            label="Home"
            active={active === "home"}
            color="neonPurple"
          />
          <NavItem
            href="#recentes"
            label="Recent"
            active={active === "recentes"}
            color="neonBlue"
          />
          <NavItem
            href="#desenvolvimento"
            label="Coming Soon"
            active={active === "desenvolvimento"}
            color="neonRed"
          />
          <NavItem
            href="#freelance"
            label="freelance"
            active={active === "freelance"}
            color="neonGreen"
          />
          <NavItem
            href="#landing"
            label="Landing Pages"
            active={active === "landing"}
            color="neonGold"
          />
          <NavItem
            href="#academicos"
            label="Academic"
            active={active === "academicos"}
            color="neonOrange"
          />
          <NavItem
            href="#outros"
            label="Other Projects"
            active={active === "outros"}
            color="neonRed"
          />

          <li>
            <a
              href="https://www.linkedin.com/in/raycka-messa-de-castro-408264327"
              target="_blank"
              aria-label="LinkedIn"
              className="text-xl hover:text-neonBlue transition duration-300"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Rayck4dev/"
              target="_blank"
              aria-label="GitHub"
              className="text-xl hover:text-neonPurple transition duration-300"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/castroo.ray"
              target="_blank"
              aria-label="Instagram"
              className="text-xl hover:text-neonPink transition duration-300"
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>

      {/* MENU MOBILE */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-6 py-6 bg-black/95 text-white font-audiowide text-sm">
          <NavItem
            href="/"
            label="Home"
            active={active === "home"}
            color="neonPurple"
            onClick={() => setIsOpen(false)}
          />
          <NavItem
            href="#recentes"
            label="Recent"
            active={active === "recentes"}
            color="neonBlue"
            onClick={() => setIsOpen(false)}
          />
          <NavItem
            href="#desenvolvimento"
            label="Coming Soon"
            active={active === "desenvolvimento"}
            color="neonRed"
            onClick={() => setIsOpen(false)}
          />
          <NavItem
            href="#freelance"
            label="freelance"
            active={active === "freelance"}
            color="neonGreen"
            onClick={() => setIsOpen(false)}
          />
          <NavItem
            href="#landing"
            label="Landing Pages"
            active={active === "landing"}
            color="neonGold"
            onClick={() => setIsOpen(false)}
          />
          <NavItem
            href="#academicos"
            label="Academic"
            active={active === "academicos"}
            color="neonOrange"
            onClick={() => setIsOpen(false)}
          />
          <NavItem
            href="#outros"
            label="Other Projects"
            active={active === "outros"}
            color="neonRed"
            onClick={() => setIsOpen(false)}
          />

          <div className="flex gap-6 mt-4 text-xl">
            <a
              href="https://www.linkedin.com/in/raycka-messa-de-castro-408264327"
              target="_blank"
              className="hover:text-neonBlue transition duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Rayck4dev/"
              target="_blank"
              className="hover:text-neonPurple transition duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/castroo.ray"
              target="_blank"
              className="hover:text-neonPink transition duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </ul>
      )}
    </nav>
  );
}

// Subcomponente NavItem ajustado para usar base branca por padrão
function NavItem({ href, label, active, color, onClick }) {
  const neonStyle = neonColors[color] || { active: "text-white", hover: "hover:text-white" };

  return (
    <li>
      <a
        href={href}
        onClick={onClick}
        className={`transition duration-300 ${
          active 
            ? `nav-active ${neonStyle.active}` 
            : `text-white ${neonStyle.hover}`
        }`}
      >
        {label}
      </a>
    </li>
  );
}