import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'pt' : 'en';
    i18n.changeLanguage(newLang);
  };

  if (!mounted) return null;

  const isPt = i18n.language === 'en';

  return (
    <motion.button
      onClick={toggleLanguage}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative flex items-center justify-between w-[94px] h-9 bg-slate-900/80 border border-slate-700 rounded-full p-1 cursor-pointer overflow-hidden backdrop-blur-sm"
      whileHover={{ scale: 1.05, borderColor: "rgba(160,32,240,0.5)" }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        animate={{ 
          background: isPt 
            ? "linear-gradient(90deg, rgba(0, 156, 59, 0.5) 0%, rgba(255, 223, 0, 0.5) 100%)" 
            : "linear-gradient(90deg, rgba(10, 49, 97, 0.5) 0%, rgba(179, 25, 66, 0.5) 100%)" 
        }}
        transition={{ duration: 0.5 }}
      />
      
      <motion.div
        className="absolute top-1 bottom-1 w-[45px] rounded-full bg-slate-800/80 border border-slate-600 shadow-[0_0_10px_rgba(255,255,255,0.1)] z-0"
        animate={{
          left: isPt ? "4px" : "44px",
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30
        }}
      />

      <div className="flex w-full justify-between items-center px-1 z-10 text-[10px] font-audiowide relative font-bold">
        <span className={`flex gap-1 items-center justify-center w-full transition-colors duration-300 ${isPt ? 'text-white' : 'text-slate-500'}`}>
          🇺🇸 EN

        </span>
        <span className={`flex gap-1 items-center justify-center w-full transition-colors duration-300 ${!isPt ? 'text-white' : 'text-slate-500'}`}>
          🇧🇷 BR  
        </span>
      </div>
    </motion.button>
  );
}
