import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useState } from "react";

function CarShowcase({ cars = [] }) {
  // duplicate for seamless scroll
  const loopCars = [...cars, ...cars];

  const prefersReducedMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(
      typeof window !== "undefined" &&
        ("ontouchstart" in window || navigator.maxTouchPoints > 0)
    );
  }, []);

  const handlePointerMove = (e) => {
    if (isTouch) return;

    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section
      id="collection"
      onPointerMove={handlePointerMove}
      className="
        relative
        min-h-[100svh] md:min-h-screen
        w-screen
        overflow-hidden
        bg-black
      "
    >
      {/* HORIZONTAL SCROLLER */}
      <div
        className="
          relative z-10
          flex
          min-h-[100svh]
          w-full
          overflow-x-auto
          snap-x snap-mandatory
          scroll-smooth
          scrollbar-hide
        "
      >
        {loopCars.map((car, index) => (
          <div
            key={index}
            className="
              relative
              snap-center
              min-w-full
              min-h-[100svh]
            "
          >
            {/* BACKGROUND IMAGE */}
            <motion.img
              src={car.image}
              alt={car.name}
              loading="lazy"
              initial={
                prefersReducedMotion
                  ? false
                  : { opacity: 0, scale: 1.05 }
              }
              whileInView={
                prefersReducedMotion
                  ? { opacity: 1 }
                  : { opacity: 1, scale: 1 }
              }
              transition={{ duration: 1.8, ease: "easeOut" }}
              className="
                absolute inset-0
                w-full h-full
                object-cover
              "
            />

            {/* LIGHT SWEEP (DESKTOP ONLY) */}
            {!isTouch && !prefersReducedMotion && (
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: useMotionTemplate`
                    radial-gradient(
                      500px circle at ${mouseX}px ${mouseY}px,
                      rgba(255,255,255,0.12),
                      transparent 65%
                    )
                  `,
                }}
              />
            )}

            {/* CINEMATIC OVERLAY */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
            </div>

            {/* TEXT CONTENT */}
            <div className="relative z-20 h-full flex items-end justify-center pb-24">
              <motion.div
                initial={
                  prefersReducedMotion
                    ? false
                    : { opacity: 0, y: 24 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                className="text-center"
              >
                <h2
                  className="
                    text-white
                    text-lg md:text-2xl
                    tracking-[0.4em]
                    uppercase
                  "
                >
                  {car.name}
                </h2>

                <div className="mx-auto mt-4 h-px w-24 bg-white/60" />
              </motion.div>
            </div>
          </div>
        ))}
      </div>

      {/* SCROLL / SWIPE INDICATOR */}
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 2.2, repeat: Infinity }}
        className="
          absolute bottom-6 w-full
          text-center
          text-white/40
          tracking-[0.3em]
          text-[10px]
          uppercase
          z-30
        "
      >
        {isTouch ? "Swipe →" : "Scroll →"}
      </motion.div>
    </section>
  );
}

export default CarShowcase;
