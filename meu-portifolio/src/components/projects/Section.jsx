import ProjectCard from "@/components/projects/ProjectCard";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Section({ id, title, intro, items, bg, icon }) {
  return (
    <motion.section
      id={id}
      className={`mb-4 py-12 px-6 relative scroll-mt-24 ${bg}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h2
        className="flex items-center gap-2 text-4xl font-audiowide text-neonCyan mb-4 drop-shadow-[0_0_20px_var(--tw-shadow-color)]"
        style={{ "--tw-shadow-color": "var(--neonCyan)" }}
        variants={itemVariants}
      >
        <span className="animate-bounce">{icon}</span> {title}
      </motion.h2>

      {intro && (
        <motion.p
          className="text-white/70 text-md font-bricolage mb-8 max-w-2xl"
          variants={itemVariants}
        >
          {intro}
        </motion.p>
      )}

      <motion.div
        className="grid md:grid-cols-2 gap-8"
        variants={containerVariants}
      >
        {items.map((p) => (
          <motion.div key={p.title} variants={itemVariants}>
            <ProjectCard project={p} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="h-[2px] w-full bg-gradient-to-r from-neonCyan via-white to-neonCyan opacity-30 my-10"
        variants={itemVariants}
      />
    </motion.section>
  );
}
