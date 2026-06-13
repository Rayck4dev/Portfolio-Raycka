import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso! A DevLab entrará em contato.");
  };

  return (
    <section id="contact" className="bg-black scroll-mt-28 py-24 px-6 relative w-full">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <FadeIn>
          <div className="flex flex-col h-full justify-between">
            <div>
              <span className="text-neonPurple font-orbitron text-xs tracking-[0.5em] mb-2 block">
                CONTACT_US
              </span>
              <h3 className="font-bricolage text-4xl md:text-5xl font-bold dark:text-white mb-6">
                Vamos iniciar o seu{" "}
                <span className="text-neonPink">projeto?</span>
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-light leading-relaxed mb-8">
                Tem uma ideia de sistema ou precisa automatizar o estoque da sua
                empresa? Mande uma mensagem. Respondemos em menos de 24 horas.
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
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 p-8 rounded-3xl bg-purple-800/10 border border-slate-200 dark:border-white/5 shadow-xl relative overflow-hidden group"
          >
            <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-neonPink/10 blur-3xl pointer-events-none transition-opacity group-hover:opacity-100" />

            <div>
              <label className="block text-[10px] font-orbitron tracking-widest text-slate-400 uppercase mb-2">
                Nome
              </label>
              <input
                type="text"
                required
                className="w-full bg-transparent border-b border-slate-200 dark:border-white/10 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-neonCyan transition-colors"
                placeholder="Ex: João Silva"
              />
            </div>

            <div>
              <label className="block text-[10px] font-orbitron tracking-widest text-slate-400 uppercase mb-2">
                E-mail
              </label>
              <input
                type="email"
                required
                className="w-full bg-transparent border-b border-slate-200 dark:border-white/10 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-neonCyan transition-colors"
                placeholder="joao@empresa.com"
              />
            </div>

            <div>
              <label className="block text-[10px] font-orbitron tracking-widest text-slate-400 uppercase mb-2">
                Mensagem / Escopo Breve
              </label>
              <textarea
                rows={4}
                required
                className="w-full bg-transparent border-b border-slate-200 dark:border-white/10 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-neonCyan transition-colors resize-none"
                placeholder="Preciso de um sistema de estoque..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              className="mt-4 w-full py-4 rounded-xl bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-orbitron text-xs font-black tracking-[0.2em] uppercase transition-all shadow-lg hover:shadow-[0_0_20px_rgba(64,224,208,0.4)] border border-transparent hover:border-neonCyan"
            >
              Enviar Solicitação
            </motion.button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
