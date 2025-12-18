import CursorDev from "@/assets/cursor_pdev.png";

export default function CustomCursor() {
  return (
    <img
      src={CursorDev}
      alt="Decorative Cursor"
      className="absolute w-10 animate-pulse z-30"
      style={{
        top: "55%",   
        left: "39%",  
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}
