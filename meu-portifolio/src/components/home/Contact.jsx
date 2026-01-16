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
      <h2 className="text-4xl font-audiowide text-neonPurple mb-8 drop-shadow-[0_0_15px_#a855f7]">
        Entre em Contato
      </h2>

      <p className="text-white/70 text-lg font-bricolage mb-6">
        Ficou interessado em ter um site moderno e funcional? Me mande uma
        mensagem!
      </p>

      <div className="flex items-center gap-4 bg-black/40 border border-neonPurple/40 rounded-xl px-6 py-4 shadow-[0_0_15px_#a855f7] text-white font-bold">
        📧 <span className="text-neonPurple">{email}</span>
        <button
          onClick={copyEmail}
          className="ml-2 px-3 py-1 bg-neonPurple text-black rounded hover:bg-Purple-500 transition"
        >
          {copied ? "Copiado!" : "Copiar"}
        </button>
      </div>
    </section>
  );
}
