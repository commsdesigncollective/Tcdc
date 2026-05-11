export function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="py-10 px-6 lg:px-10"
      style={{ backgroundColor: "#111E18", borderTop: "1px solid rgba(250,247,242,0.08)" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span
            style={{ fontFamily: "'Playfair Display', serif", color: "#FAF7F2" }}
            className="text-base"
          >
            The Communication & Design Collective
          </span>
          <span
            style={{ fontFamily: "'Inter', sans-serif", color: "rgba(250,247,242,0.45)" }}
            className="text-xs"
          >
            New Delhi, India · commsdesigncollective@gmail.com
          </span>
        </div>

        <nav className="flex flex-wrap justify-center gap-6">
          {[
            { label: "About", href: "#about" },
            { label: "Services", href: "#services" },
            { label: "Team", href: "#team" },
            { label: "Contact", href: "#contact" },
          ].map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              style={{ fontFamily: "'Inter', sans-serif", color: "rgba(250,247,242,0.5)" }}
              className="text-xs tracking-wide hover:text-[#F0C08A] transition-colors bg-transparent border-none cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <p
          style={{ fontFamily: "'Inter', sans-serif", color: "rgba(250,247,242,0.3)" }}
          className="text-xs"
        >
          © {year} C&D Collective. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
