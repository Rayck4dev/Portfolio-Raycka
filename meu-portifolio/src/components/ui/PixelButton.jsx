export default function PixelButton({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`px-4 py-2 border-2 border-black bg-white hover:bg-black hover:text-white transition-all font-semibold shadow-[4px_4px_0px_0px_#000] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] ${className}`}
    >
      {children}
    </button>
  );
}
