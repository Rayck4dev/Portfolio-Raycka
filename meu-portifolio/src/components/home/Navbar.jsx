import DevLabLogo from "@/assets/name_dev_crop.png";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black backdrop-blur-sm z-50">
      <div className="w-full px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <img src={DevLabLogo} alt="DEV LAB" className="w-32" />

        {/* MENU */}
        <ul className="flex items-center gap-8 text-white font-medium font-audiowide">
          <a href="#" className="hover:text-neonPurple transition">
            Home
          </a>
          <a href="/projects" className="hover:text-neonPurple transition">
            Projects
          </a>
          <a href="#technologies" className="hover:text-neonPurple transition">
            Technologies
          </a>
          <a href="#softskills" className="hover:text-neonBlue transition">
            Soft-Skills
          </a>

          <a href="#hardskills" className="hover:text-neonYellow transition">
            Hard-Skills
          </a>
          <a href="#about" className="hover:text-neonOrange transition">
            About Me
          </a>

          {/* ÍCONES */}
          <a
            href="https://www.instagram.com/_byrayckaa"
            target="_blank"
            className="text-xl hover:text-neonPink transition cursor-pointer"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.linkedin.com/in/raycka-messa-de-castro-408264327"
            target="_blank"
            className="text-xl hover:text-neonBlue transition cursor-pointer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/Rayck4dev/"
            target="_blank"
            className="text-xl hover:text-neonPurple transition cursor-pointer"
          >
            <FaGithub />
          </a>
        </ul>
      </div>
    </nav>
  );
}
