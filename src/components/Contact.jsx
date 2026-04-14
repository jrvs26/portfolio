import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Mail, User, MessageSquare } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGoogle,
} from "react-icons/fa";

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = async (e) => {
  e.preventDefault();
  setLoading(true);

  const toastId = toast.loading("Sending message...");

  const formData = new FormData(formRef.current);

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  try {
    const res = await fetch("https://project-lcx9g.vercel.app/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (result.success) {
      toast.success("Message sent successfully", { id: toastId });
      formRef.current.reset();
    } else {
      toast.error("Failed to send message", { id: toastId });
    }
  } catch (err) {
    toast.error("Server error", { id: toastId });
  }

  setLoading(false);
};
  return (
    <section id="contact" className="relative w-full py-24 text-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Let’s{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
              Work Together
            </span>
          </h2>
          <p className="mt-4 text-white/70">
            Send me a message or connect with me on social media.
          </p>
        </motion.div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
        >
          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">

            {/* NAME */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-black/30 border border-white/10">
              <User className="text-emerald-400" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full bg-transparent outline-none text-white"
                required
              />
            </div>

            {/* EMAIL */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-black/30 border border-white/10">
              <Mail className="text-emerald-400" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full bg-transparent outline-none text-white"
                required
              />
            </div>

            {/* MESSAGE */}
            <div className="flex items-start gap-3 p-4 rounded-xl bg-black/30 border border-white/10">
              <MessageSquare className="text-emerald-400 mt-1" />
              <textarea
                rows="5"
                name="message"
                placeholder="Your Message..."
                className="w-full bg-transparent outline-none text-white resize-none"
                required
              />
            </div>

            {/* BUTTON */}
            <Button
              type="submit"
              className="w-full py-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-blue-500 hover:opacity-90 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>

            {success && (
              <p className="text-green-400 text-center mt-2">
                Message sent successfully ✅
              </p>
            )}
          </form>

          {/* SOCIALS */}
          <div className="mt-10 text-center">
            <p className="text-white/60 mb-4">Or connect with me</p>

            <div className="flex justify-center gap-6 text-2xl">
              <a href="https://facebook.com/jarv.is0008" target="_blank" className="text-white/60 hover:text-blue-400 transition hover:scale-125">
                <FaFacebook />
              </a>

              <a href="https://instagram.com/jarv.is0008" target="_blank" className="text-white/60 hover:text-pink-400 transition hover:scale-125">
                <FaInstagram />
              </a>

              <a href="https://linkedin.com/in/jarvis26" target="_blank" className="text-white/60 hover:text-blue-300 transition hover:scale-125">
                <FaLinkedin />
              </a>

              <a href="mailto:redc1026@gmail.com" className="text-white/60 hover:text-red-400 transition hover:scale-125">
                <FaGoogle />
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}