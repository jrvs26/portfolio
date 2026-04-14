import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Reveal from "./components/Reveal";
import MouseGlow from "./components/MouseGlow";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonial";
import ChatBot from "./components/Chatbot";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";





function App() {


  useEffect(() =>{
    window.document.title = "Redc VA | IT"
  })



  return (
    <main className="relative min-h-screen text-white bg-black overflow-y-hidden scroll-smooth">
      <Toaster position="top-right" reverseOrder={false} />
      <MouseGlow />
      {/* GLOBAL BACKGROUND (ONE UNIFIED LAYER) */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/50 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full" />
      </div>

      <Navbar />

      <Reveal>
        <Hero />
      </Reveal>

      <Reveal>
        <About />
      </Reveal>

      <Reveal>
        <Services />
      </Reveal>

      <Reveal>
        <Testimonials />
      </Reveal>

      <Reveal>
        <Projects />
      </Reveal>

      <Reveal>
        <Contact />
      </Reveal>
      <ChatBot />
    </main>
  );
}

export default App;
