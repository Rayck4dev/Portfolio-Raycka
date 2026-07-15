import DevLabLogo from "@/assets/name_dev_crop.png";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi"; 
import { useTranslation } from "react-i18next";
import LanguageToggle from "@/components/ui/LanguageToggle";

export default function Navbar() {
  const { t } = useTranslation();
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sections = [
      "home",
      "featured",
      "technologies",
      "softskills",
      "hardskills",
      "contact",
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
=        <img src={DevLabLogo} alt="DEV LAB" className="w-28 sm:w-32" />

        {/* BOTÃO MOBILE E TOGGLE DE IDIOMA */}
        <div className="flex items-center gap-4 md:hidden">
          <LanguageToggle />
          <button
            className="text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex items-center gap-7 text-white font-audiowide text-sm">
          <li>
            <a
              href="#"
              className={`${
                active === "home"
                  ? "nav-active text-neonPurple"
                  : "hover:text-neonPurple"
              } transition`}
            >
              {t('nav.home')}
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
              {t('nav.topProjects')}
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
              {t('nav.technologies')}
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
              {t('nav.softSkills')}
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
              {t('nav.hardSkills')}
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`${
                active === "contact"
                  ? "nav-active text-neonPurple"
                  : "hover:text-neonPurple"
              } transition`}
            >
              {t('nav.contact')}
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
              {t('nav.about')}
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
              href="https://www.instagram.com/castroo.ray"
              target="_blank"
              className="text-xl hover:text-neonPink transition"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <LanguageToggle />
          </li>
        </ul>
      </div>

      {/* MENU MOBILE */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-6 py-6 bg-black/90 text-white font-audiowide text-sm">
          <li><a href="#" onClick={() => setIsOpen(false)}>{t('nav.home')}</a></li>
          <li><a href="#featured" onClick={() => setIsOpen(false)}>{t('nav.topProjects')}</a></li>
          <li><a href="#technologies" onClick={() => setIsOpen(false)}>{t('nav.technologies')}</a></li>
          <li><a href="#softskills" onClick={() => setIsOpen(false)}>{t('nav.softSkills')}</a></li>
          <li><a href="#hardskills" onClick={() => setIsOpen(false)}>{t('nav.hardSkills')}</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>{t('nav.contact')}</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>{t('nav.about')}</a></li>
          <li className="flex gap-4 text-xl">
            <a href="https://www.linkedin.com/in/raycka-messa-de-castro-408264327" target="_blank"><FaLinkedin /></a>
            <a href="https://github.com/Rayck4dev/" target="_blank"><FaGithub /></a>
            <a href="https://www.instagram.com/castroo.ray" target="_blank"><FaInstagram/></a>
          </li>
        </ul>
      )}
    </nav>
  );
}
