import DevLabLogo from "@/assets/name_dev_crop.png";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

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
        <img src={DevLabLogo} alt="DEV LAB" className="w-32" />

        {/* MENU */}
        <ul className="flex items-center gap-8 text-white font-audiowide text-sm">
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
        </ul>
      </div>
    </nav>
  );
}
