import { ArrowDown } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

const heroImage =
  "https://images.unsplash.com/photo-1542323228-002ac256e7b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOR08lMjBzb2NpYWwlMjBpbXBhY3QlMjB0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3Nzg0OTQxMDd8MA&ixlib=rb-4.1.0&q=80&w=1080";

export function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#FAF7F2" }}
    >
      {/* Background Image — slow scale-in on load */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <ImageWithFallback
          src={heroImage}
          alt="Team collaboration"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(110deg, rgba(27,67,50,0.88) 0%, rgba(27,67,50,0.72) 45%, rgba(199,107,60,0.18) 100%)",
          }}
        />
      </motion.div>

      {/* Decorative accent circle */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl z-0"
        style={{ backgroundColor: "#C76B3C" }}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-20">
        <div className="max-w-3xl">
          {/* Tag */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
            style={{
              backgroundColor: "rgba(199,107,60,0.25)",
              border: "1px solid rgba(199,107,60,0.5)",
            }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <span
              style={{ fontFamily: "'Inter', sans-serif", color: "#F0C08A" }}
              className="text-xs tracking-widest uppercase"
            >
              The Communication & Design Collective
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#FAF7F2",
              lineHeight: 1.15,
            }}
            className="text-5xl md:text-6xl lg:text-7xl mb-6"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            Think of us as your{" "}
            <em style={{ color: "#F0C08A" }}>most capable friends</em>{" "}
            in the sector.
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "rgba(250,247,242,0.82)",
              lineHeight: 1.7,
            }}
            className="text-lg md:text-xl mb-10 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            When your NGO, CSR team, or industry association needs to solve a complex
            communication puzzle, design an unforgettable event, or dive deep into
            research — we are the first call you make.{" "}
            <span style={{ color: "#F0C08A" }}>
              We're here to help you do good, better.
            </span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.button
              onClick={() => scrollTo("#contact")}
              style={{
                backgroundColor: "#C76B3C",
                color: "#FAF7F2",
                fontFamily: "'Inter', sans-serif",
              }}
              className="px-8 py-3.5 rounded-full text-sm tracking-wide border-none cursor-pointer shadow-lg"
              whileHover={{ scale: 1.04, backgroundColor: "#d97c50" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              Let's Chat
            </motion.button>
            <motion.button
              onClick={() => scrollTo("#services")}
              style={{
                backgroundColor: "transparent",
                color: "#FAF7F2",
                fontFamily: "'Inter', sans-serif",
                border: "1.5px solid rgba(250,247,242,0.6)",
              }}
              className="px-8 py-3.5 rounded-full text-sm tracking-wide cursor-pointer"
              whileHover={{ scale: 1.04, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              See What We Do
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo("#about")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 border-none bg-transparent cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        whileHover={{ opacity: 1 }}
      >
        <span
          style={{ fontFamily: "'Inter', sans-serif", color: "#FAF7F2" }}
          className="text-xs tracking-widest uppercase"
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
        >
          <ArrowDown size={16} color="#FAF7F2" />
        </motion.div>
      </motion.button>
    </section>
  );
}
