import DevLabLogo from "@/assets/name_dev_crop.png";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // ícones hamburguer

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sections = [
      "home",
      "featured",
      "technologies",
      "softskills",
      "hardskills",
      "about",
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
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-sm z-50">
      <div className="w-full px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <img src={DevLabLogo} alt="DEV LAB" className="w-28 sm:w-32" />

        {/* BOTÃO MOBILE */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex items-center gap-8 text-white font-audiowide text-sm">
          <li>
            <a
              href="#"
              className={`${
                active === "home"
                  ? "nav-active text-neonPurple"
                  : "hover:text-neonPurple"
              } transition`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#featured"
              className={`${
                active === "featured"
                  ? "nav-active text-neonCyan"
                  : "hover:text-neonCyan"
              } transition`}
            >
              Top Projects
            </a>
          </li>
          <li>
            <a
              href="/projects"
              className={`${
                active === "technologies"
                  ? "nav-active text-neonGold"
                  : "hover:text-neonGold"
              } transition`}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#technologies"
              className={`${
                active === "technologies"
                  ? "nav-active text-neonPurple"
                  : "hover:text-neonPurple"
              } transition`}
            >
              Technologies
            </a>
          </li>
          <li>
            <a
              href="#softskills"
              className={`${
                active === "softskills"
                  ? "nav-active text-neonBlue"
                  : "hover:text-neonBlue"
              } transition`}
            >
              Soft-Skills
            </a>
          </li>
          <li>
            <a
              href="#hardskills"
              className={`${
                active === "hardskills"
                  ? "nav-active text-neonYellow"
                  : "hover:text-neonYellow"
              } transition`}
            >
              Hard-Skills
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`${
                active === "about"
                  ? "nav-active text-neonOrange"
                  : "hover:text-neonOrange"
              } transition`}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`${
                active === "about"
                  ? "nav-active text-neonPurple"
                  : "hover:text-neonPurple"
              } transition`}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/raycka-messa-de-castro-408264327"
              target="_blank"
              className="text-xl hover:text-neonBlue transition"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Rayck4dev/"
              target="_blank"
              className="text-xl hover:text-neonPurple transition"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/raycka_dev"
              target="_blank"
              className="text-xl hover:text-neonPink transition"
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>

      {/* MENU MOBILE */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-6 py-6 bg-black/90 text-white font-audiowide text-sm">
          <li><a href="#" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#featured" onClick={() => setIsOpen(false)}>Top Projects</a></li>
          <li><a href="/projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#technologies" onClick={() => setIsOpen(false)}>Technologies</a></li>
          <li><a href="#softskills" onClick={() => setIsOpen(false)}>Soft-Skills</a></li>
          <li><a href="#hardskills" onClick={() => setIsOpen(false)}>Hard-Skills</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About Me</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          <li className="flex gap-4 text-xl">
            <a href="https://www.linkedin.com/in/raycka-messa-de-castro-408264327" target="_blank"><FaLinkedin /></a>
            <a href="https://github.com/Rayck4dev/" target="_blank"><FaGithub /></a>
            <a href="https://www.instagram.com/raycka_dev" target="_blank"><FaInstagram/></a>
          </li>
        </ul>
      )}
    </nav>
  );
}
