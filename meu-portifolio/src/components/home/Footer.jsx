export default function Footer() {
  return (
    <footer className="w-full py-6 text-center text-techGray bg-black/40 mt-20">
      <p className="font-audiowide text-sm">
        © {new Date().getFullYear()} Raycka DevLab — All rights reserved.
      </p>
    </footer>
  );
}
