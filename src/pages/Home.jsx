import { motion } from "framer-motion";
import CarShowcase from "../components/CarShowcase";

function Home({ cars }) {
  return (
    <main
      id="home"
      className="bg-gradient-to-b from-[#2b1e16] via-[#3a2a20] to-[#1b120c] 
      text-[#f5efe8]"
    >
      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center pt-32 px-6 relative overflow-hidden">

        {/* Champagne glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.15),transparent_65%)]" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative text-center max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-light tracking-[0.35em]">
            THE <span className="font-semibold text-[#d4af37]">ART</span> OF LUXURY
          </h1>

          <p className="mt-10 text-[#e3d6c8] text-lg md:text-xl leading-relaxed">
            An extraordinary collection of motor cars, masterfully crafted with
            heritage, elegance, and uncompromising perfection.
          </p>

          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById("collection")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="mt-16 px-12 py-3 text-xs uppercase tracking-[0.35em]
            rounded-full border border-[#d4af37] text-[#d4af37]
            hover:bg-[#d4af37] hover:text-[#2b1e16]
            transition shadow-[0_0_30px_rgba(212,175,55,0.25)]"
          >
            Explore Collection
          </motion.button>
        </motion.div>
      </section>

      {/* FULL SCREEN CAR SHOWCASE */}
      <CarShowcase cars={cars} />
    </main>
  );
}

export default Home;
