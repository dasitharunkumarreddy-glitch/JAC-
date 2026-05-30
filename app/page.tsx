import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Location from "./components/Location";
import Navbar from "./components/Navbar";
import SignatureDishes from "./components/SignatureDishes";
import Specialties from "./components/Specialties";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Specialties />
        <SignatureDishes />
        <Gallery />
        <WhyChooseUs />
        <Testimonials />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
