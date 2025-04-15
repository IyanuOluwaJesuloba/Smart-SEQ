
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CounterStats from "@/components/CounterStats";
import Portfolio from "@/components/Portfolio";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <CounterStats />
      <Portfolio />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
