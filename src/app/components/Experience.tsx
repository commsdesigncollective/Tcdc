import { Award, Leaf, MapPin, Shield } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import {
  fadeUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  cardReveal,
  viewportConfig,
} from "./animations";

const bgImage =
  "https://images.unsplash.com/photo-1676282831194-f7dcd46eafef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFnZW5jeSUyMGRlc2lnbiUyMHdvcmtzcGFjZSUyMGNvbG9yZnVsfGVufDF8fHx8MTc3ODQ5NDExNnww&ixlib=rb-4.1.0&q=80&w=1080";

const highlights = [
  {
    icon: Award,
    text: "Managed massive, government-supported conferences with hundreds of international participants.",
  },
  {
    icon: Leaf,
    text: "Led campaigns promoting sustainable agriculture alongside grassroots civil society groups and farmers.",
  },
  {
    icon: MapPin,
    text: "Spent a year in rural regions conducting in-depth ethnographic research on land use and child development.",
  },
  {
    icon: Shield,
    text: "Designed and delivered sensitivity training for top-tier institutions, including universities and police forces.",
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ backgroundColor: "#1B4332" }}
    >
      {/* Background image overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <ImageWithFallback
          src={bgImage}
          alt="Our work"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          className="flex items-center gap-3 mb-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <div className="w-10 h-px" style={{ backgroundColor: "#F0C08A" }} />
          <span
            style={{ fontFamily: "'Inter', sans-serif", color: "#F0C08A" }}
            className="text-xs tracking-widest uppercase"
          >
            Our Experience
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#FAF7F2",
                lineHeight: 1.2,
              }}
              className="text-4xl md:text-5xl mb-6"
            >
              Yes, We've Done{" "}
              <em style={{ color: "#F0C08A" }}>This Before!</em>
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "rgba(250,247,242,0.75)",
                lineHeight: 1.7,
              }}
              className="text-base mb-8"
            >
              We might be friendly, but we are also heavyweights in this space.
              Between us, we bring over a decade of specialized experience to your table.
            </p>

            {/* Stat counter */}
            <motion.div
              className="inline-flex items-baseline gap-2 px-6 py-4 rounded-2xl"
              style={{
                backgroundColor: "rgba(240,192,138,0.15)",
                border: "1px solid rgba(240,192,138,0.3)",
              }}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewportConfig}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <span
                style={{ fontFamily: "'Playfair Display', serif", color: "#F0C08A" }}
                className="text-5xl"
              >
                10+
              </span>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "rgba(250,247,242,0.8)",
                }}
                className="text-sm"
              >
                years of combined
                <br />
                specialized experience
              </span>
            </motion.div>
          </motion.div>

          {/* Right – highlights */}
          <motion.div
            className="space-y-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <motion.div
                  key={i}
                  className="flex items-start gap-4 p-5 rounded-xl"
                  style={{
                    backgroundColor: "rgba(250,247,242,0.06)",
                    border: "1px solid rgba(250,247,242,0.1)",
                  }}
                  variants={cardReveal}
                  whileHover={{
                    backgroundColor: "rgba(250,247,242,0.1)",
                    x: 4,
                  }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                >
                  <motion.div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "rgba(199,107,60,0.25)" }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  >
                    <Icon size={18} style={{ color: "#F0C08A" }} />
                  </motion.div>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: "rgba(250,247,242,0.82)",
                      lineHeight: 1.65,
                    }}
                    className="text-sm"
                  >
                    {h.text}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
