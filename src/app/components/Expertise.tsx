import { Globe, Users, Mic2, Palette, BookOpen } from "lucide-react";
import { motion } from "motion/react";
import { fadeUp, staggerContainer, cardReveal, viewportConfig } from "./animations";

const tools = [
  {
    icon: Globe,
    title: "Communications & Public Relations",
    items: [
      "Cross-channel digital strategy",
      "Social media campaign management",
      "Media relations & stakeholder engagement",
      "Newsletters, magazines & annual reports",
    ],
  },
  {
    icon: Users,
    title: "Training & Facilitation",
    items: [
      "Training Needs Analysis (TNA)",
      "Train-the-Trainer programs",
      "Gender Sensitivity & SEL workshops",
      "Arts-based behavioral change sessions",
    ],
  },
  {
    icon: Mic2,
    title: "Events",
    items: [
      "International & government-supported conferences",
      "Multi-city anniversary events",
      "End-to-end logistical management",
      "Concept design to on-ground execution",
    ],
  },
  {
    icon: Palette,
    title: "The Creative Stuff",
    items: [
      "Canva design & visual communication",
      "Website development (WordPress, Wix, AEM)",
      "Brand identity building",
      "Theatre-in-Education (TiE)",
    ],
  },
  {
    icon: BookOpen,
    title: "Research",
    items: [
      "Deep qualitative research",
      "Ethnographic field studies",
      "Survey & questionnaire design",
      "Policy papers for actionable change",
    ],
  },
];

export function Expertise() {
  return (
    <section id="expertise" className="py-24 lg:py-32" style={{ backgroundColor: "#FAF7F2" }}>
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
            Our Expertise
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
            The Tools in <em style={{ color: "#C76B3C" }}>Our Toolkit</em>
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
            When you team up with us, you get access to all the nerd-level skills we've
            picked up over the years.
          </motion.p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {tools.map((tool, i) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={i}
                className="rounded-2xl p-7 flex flex-col gap-5"
                style={{
                  backgroundColor: "#fff",
                  border: "1px solid rgba(27,67,50,0.1)",
                }}
                variants={cardReveal}
                whileHover={{
                  y: -5,
                  boxShadow: "0 16px 32px rgba(27,67,50,0.1)",
                  borderColor: "rgba(199,107,60,0.3)",
                }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "rgba(27,67,50,0.08)" }}
                    whileHover={{ backgroundColor: "rgba(199,107,60,0.12)" }}
                    transition={{ duration: 0.25 }}
                  >
                    <Icon size={18} style={{ color: "#1B4332" }} />
                  </motion.div>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "#1B4332",
                      lineHeight: 1.3,
                    }}
                    className="text-lg"
                  >
                    {tool.title}
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {tool.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <span
                        className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: "#C76B3C" }}
                      />
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          color: "#4A4A4A",
                          lineHeight: 1.6,
                        }}
                        className="text-sm"
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
