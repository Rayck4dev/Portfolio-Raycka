import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  const whatsappLink = "https://wa.link/wzb5kg";

  return (
    <section id="contact" className="bg-black scroll-mt-28 py-24 px-6 relative w-full">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <FadeIn>
          <div className="flex flex-col h-full justify-between gap-8">
            <div>
              <span className="text-neonPurple font-orbitron text-xs tracking-[0.5em] mb-2 block">
                {t('contactPage.subtitle')}
              </span>
              <h3 className="font-bricolage text-4xl md:text-5xl font-bold dark:text-white mb-6">
                {t('contactPage.title1')}{" "}
                <span className="text-neonPink">{t('contactPage.title2')}</span>
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-light leading-relaxed">
                {t('contactPage.desc')}
              </p>
            </div>

            <div className="flex flex-col gap-3 font-orbitron text-xs tracking-wider text-slate-400">
              <p>
                EMAIL:{" "}
                <span className="text-white">rayckadevweb@gmail.com</span>
              </p>
              <p>
                HQ: <span className="text-white">BRASIL // REMOTE</span>
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-col items-center text-center gap-6 p-8 md:p-10 rounded-3xl bg-purple-800/10 border border-slate-200 dark:border-white/5 shadow-xl relative overflow-hidden group">
            <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-neonPink/10 blur-3xl pointer-events-none transition-opacity group-hover:opacity-100" />

            <div className="w-16 h-16 rounded-full bg-neonCyan/10 border border-neonCyan/30 flex items-center justify-center mb-2 animate-pulse">
              <svg 
                className="w-8 h-8 text-neonCyan" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
                />
              </svg>
            </div>

            <h4 className="font-bricolage text-2xl font-bold dark:text-white">
              {t('contactPage.ctaTitle') || "Vamos conversar?"}
            </h4>

            <p className="text-slate-400 text-sm font-light leading-relaxed max-w-xs">
              {t('contactPage.ctaDesc') || "Clique no botão abaixo para abrir uma conversa direta no WhatsApp. Sem formulários, sem espera."}
            </p>

            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-4 w-full py-4 rounded-xl bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-orbitron text-xs font-black tracking-[0.2em] uppercase transition-all shadow-lg hover:shadow-[0_0_25px_rgba(64,224,208,0.3)] border border-transparent hover:border-neonCyan flex items-center justify-center gap-2"
            >
              {t('contactPage.submit') || "CHAMAR NO WHATSAPP"}
            </motion.a>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}