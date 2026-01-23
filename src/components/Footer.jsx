import { motion } from "framer-motion";

function Footer() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative overflow-hidden
      bg-gradient-to-b from-[#24170f] via-[#2b1e16] to-[#1b120c]
      text-[#f5efe8]"
    >
      {/* Champagne ambient glow */}
      <div className="absolute inset-0
      bg-[radial-gradient(circle_at_bottom,rgba(212,175,55,0.12),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-24 py-28">

        {/* Brand */}
        <div className="mb-20 max-w-lg">
          <p className="text-2xl tracking-[0.35em] font-light">
            ROLLS-ROYCE
          </p>
          <p className="text-[#e3d6c8] mt-6 leading-relaxed">
            The pinnacle of handcrafted luxury and timeless automotive
            excellence.
          </p>
        </div>

        {/* Navigation */}
        <div
          className="flex flex-wrap gap-14 uppercase tracking-[0.3em]
          text-xs text-[#cbb89e] mb-20"
        >
          <button
            onClick={() => scrollToSection("home")}
            className="hover:text-[#d4af37] transition"
          >
            Home
          </button>

          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-[#d4af37] transition"
          >
            About
          </button>

          <button
            onClick={() => scrollToSection("collection")}
            className="hover:text-[#d4af37] transition"
          >
            Collection
          </button>

          <span className="cursor-default opacity-60">
            Heritage
          </span>
        </div>

        {/* Divider */}
        <div
          className="w-full h-[1px]
          bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent
          mb-12"
        ></div>

        {/* Bottom */}
        <div
          className="flex flex-col md:flex-row justify-between
          text-[#bfae94] text-sm tracking-wide"
        >
          <p>© 2024 Rolls-Royce Motor Cars</p>
          <p className="mt-4 md:mt-0 italic text-[#d4af37]">
            Inspiring Greatness
          </p>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
