import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Jojo Tobias (Global Electric Website)",
      role: "CEO",
      message:
        "Delivered a high-quality website that effectively presented our company’s services and past projects. The design was clean, professional, and well-structured, which helped us gain positive feedback and attract new clients online.",
    }
    
  ];

  return (
    <section
      id="testimonials"
      className="relative w-full py-24 text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Client{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
              Testimonials
            </span>
          </h2>

          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            What clients say about working with me as a Virtual Assistant.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-6">

          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="
                p-6 rounded-2xl 
                bg-white/5 border border-white/10 
                backdrop-blur-xl
                hover:bg-white/10 
                hover:scale-[1.02] 
                transition duration-300
              "
            >

              {/* Stars */}
              <div className="flex gap-1 text-emerald-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              {/* Message */}
              <p className="text-white/70 text-sm leading-relaxed">
                “{t.message}”
              </p>

              {/* Name */}
              <div className="mt-6">
                <h4 className="font-semibold">{t.name}</h4>
                <p className="text-white/50 text-xs">{t.role}</p>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}