import "../styles/fonts.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Expertise } from "./components/Expertise";
import { Experience } from "./components/Experience";
import { Clients } from "./components/Clients";
import { Team } from "./components/Team";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div
      className="min-h-screen w-full overflow-x-hidden"
      style={{ backgroundColor: "#FAF7F2" }}
    >
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Expertise />
      <Experience />
      <Clients />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}
