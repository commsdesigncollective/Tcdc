import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#FAF7F2]/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
          className="flex flex-col leading-tight"
        >
          <span
            style={{ fontFamily: "'Playfair Display', serif", color: "#1B4332" }}
            className="text-lg font-semibold tracking-tight"
          >
            The C&D Collective
          </span>
          <span
            style={{ fontFamily: "'Inter', sans-serif", color: "#C76B3C" }}
            className="text-xs tracking-widest uppercase"
          >
            Communication & Design
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              style={{ fontFamily: "'Inter', sans-serif", color: "#1A1A1A" }}
              className="text-sm tracking-wide hover:text-[#C76B3C] transition-colors duration-200 bg-transparent border-none cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#contact")}
            style={{ fontFamily: "'Inter', sans-serif", backgroundColor: "#1B4332", color: "#FAF7F2" }}
            className="text-sm px-5 py-2.5 rounded-full hover:bg-[#C76B3C] transition-colors duration-200 cursor-pointer border-none"
          >
            Let's Chat
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg text-[#1B4332]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-t border-[#1B4332]/10 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              style={{ fontFamily: "'Inter', sans-serif", color: "#1A1A1A" }}
              className="text-sm tracking-wide text-left hover:text-[#C76B3C] transition-colors bg-transparent border-none cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#contact")}
            style={{ fontFamily: "'Inter', sans-serif", backgroundColor: "#1B4332", color: "#FAF7F2" }}
            className="text-sm px-5 py-2.5 rounded-full hover:bg-[#C76B3C] transition-colors duration-200 cursor-pointer border-none w-fit"
          >
            Let's Chat
          </button>
        </div>
      )}
    </motion.header>
  );
}