import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="fixed top-0 z-50 w-full backdrop-blur-xl 
        bg-gradient-to-b from-white/80 to-white/60 
        border-b border-black/10 shadow-sm"
      >
        <div className="max-w-7xl bg-transparent mx-auto flex items-center justify-between px-6 md:px-12 h-14 md:h-16">
          
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => scrollToSection("home")}
          >
            <img
              src="/images/Rolls-Royce logo-3.png"
              alt="Rolls Royce Logo"
              className="h-10 md:h-12 w-auto group-hover:scale-105 transition"
            />
            <span className="text-black text-xl md:text-2xl font-semibold tracking-[0.35em]">
              ROLLS-ROYCE
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-14 text-xs uppercase tracking-[0.3em] text-gray-700">
            {["home", "about"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="relative group hover:text-black transition"
              >
                {item}
                <span className="absolute left-0 -bottom-2 h-[1px] w-0 
                bg-black transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-8 py-2 text-xs uppercase 
            tracking-[0.25em] text-white bg-black 
            rounded-full shadow-lg hover:bg-gray-900 transition"
            onClick={() => scrollToSection("collection")}
          >
            Experience
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black text-3xl"
            onClick={() => setOpen(true)}
          >
            <HiMenuAlt3 />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-white/95 backdrop-blur-xl flex flex-col"
          >
            <div className="flex justify-between items-center p-6">
              <span className="text-black tracking-[0.35em] text-lg">
                MENU
              </span>
              <button
                className="text-black text-3xl"
                onClick={() => setOpen(false)}
              >
                <HiX />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center gap-10 h-full 
            text-black text-xl uppercase tracking-[0.3em]">
              {["home", "about", "collection"].map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ scale: 1.1 }}
                  className="hover:text-gray-600 transition"
                  onClick={() => scrollToSection(item)}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
