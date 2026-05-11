import { GraduationCap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import {
  fadeUp,
  staggerContainer,
  slideInLeft,
  slideInRight,
  viewportConfig,
} from "./animations";

const sukritiImg =
  "https://images.unsplash.com/photo-1642521684111-d5464d8fef88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHByb2Zlc3Npb25hbCUyMHNwZWFrZXIlMjBmYWNpbGl0YXRvciUyMHdvcmtzaG9wfGVufDF8fHx8MTc3ODQ5NDExNnww&ixlib=rb-4.1.0&q=80&w=1080";

const akashImg =
  "https://images.unsplash.com/photo-1774437790865-76bfb73d7166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBTb3V0aCUyMEFzaWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc4NDk0MTA4fDA&ixlib=rb-4.1.0&q=80&w=1080";

const team = [
  {
    name: "Sukriti Khurana",
    role: "Founder",
    img: sukritiImg,
    bio: "Sukriti is the heart of our training, research, and facilitation arm. She is incredibly skilled at understanding human behavior, specializing in Gender Sensitivity and Social Emotional Learning. Whether she is leading year-long field research studies or running arts-based workshops for large institutions, Sukriti makes sure the human element is never lost.",
    education: [
      "M.A. in Development — Azim Premji University",
      "M.A. in Psychology — IGNOU",
    ],
    tags: ["Gender Sensitivity", "SEL", "Ethnographic Research", "Facilitation"],
    variants: slideInLeft,
  },
  {
    name: "Akash Kumar",
    role: "Co-Founder",
    img: akashImg,
    bio: "Akash is your go-to guy for all things communications, media, and big-scale events. With over 8 years of experience working across CSR and industry associations, he knows exactly how to build relationships with global stakeholders and get the media's attention. He's the strategist who loves using data to prove that your stories are working.",
    education: [
      "8+ years in CSR & Industry Associations",
      "Global Stakeholder Relations",
    ],
    tags: ["Strategic Communications", "PR & Media", "Large-Scale Events", "CSR"],
    variants: slideInRight,
  },
];

export function Team() {
  return (
    <section id="team" className="py-24 lg:py-32" style={{ backgroundColor: "#FAF7F2" }}>
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
            Our Team
          </span>
        </motion.div>

        <motion.h2
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#1B4332",
            lineHeight: 1.2,
          }}
          className="text-4xl md:text-5xl mb-14 max-w-lg"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          Meet Your <em style={{ color: "#C76B3C" }}>New Partners</em>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              className="rounded-2xl overflow-hidden flex flex-col"
              style={{
                backgroundColor: "#fff",
                border: "1px solid rgba(27,67,50,0.1)",
              }}
              variants={member.variants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              whileHover={{ boxShadow: "0 24px 48px rgba(27,67,50,0.12)" }}
              transition={{ type: "spring", stiffness: 200, damping: 24 }}
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <motion.div
                  className="w-full h-full"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ImageWithFallback
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </motion.div>
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(27,67,50,0.75) 0%, transparent 55%)",
                  }}
                />
                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div
                    className="inline-block text-xs px-3 py-1 rounded-full mb-2"
                    style={{
                      backgroundColor: "rgba(199,107,60,0.9)",
                      color: "#FAF7F2",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {member.role}
                  </div>
                  <h3
                    style={{ fontFamily: "'Playfair Display', serif", color: "#FAF7F2" }}
                    className="text-2xl"
                  >
                    {member.name}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-7 flex flex-col gap-5 flex-1">
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#4A4A4A",
                    lineHeight: 1.75,
                  }}
                  className="text-sm"
                >
                  {member.bio}
                </p>

                {/* Education */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <GraduationCap size={15} style={{ color: "#C76B3C" }} />
                    <span
                      style={{ fontFamily: "'Inter', sans-serif", color: "#C76B3C" }}
                      className="text-xs tracking-wide uppercase"
                    >
                      Background
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {member.education.map((edu, j) => (
                      <li
                        key={j}
                        style={{ fontFamily: "'Inter', sans-serif", color: "#3A3A3A" }}
                        className="text-sm flex items-start gap-2"
                      >
                        <span
                          className="mt-2 w-1 h-1 rounded-full shrink-0"
                          style={{ backgroundColor: "#1B4332" }}
                        />
                        {edu}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <motion.div
                  className="flex flex-wrap gap-2 mt-auto pt-2"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportConfig}
                >
                  {member.tags.map((tag, j) => (
                    <motion.span
                      key={j}
                      className="text-xs px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: "rgba(27,67,50,0.08)",
                        color: "#1B4332",
                        fontFamily: "'Inter', sans-serif",
                      }}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={viewportConfig}
                      transition={{ delay: j * 0.07, duration: 0.35, ease: "easeOut" }}
                      whileHover={{
                        backgroundColor: "rgba(199,107,60,0.12)",
                        color: "#C76B3C",
                        scale: 1.05,
                      }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
