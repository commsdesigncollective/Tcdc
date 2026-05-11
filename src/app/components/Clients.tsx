import { Heart, BarChart2, Building2 } from "lucide-react";
import { motion } from "motion/react";
import { fadeUp, staggerContainer, cardReveal, viewportConfig } from "./animations";

const clients = [
  {
    icon: Heart,
    title: "NGOs & Grassroots Movements",
    description:
      "Looking to amplify their voice, expand their reach, and build lasting community impact.",
    tag: "Advocacy & Storytelling",
  },
  {
    icon: BarChart2,
    title: "CSR Foundations",
    description:
      "Want to measure, communicate, and showcase their social impact to stakeholders and the world.",
    tag: "Impact Reporting",
  },
  {
    icon: Building2,
    title: "Industry Associations",
    description:
      "Looking to run high-profile events and advocacy campaigns that influence policy and perception.",
    tag: "Events & Advocacy",
  },
];

export function Clients() {
  return (
    <section id="clients" className="py-24 lg:py-32" style={{ backgroundColor: "#F0E8DA" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
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
            Clients & Ecosystems
          </span>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <motion.h2
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#1B4332",
              lineHeight: 1.2,
            }}
            className="text-4xl md:text-5xl max-w-lg"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            Who <em style={{ color: "#C76B3C" }}>Reaches Out</em> to Us
          </motion.h2>
          <motion.p
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#5A5A5A",
              lineHeight: 1.6,
            }}
            className="text-sm max-w-xs md:text-right"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            We are the go-to call for a wide variety of awesome people doing important work.
          </motion.p>
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {clients.map((client, i) => {
            const Icon = client.icon;
            return (
              <motion.div
                key={i}
                className="rounded-2xl p-8 flex flex-col gap-5 cursor-default"
                style={{
                  backgroundColor: "#fff",
                  border: "1px solid rgba(27,67,50,0.1)",
                }}
                variants={cardReveal}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px rgba(27,67,50,0.12)",
                  borderColor: "rgba(199,107,60,0.25)",
                }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
              >
                {/* Tag */}
                <span
                  className="self-start text-xs px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: "rgba(199,107,60,0.12)",
                    color: "#C76B3C",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {client.tag}
                </span>

                <motion.div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: "rgba(27,67,50,0.08)" }}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(199,107,60,0.12)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                >
                  <Icon size={22} style={{ color: "#1B4332" }} />
                </motion.div>

                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#1B4332",
                    lineHeight: 1.3,
                  }}
                  className="text-xl"
                >
                  {client.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#5A5A5A",
                    lineHeight: 1.7,
                  }}
                  className="text-sm"
                >
                  {client.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
