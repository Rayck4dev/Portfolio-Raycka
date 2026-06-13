import fotoRaycka from "../../assets/picturemy.jpeg";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="min-h-screen relative flex flex-col items-center px-6 py-24 overflow-hidden bg-black"
    >
      <h2 className="relative z-10 text-3xl sm:text-4xl lg:text-5xl font-audiowide text-neonOrange mb-12 sm:mb-16 drop-shadow-[0_0_15px_#c78210] animate-fadeUp">
        About Me
      </h2>

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 sm:gap-12 lg:gap-16 max-w-6xl w-full animate-fadeUp">
        <div
          className="
            w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 
            rounded-xl bg-black/40 border border-neonOrange/40 
            backdrop-blur-md shadow-[0_0_20px_#c78210] 
            flex items-center justify-center overflow-hidden
          "
        >
          <img
            src={fotoRaycka}
            alt="Foto Raycka"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 text-white font-bricolage font-bold leading-relaxed">
          <p className="text-white/70 max-w-2xl text-sm sm:text-base lg:text-lg mb-4 px-4">
            Olá! Meu nome é Raycka e sou uma desenvolvedora apaixonada por criar
            interfaces modernas, funcionais e visualmente marcantes. Meu foco é
            transformar ideias em experiências digitais fluidas e intuitivas.
          </p>

          <p className="text-white/70 max-w-2xl text-sm sm:text-base lg:text-lg mb-4 px-4">
            Trabalho com desenvolvimento Front-End e Back-End, sempre buscando
            escrever código limpo, organizado e escalável. Gosto de explorar
            novas tecnologias todos os dias, entender como as coisas funcionam
            por trás dos bastidores e evoluir constantemente como profissional.
          </p>

          <p className="text-white/70 max-w-2xl text-sm sm:text-base lg:text-lg mb-4 px-4">
            Além da parte técnica, valorizo muito a colaboração, comunicação e
            criatividade. Acredito que grandes projetos nascem quando pessoas
            unem suas habilidades e constroem algo incrível juntas.
          </p>
        </div>
      </div>
    </section>
  );
}

