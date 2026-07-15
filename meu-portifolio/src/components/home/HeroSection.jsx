import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeadIcon from "@/assets/headlog_dev.png";
import BinaryBackground from "@/components/ui/BinaryBackground";
import FadeIn from "@/components/ui/FadeIn";
import TypingText from "@/components/ui/TypingText";
import { FiDownload } from "react-icons/fi"; 
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t, i18n } = useTranslation();
  const [showHead, setShowHead] = useState(false);
  const isEnglish = i18n.language?.startsWith("en");
  const resumeHref = isEnglish
    ? "/Curriculo_Raycka_Castro_FullStack_En.pdf"
    : "/Curriculo_RayckaCastro_FullStack.pdf";
  const resumeDownloadName = isEnglish
    ? "Curriculo_Raycka_Castro_FullStack_En.pdf"
    : "Curriculo_RayckaCastro_FullStack.pdf";

  useEffect(() => {
    const timer = setTimeout(() => setShowHead(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-[#010102] text-white min-h-screen pt-28 pb-16 flex items-center px-6 sm:px-12 lg:px-20 overflow-hidden">
      <BinaryBackground />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        <FadeIn>
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-orbitron font-bold text-emerald-500 tracking-[0.2em] uppercase">
                {t('hero.available')}
              </span>
            </div>

            <h2 className="font-orbitron text-slate-500 text-xs md:text-sm tracking-[0.5em] mb-4 uppercase">
              {t('hero.specialist')}
            </h2>

            <h1 className="font-bricolage text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.15] mb-6 tracking-tight">
              {t('hero.brandDeserves')} <br />
              <div className="h-[1.2em] w-full flex justify-center md:justify-start items-center text-neonCyan drop-shadow-[0_0_15px_rgba(64,224,208,0.2)]">
                <TypingText
                  texts={[
                    t('hero.typing.modernSite'),
                    t('hero.typing.responsiveDesign'),
                    t('hero.typing.eliteSystem'),
                  ]}
                />
              </div>
            </h1>

            <p className="max-w-lg text-slate-400 font-light text-base md:text-lg leading-relaxed mb-8">
              {t('hero.description')}
              <strong className="text-neonPurple font-bold">{t('hero.devlab')}</strong>.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full sm:w-auto">
              <Link
                to="/projects"
                className="bg-neonPurple text-white font-audiowide text-xs tracking-wider px-6 py-4 rounded-2xl hover:shadow-[0_0_25px_rgba(160,32,240,0.5)] transition-dall active:scale-95 flex items-center justify-center text-center w-full sm:w-auto"
              >
                {t('hero.viewProjects')}
              </Link>

              <a
                href="#contact"
                className="border-2 border-slate-800 hover:border-neonCyan text-slate-300 hover:text-white px-6 py-4 rounded-2xl transition-all duration-300 font-audiowide text-xs tracking-wider flex items-center justify-center text-center w-full sm:w-auto"
              >
                {t('hero.contactMe')}
              </a>

              <a
                href={resumeHref}
                download={resumeDownloadName}
                className="border-2 border-slate-800 hover:border-neonPink text-slate-300 hover:text-white px-6 py-4 rounded-2xl transition-all duration-300 font-audiowide text-xs tracking-wider flex items-center justify-center gap-2 text-center w-full sm:w-auto cursor-pointer group"
              >
                <FiDownload className="text-base text-slate-400 group-hover:text-neonPink transition-colors duration-300" />
                <span>{t('hero.resume')}</span>
              </a>
            </div>
          </div>
        </FadeIn>

        <div className="hidden md:flex justify-end items-center w-full h-[450px] relative">
          <div
            className={`transition-all duration-1000 ease-out transform ${
              showHead
                ? "translate-x-0 opacity-100 blur-0"
                : "translate-x-12 opacity-0 blur-md"
            } w-[85%] h-full relative`}
          >
            <img
              src={HeadIcon}
              alt="DevLab Head Tech"
              className="w-full h-full object-contain drop-shadow-[0_0_35px_rgba(160,32,240,0.3)] animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
