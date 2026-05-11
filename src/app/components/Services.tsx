import { Megaphone, Newspaper, CalendarDays, GraduationCap, FlaskConical } from "lucide-react";
import { motion } from "motion/react";
import { fadeUp, staggerContainer, cardReveal, viewportConfig } from "./animations";

const services = [
  {
    icon: Megaphone,
    title: "Strategic Communications & Brand Building",
    description:
      "Let's figure out your long-term voice together. We design cross-channel digital strategies and social media campaigns that don't just look pretty — they actually grow your reach and get people talking.",
    color: "#1B4332",
  },
  {
    icon: Newspaper,
    title: "Public Relations",
    description:
      "We help you make friends in the right places. From managing media and building stakeholder relationships to newsletters, quarterly magazines, and annual reports — we keep your brand & work in the spotlight.",
    color: "#C76B3C",
  },
  {
    icon: CalendarDays,
    title: "Event Curation & Management",
    description:
      "Need to throw a massive international conference or a multi-city anniversary event? Don't stress. We handle everything from the big concepts down to the tiny logistical details, making sure attendees leave inspired.",
    color: "#1B4332",
  },
  {
    icon: GraduationCap,
    title: "Training & Facilitation",
    description:
      "We love sharing what we know. We design workshops on communications and brand building, and run sessions on everything from Gender Sensitivity and Social Emotional Learning (SEL) to arts-based behavioral change.",
    color: "#C76B3C",
  },
  {
    icon: FlaskConical,
    title: "Research",
    description:
      "We don't just Google things. We get our hands dirty with deep qualitative research, long-term ethnographic studies, and policy papers designed to create real, actionable change.",
    color: "#1B4332",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "#F0E8DA" }}
    >
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
            Services
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
            How We Can <em style={{ color: "#C76B3C" }}>Help You</em>
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
            Think of this as the menu of things we love to do for our partners.
          </motion.p>
        </div>

        {/* Cards grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {services.map((svc, i) => {
            const Icon = svc.icon;
            const isDark = svc.color === "#1B4332";
            return (
              <motion.div
                key={i}
                className="group rounded-2xl p-8 flex flex-col gap-5 cursor-default"
                style={{ backgroundColor: svc.color }}
                variants={cardReveal}
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.18)" }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    backgroundColor: isDark
                      ? "rgba(240,192,138,0.15)"
                      : "rgba(27,67,50,0.15)",
                  }}
                >
                  <Icon
                    size={22}
                    style={{ color: isDark ? "#F0C08A" : "#1B4332" }}
                  />
                </div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#FAF7F2",
                    lineHeight: 1.3,
                  }}
                  className="text-xl"
                >
                  {svc.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: isDark
                      ? "rgba(250,247,242,0.75)"
                      : "rgba(250,247,242,0.85)",
                    lineHeight: 1.7,
                  }}
                  className="text-sm flex-1"
                >
                  {svc.description}
                </p>
              </motion.div>
            );
          })}

          {/* CTA card */}
          <motion.div
            className="rounded-2xl p-8 flex flex-col justify-center items-center text-center gap-4"
            style={{ backgroundColor: "#FAF7F2", border: "2px dashed #C76B3C" }}
            variants={cardReveal}
            whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(199,107,60,0.12)" }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
          >
            <p
              style={{ fontFamily: "'Playfair Display', serif", color: "#1B4332" }}
              className="text-xl"
            >
              Have a challenge that doesn't fit a neat box?
            </p>
            <p
              style={{ fontFamily: "'Inter', sans-serif", color: "#5A5A5A" }}
              className="text-sm"
            >
              That's exactly the kind of problem we love. Let's talk.
            </p>
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                backgroundColor: "#C76B3C",
                color: "#FAF7F2",
                fontFamily: "'Inter', sans-serif",
              }}
              className="mt-2 px-6 py-2.5 rounded-full text-sm inline-block cursor-pointer"
              whileHover={{ scale: 1.05, backgroundColor: "#d97c50" }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              Reach Out
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
