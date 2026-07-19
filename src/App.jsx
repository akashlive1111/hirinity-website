import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Industries from "./components/Industries";
import HowWeWork from "./components/HowWeWork";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Industries />
      <HowWeWork />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}

export default App;