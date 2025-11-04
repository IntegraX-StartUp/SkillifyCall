import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { VideoPitch } from "./components/VideoPitch";
import { Features } from "./components/Features";
import { AudienceSections } from "./components/AudienceSections";
import { Stats } from "./components/Stats";
import { Testimonials } from "./components/Testimonials";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <VideoPitch />
      <Features />
      <AudienceSections />
      <Stats />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
}
