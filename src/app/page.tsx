import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowWeWork from "@/components/HowWeWork";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
import Differentiators from "@/components/Differentiators";
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
      <Problem />
      <HowWeWork />
      <Projects />
      <Services />
      <Methodology />
      <Differentiators />
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
