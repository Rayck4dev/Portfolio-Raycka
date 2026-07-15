import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="w-full py-4 sm:py-6 text-center text-neonPink bg-black border-t border-neonPink/30">
      <p className="font-audiowide text-xs sm:text-sm lg:text-base">
        © {new Date().getFullYear()} DevLab — {t('footer.rights')}
      </p>
    </footer>
  );
}
