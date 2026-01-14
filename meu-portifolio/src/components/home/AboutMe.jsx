export default function AboutMe() {
  return (
    <section
      id="about"
      className="min-h-screen relative flex flex-col items-center px-6 py-24 overflow-hidden bg-black"
    >
      <div className="absolute left-0 top-0 w-[300px] h-full bg-neonOrange/20 blur-[150px] pointer-events-none"></div>

      <div className="absolute inset-0 bg-gradient-to-b from-neonOrange/10 via-black to-black pointer-events-none"></div>

      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(transparent_95%,rgba(255,255,255,0.1)_100%)] bg-[length:100%_4px] pointer-events-none"></div>

      <Particles />

      <h2 className="relative z-10 text-5xl font-audiowide text-neonOrange mb-16 drop-shadow-[0_0_15px_#c78210] animate-fadeUp">
        About Me
      </h2>

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-16 max-w-6xl w-full animate-fadeUp">
        <div
          className="
            w-80 h-80 rounded-xl bg-black/40 border border-neonOrange/40 
            backdrop-blur-md shadow-[0_0_20px_#c78210] 
            flex items-center justify-center overflow-hidden
          "
        >
          <img
            src="src/assets/Foto-Port_org.jpg"
            alt="Foto Raycka"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 text-white font-bricolage font-bold text-md leading-relaxed">
          <p className="text-white/70 max-w-2xl font-bricolage text-base mb-4 px-4">
            Olá! Meu nome é Raycka e sou uma desenvolvedora apaixonada por criar
            interfaces modernas, funcionais e visualmente marcantes. Meu foco é
            transformar ideias em experiências digitais fluidas e intuitivas.
          </p>

          <p className="text-white/70 max-w-2xl font-bricolage text-base mb-4 px-4">
            Trabalho com desenvolvimento Front-End e Back-End, sempre buscando
            escrever código limpo, organizado e escalável. Gosto de explorar
            novas tecnologias todos os dias, entender como as coisas funcionam
            por trás dos bastidores e evoluir constantemente como profissional.
          </p>

          <p className="text-white/70 max-w-2xl font-bricolage text-base mb-4 px-4">
            Além da parte técnica, valorizo muito a colaboração, comunicação e
            criatividade. Acredito que grandes projetos nascem quando pessoas
            unem suas habilidades e constroem algo incrível juntas.
          </p>
        </div>
      </div>
    </section>
  );
}

function Particles() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute w-2 h-2 bg-neonOrange/40 rounded-full blur-sm top-10 left-1/4 animate-ping"></div>
      <div className="absolute w-1 h-1 bg-neonOrange/30 rounded-full blur-sm top-1/3 left-2/3 animate-pulse"></div>
      <div className="absolute w-3 h-3 bg-neonOrange/20 rounded-full blur-md top-2/3 left-1/5 animate-ping"></div>
      <div className="absolute w-2 h-2 bg-neonOrange/30 rounded-full blur-sm top-1/2 left-1/2 animate-pulse"></div>
    </div>
  );
}
