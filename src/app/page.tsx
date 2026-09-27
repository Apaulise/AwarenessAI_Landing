import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HowWeWork from "@/components/HowWeWork";
import Projects from "@/components/Projects";
import Methodology from "@/components/Methodology";
import Results from "@/components/Results";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import RevealProvider from "@/components/RevealProvider";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Page() {
  return (
    <div style={{ position: "relative" }}>
      <Nav />
      <Hero />
      <HowWeWork />
      <Projects />
      <Methodology />
      <Results />
      <Faq />
      <FinalCta />
      <Contact />
      <Footer />
      <RevealProvider />
      <WhatsAppFloat />
    </div>
  );
}
