import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-6 md:px-24
      bg-gradient-to-b from-[#1b120c] via-[#24170f] to-[#2b1e16]
      text-[#f5efe8] relative overflow-hidden"
    >
      {/* Subtle champagne ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(212,175,55,0.12),transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative max-w-4xl"
      >
        <h2
          className="text-5xl md:text-6xl font-light tracking-[0.35em] mb-14"
        >
          ABOUT{" "}
          <span className="font-semibold text-[#d4af37]">
            ROLLS-ROYCE
          </span>
        </h2>

        {/* Champagne divider */}
        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mb-16"></div>

        <div className="space-y-12 text-[#e3d6c8] text-lg leading-loose">
          <p>
            Rolls-Royce Motor Cars stands as the ultimate expression of
            handcrafted luxury — where perfection is not an aspiration,
            but a standard upheld without compromise.
          </p>

          <p>
            Every motor car is a bespoke creation, meticulously designed
            and engineered to embody individuality, refinement, and
            timeless elegance.
          </p>

          <p>
            From the Spirit of Ecstasy to the whisper-quiet drive,
            Rolls-Royce represents a world where heritage craftsmanship
            harmonises with modern innovation.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
