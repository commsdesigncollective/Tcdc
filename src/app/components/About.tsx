import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import {
  fadeUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  cardReveal,
  viewportConfig,
} from "./animations";

const pillars = [
  "Communications strategy to full-fledged Regional or International events",
  "Full-year social media calendars & campaigns to a single curated post",
  "Thought leadership pieces to full PR & media engagement management",
  "Gender workshops to sourcing the best trainers and facilitators",
  "Survey & questionnaire design to on-field data collection",
];

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32" style={{ backgroundColor: "#FAF7F2" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section label */}
        <motion.div
          className="flex items-center gap-3 mb-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <div className="w-10 h-px" style={{ backgroundColor: "#C76B3C" }} />
          <span
            style={{ fontFamily: "'Inter', sans-serif", color: "#C76B3C" }}
            className="text-xs tracking-widest uppercase"
          >
            About Us
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left – Text */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#1B4332",
                lineHeight: 1.2,
              }}
              className="text-4xl md:text-5xl mb-8"
            >
              A Little About Us{" "}
              <em style={{ color: "#C76B3C" }}>(And Why We're Here)</em>
            </h2>

            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#3A3A3A",
                lineHeight: 1.8,
              }}
              className="text-base space-y-5"
            >
              <p>
                Let's be honest: the development and industry sectors are hard work.
                Navigating campaigns for NGOs, scaling CSR initiatives, or managing
                industry associations requires a lot of moving parts.
              </p>
              <p>
                That's where we come in. We founded The Communication & Design Collective
                because we wanted to be the agency we always wished we could call when we
                were in the trenches.
              </p>
              <p>
                We aren't just a vendor executing a contract.{" "}
                <strong style={{ color: "#1B4332" }}>We are your allies.</strong> We
                combine real-world experience in the social sector, CSR, and industry
                association advocacy with a genuine passion for storytelling and human
                connection. Together, we make things happen.
              </p>
            </div>
          </motion.div>

          {/* Right – One-stop card */}
          <motion.div
            className="rounded-2xl p-8 lg:p-10"
            style={{ backgroundColor: "#1B4332" }}
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#F0C08A",
                lineHeight: 1.3,
              }}
              className="text-2xl mb-2"
            >
              We are your one stop to
            </h3>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "rgba(250,247,242,0.7)",
              }}
              className="text-sm mb-8"
            >
              design and deliver — everything from the grand to the granular:
            </p>

            <motion.ul
              className="space-y-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              {pillars.map((item, i) => (
                <motion.li key={i} className="flex items-start gap-3" variants={cardReveal}>
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0"
                    style={{ color: "#C76B3C" }}
                  />
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: "rgba(250,247,242,0.88)",
                      lineHeight: 1.6,
                    }}
                    className="text-sm"
                  >
                    {item}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
