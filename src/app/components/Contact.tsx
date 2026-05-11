import { Mail, MapPin, Coffee } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import {
  fadeUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  cardReveal,
  viewportConfig,
} from "./animations";

const infoItems = [
  {
    icon: Mail,
    label: "Email us",
    value: "commsdesigncollective@gmail.com",
    href: "mailto:commsdesigncollective@gmail.com",
  },
  {
    icon: MapPin,
    label: "Find us in",
    value: "New Delhi, India",
    href: null,
  },
  {
    icon: Coffee,
    label: "Coffee preference",
    value: "Virtual or in-person — your call!",
    href: null,
  },
];

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Hey from ${formData.name}!`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.open(
      `mailto:commsdesigncollective@gmail.com?subject=${subject}&body=${body}`,
      "_blank"
    );
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 lg:py-32" style={{ backgroundColor: "#1B4332" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
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
            Contact Us
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
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
              Let's Grab a Coffee{" "}
              <em style={{ color: "#F0C08A" }}>(Virtually or In-Person!)</em>
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "rgba(250,247,242,0.75)",
                lineHeight: 1.7,
              }}
              className="text-base mb-10"
            >
              Have a project you're stressing over? Or maybe just an idea you want to
              bounce off someone? Reach out. That's what friends are for.
            </p>

            <motion.div
              className="space-y-5"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              {infoItems.map((item, i) => {
                const Icon = item.icon;
                const inner = (
                  <motion.div
                    key={i}
                    className="flex items-center gap-4 group"
                    variants={cardReveal}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  >
                    <motion.div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "rgba(199,107,60,0.2)" }}
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(199,107,60,0.35)" }}
                      transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    >
                      <Icon size={18} style={{ color: "#F0C08A" }} />
                    </motion.div>
                    <div>
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          color: "rgba(250,247,242,0.55)",
                        }}
                        className="text-xs tracking-wide uppercase block mb-0.5"
                      >
                        {item.label}
                      </span>
                      <span
                        style={{ fontFamily: "'Inter', sans-serif", color: "#FAF7F2" }}
                        className="text-sm group-hover:text-[#F0C08A] transition-colors"
                      >
                        {item.value}
                      </span>
                    </div>
                  </motion.div>
                );

                return item.href ? (
                  <a key={i} href={item.href} className="no-underline block">
                    {inner}
                  </a>
                ) : (
                  <div key={i}>{inner}</div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right – Form */}
          <motion.div
            className="rounded-2xl p-8 lg:p-10"
            style={{
              backgroundColor: "rgba(250,247,242,0.06)",
              border: "1px solid rgba(250,247,242,0.12)",
            }}
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {submitted ? (
              <motion.div
                className="flex flex-col items-center justify-center gap-4 h-full py-12 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "rgba(199,107,60,0.25)" }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
                >
                  <Coffee size={28} style={{ color: "#F0C08A" }} />
                </motion.div>
                <h3
                  style={{ fontFamily: "'Playfair Display', serif", color: "#FAF7F2" }}
                  className="text-2xl"
                >
                  Your email is opening!
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "rgba(250,247,242,0.7)",
                  }}
                  className="text-sm"
                >
                  We can't wait to chat with you.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3
                  style={{ fontFamily: "'Playfair Display', serif", color: "#FAF7F2" }}
                  className="text-2xl mb-1"
                >
                  Drop us a note
                </h3>

                {[
                  {
                    label: "Your Name",
                    type: "text",
                    key: "name",
                    placeholder: "Jane Doe",
                  },
                  {
                    label: "Email Address",
                    type: "email",
                    key: "email",
                    placeholder: "jane@yourorg.com",
                  },
                ].map((field) => (
                  <div key={field.key} className="flex flex-col gap-1.5">
                    <label
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        color: "rgba(250,247,242,0.65)",
                      }}
                      className="text-xs tracking-wide uppercase"
                    >
                      {field.label}
                    </label>
                    <motion.input
                      type={field.type}
                      required
                      value={formData[field.key as keyof typeof formData]}
                      onChange={(e) =>
                        setFormData({ ...formData, [field.key]: e.target.value })
                      }
                      placeholder={field.placeholder}
                      className="rounded-xl px-4 py-3 text-sm outline-none"
                      style={{
                        backgroundColor: "rgba(250,247,242,0.08)",
                        border: "1px solid rgba(250,247,242,0.15)",
                        color: "#FAF7F2",
                        fontFamily: "'Inter', sans-serif",
                      }}
                      whileFocus={{
                        borderColor: "rgba(240,192,138,0.6)",
                        backgroundColor: "rgba(250,247,242,0.12)",
                      }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                ))}

                <div className="flex flex-col gap-1.5">
                  <label
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: "rgba(250,247,242,0.65)",
                    }}
                    className="text-xs tracking-wide uppercase"
                  >
                    What's on your mind?
                  </label>
                  <motion.textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us about your project, challenge, or just say hi..."
                    className="rounded-xl px-4 py-3 text-sm outline-none resize-none"
                    style={{
                      backgroundColor: "rgba(250,247,242,0.08)",
                      border: "1px solid rgba(250,247,242,0.15)",
                      color: "#FAF7F2",
                      fontFamily: "'Inter', sans-serif",
                    }}
                    whileFocus={{
                      borderColor: "rgba(240,192,138,0.6)",
                      backgroundColor: "rgba(250,247,242,0.12)",
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </div>

                <motion.button
                  type="submit"
                  style={{
                    backgroundColor: "#C76B3C",
                    color: "#FAF7F2",
                    fontFamily: "'Inter', sans-serif",
                  }}
                  className="w-full py-3.5 rounded-xl text-sm tracking-wide cursor-pointer border-none mt-1"
                  whileHover={{ scale: 1.02, backgroundColor: "#d97c50" }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  Send Message →
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
