import { motion } from "framer-motion";
import { techs } from "@/types/techs";

export default function TechMotion() {
  return (
    <section className="py-4 bg-black border-y border-slate-200 dark:border-white/5 overflow-hidden relative w-full">
      <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div className="flex w-max select-none">
        
        <motion.div 
          className="flex items-center gap-16 pr-16 py-2"
          animate={{ x: [0, "-50%"] }}
          transition={{
            ease: "linear",
            duration: 80,
            repeat: Infinity,
          }}
        >
          {techs.map((tech, i) => (
            <span 
              key={`tech-1-${i}`} 
              className="text-3xl md:text-3xl font-orbitron font-black text-slate-300 dark:text-white/20 hover:text-neonPurple transition-all duration-300 cursor-default tracking-tighter whitespace-nowrap"
            >
              {tech}
            </span>
          ))}

          {techs.map((tech, i) => (
            <span 
              key={`tech-2-${i}`} 
              className="text-3xl md:text-3xl font-orbitron font-black text-slate-300 hover:text-neonPurple transition-all duration-300 cursor-default tracking-tighter whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}