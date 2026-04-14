import { useState } from "react";
import { Button } from "../ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 w-full z-50 flex justify-center">
      {/* Floating glass container */}
      <div className="w-[92%] max-w-6xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-xl shadow-black/30">
        <div className="px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 font-bold text-white"
          >
            <Sparkles className="w-5 h-5 text-emerald-400" />
            <span className="text-lg tracking-wide">
              VA<span className="text-emerald-400">Rev</span>
            </span>
          </motion.div>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a href="#about" className="hover:text-white transition">About Me</a>
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button className="px-5 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-blue-500 text-white hover:opacity-90 transition" onClick={() => {
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              });
            }}>
              Let’s Work
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden px-6 pb-6 pt-2 border-t border-white/10"
          >
            <div className="flex flex-col gap-4 text-white/70">
              <a href="#services" className="hover:text-white">Services</a>
              <a href="#about" className="hover:text-white">About Me</a>
              <a href="#projects" className="hover:text-white">Projects</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <Button className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}>
                Hire Me (Let’s Work Together)
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}
