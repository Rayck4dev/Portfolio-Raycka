import DevLabLogo from "@/assets/name_dev_crop.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

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
      "academicos",
      "completos",
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
            color="neonCyan"
          />
          <NavItem
            href="#desenvolvimento"
            label="Coming Soon"
            active={active === "desenvolvimento"}
            color="neonRed"
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
            href="#completos"
            label="Complete Projects"
            active={active === "completos"}
            color="neonPink"
          />

          <li>
            <a
              href="https://www.linkedin.com/in/raycka-messa-de-castro-408264327"
              target="_blank"
              aria-label="LinkedIn"
              className="text-xl hover:text-neonBlue transition"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Rayck4dev/"
              target="_blank"
              aria-label="GitHub"
              className="text-xl hover:text-neonPurple transition"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/raycka_dev"
              target="_blank"
              aria-label="Instagram"
              className="text-xl hover:text-neonPink transition"
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>

      {/* MENU MOBILE SEPARADO */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-6 py-6 bg-black/90 text-white font-audiowide text-sm animate-slideDown">
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
            color="neonCyan"
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
            href="#ecommerce"
            label="E-commerce"
            active={active === "ecommerce"}
            color="neonBlue"
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
            href="#completos"
            label="Complete Projects"
            active={active === "completos"}
            color="neonPink"
            onClick={() => setIsOpen(false)}
          />

          <div className="flex gap-6 mt-4 text-xl">
            <a
              href="https://www.linkedin.com/in/raycka-messa-de-castro-408264327"
              target="_blank"
              aria-label="LinkedIn"
              className="hover:text-neonBlue transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Rayck4dev/"
              target="_blank"
              aria-label="GitHub"
              className="hover:text-neonPurple transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/raycka_dev"
              target="_blank"
              aria-label="Instagram"
              className="hover:text-neonPink transition"
            >
              <FaInstagram />
            </a>
          </div>
        </ul>
      )}
    </nav>
  );
}

function NavItem({ href, label, active, color, onClick }) {
  return (
    <li>
      <a
        href={href}
        onClick={onClick}
        className={`${
          active ? `nav-active text-${color}` : `hover:text-${color}`
        } transition`}
      >
        {label}
      </a>
    </li>
  );
}
