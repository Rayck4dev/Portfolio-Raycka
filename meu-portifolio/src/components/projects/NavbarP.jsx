import DevLabLogo from "@/assets/name_dev_crop.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function NavbarProjects() {
  const [active, setActive] = useState("recentes");

  useEffect(() => {
    const sections = [
      "home",
      "recentes",
      "desenvolvimento",
      "ecommerce",
      "landing",
      "academicos",
      "sistemas",
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

        <img src={DevLabLogo} alt="DEV LAB" className="w-32" />

        <ul className="flex items-center gap-8 text-white font-audiowide text-sm">
          <li>
            <a
              href="/"
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
              href="#recentes"
              className={`${
                active === "recentes"
                  ? "nav-active text-neonCyan"
                  : "hover:text-neonCyan"
              } transition`}
            >
              Recent
            </a>
          </li>

          <li>
            <a
              href="#desenvolvimento"
              className={`${
                active === "desenvolvimento"
                  ? "nav-active text-neonRed"
                  : "hover:text-neonRed"
              } transition`}
            >
              Coming Soon
            </a>
          </li>

          <li>
            <a
              href="#ecommerce"
              className={`${
                active === "ecommerce"
                  ? "nav-active text-neonBlue"
                  : "hover:text-neonBlue"
              } transition`}
            >
              E-commerce
            </a>
          </li>

          <li>
            <a
              href="#landing"
              className={`${
                active === "landing"
                  ? "nav-active text-neonGold"
                  : "hover:text-neonGold"
              } transition`}
            >
              Landing Pages
            </a>
          </li>

          <li>
            <a
              href="#academicos"
              className={`${
                active === "academicos"
                  ? "nav-active text-neonOrange"
                  : "hover:text-neonOrange"
              } transition`}
            >
              Academic
            </a>
          </li>

          <li>
            <a
              href="#sistemas"
              className={`${
                active === "completos"
                  ? "nav-active text-neonGreen"
                  : "hover:text-neonGreen"
              } transition`}
            >
              Systems
            </a>
          </li>
          
          <li>
            <a
              href="#completos"
              className={`${
                active === "completos"
                  ? "nav-active text-neonPink"
                  : "hover:text-neonPink"
              } transition`}
            >
              Complete Projects
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
