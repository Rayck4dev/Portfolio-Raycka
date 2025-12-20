export default function PixelButton({
  children,
  className = "",
  color = "neonCyan",
  ...props
}) {
  return (
    <button
      {...props}
      className={`
        relative px-3 py-2 font-semibold font-audiowide
        border-2 border-${color} text-${color}
        bg-black/40 backdrop-blur-sm
        shadow-[0_0_10px_var(--tw-shadow-color)]
        hover:shadow-[0_0_20px_var(--tw-shadow-color)]
        hover:bg-${color}/20 hover:text-white
        active:translate-x-[2px] active:translate-y-[2px]
        transition-all duration-200
        ${className}
      `}
      style={{ "--tw-shadow-color": `var(--${color})` }}
    >
      {children}

      <span
        className="
          absolute inset-0 border-2 border-black
          translate-x-[4px] translate-y-[4px]
          pointer-events-none
        "
      ></span>
    </button>
  );
}
