import About from "./Components/About";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact";
import video from "../public/background4.mp4";
import Footer from "./Components/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Experience from "./Components/Experience";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="relative min-h-screen text-white">
      {/* <!-- خلفية --> */}
      <div className="balls fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          src={video}
          className="w-full h-full object-cover"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* <!-- تغبيش --> */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 backdrop-blur-sm bg-black/80"></div>

      <Header />
      <HeroSection />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
