import { motion, useMotionValue, useMotionTemplate } from "framer-motion";


function CarShowcase({ cars }) {
    const loopCars = [...cars, ...cars];

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };


    return (
        <section
            id="collection"
            onMouseMove={handleMouseMove}
            className="relative h-screen w-screen overflow-hidden bg-black"
        >
            {/* Horizontal Scroll */}
            <div
                className="
          relative z-10
          flex h-full w-full overflow-x-scroll
          snap-x snap-mandatory
          scrollbar-hide scroll-smooth
        "
            >
                {loopCars.map((car, index) => (
                    <div
                        key={index}
                        className="snap-center min-w-full h-full relative"
                    >
                        {/* FULL SCREEN IMAGE */}
                        <motion.img
                            src={car.image}
                            alt={car.name}
                            initial={{ opacity: 0, scale: 1.02 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 2.6,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            viewport={{ once: false }}
                            className="
                absolute inset-0
                w-full h-full
                object-cover
                z-0
              "
                        />

                        {/* MOUSE LIGHT SWEEP */}
                        <motion.div
                            className="absolute inset-0 z-15 pointer-events-none"
                            style={{
                                background: useMotionTemplate`
      radial-gradient(
        600px circle at ${mouseX}px ${mouseY}px,
        rgba(255,255,255,0.12),
        transparent 60%
      )
    `,
                            }}
                        />


                        {/* CINEMATIC OVERLAYS */}
                        <div className="pointer-events-none absolute inset-0 z-10">
                            {/* Fade */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/85" />

                            {/* Vertical light streaks */}
                            <div
                                className="
                  absolute inset-0
                  bg-[linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]
                  bg-[size:140px_100%]
                  opacity-40
                "
                            />
                        </div>

                        {/* GROUND FOG */}
                        <div
                            className="
                absolute bottom-24 left-1/2 -translate-x-1/2
                w-[75vw] h-36
                bg-white/10 blur-[140px]
                rounded-full
                z-20
              "
                        />

                        {/* CONTENT OVER IMAGE */}
                        <div className="relative z-30 h-full flex flex-col items-center justify-end pb-28">

                            {/* MODEL NAME */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.6, duration: 1.4 }}
                                viewport={{ once: false }}
                                className="text-center"
                            >
                                <h2
                                    className="
                    text-white
                    text-xl md:text-2xl
                    tracking-[0.5em]
                    uppercase font-light
                  "
                                >
                                    {car.name}
                                </h2>

                                <div
                                    className="
                    mx-auto mt-6
                    h-[1px] w-32
                    bg-gradient-to-r
                    from-transparent via-white/60 to-transparent
                  "
                                />
                            </motion.div>
                        </div>
                    </div>
                ))}
            </div>

            {/* SCROLL INDICATOR (ON TOP OF IMAGE) */}
            <motion.div
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 2.4, repeat: Infinity }}
                className="
          absolute bottom-6 w-full text-center
          text-white/40
          tracking-[0.35em]
          text-[10px]
          uppercase
          z-40
        "
            >
                Scroll
            </motion.div>
        </section>
    );
}

export default CarShowcase;
