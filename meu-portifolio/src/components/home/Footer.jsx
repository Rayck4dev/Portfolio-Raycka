export default function Footer() {
  return (
    <footer className="w-full py-2 text-center text-neonPink bg-black">
      <p className="font-audiowide text-sm">
        © {new Date().getFullYear()} Raycka DevLab — All rights reserved.
      </p>
    </footer>
  );
}
