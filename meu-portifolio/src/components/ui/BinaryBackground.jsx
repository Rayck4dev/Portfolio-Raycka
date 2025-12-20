export default function BinaryBackground() {
  const numbers = Array.from({ length: 60 });

  const neonColors = [
    "text-neonGreen",
    "text-neonBlue",
    "text-neonPurple",
    "text-neonPink",
    "text-neonCyan",
  ];

  const sizes = ["text-xl", "text-2xl", "text-3xl"];

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {numbers.map((_, i) => {
        const color = neonColors[Math.floor(Math.random() * neonColors.length)];
        const size = sizes[Math.floor(Math.random() * sizes.length)];
        const value = Math.random() > 0.5 ? "1" : "0";

        return (
          <span
            key={i}
            className={`fixed font-mono opacity-20 ${color} ${size} animate-fall`}
            style={{
              top: `-${Math.random() * 100}px`,
              left: `${Math.random() * 100}vw`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          >
            {value}
          </span>
        );
      })}
    </div>
  );
}
