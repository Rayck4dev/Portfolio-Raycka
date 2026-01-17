import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "rayckadevweb@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-black px-6 py-24"
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-audiowide text-neonPurple mb-8 drop-shadow-[0_0_15px_#a855f7]">
        Entre em Contato
      </h2>

      <p className="text-white/70 text-sm sm:text-base lg:text-lg font-bricolage mb-6 text-center max-w-xl">
        Ficou interessado em ter um site moderno e funcional? Me mande uma
        mensagem!
      </p>

      <div className="flex items-center gap-3 sm:gap-4 bg-black/40 border border-neonPurple/40 rounded-xl px-4 sm:px-6 py-3 sm:py-4 shadow-[0_0_15px_#a855f7] text-white font-bold">
        📧 <span className="text-neonPurple text-sm sm:text-base">{email}</span>
        <button
          onClick={copyEmail}
          className="ml-2 px-2 sm:px-3 py-1 sm:py-2 bg-neonPurple text-black rounded hover:bg-purple-500 transition text-sm sm:text-base"
        >
          {copied ? "Copiado!" : "Copiar"}
        </button>
      </div>
    </section>
  );
}
