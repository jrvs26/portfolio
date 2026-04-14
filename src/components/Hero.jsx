import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Sparkles, CheckCircle } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-24 md:pt-0">

            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)] bg-[size:60px_60px]" />

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6"
                >
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm text-white/80">Freelance Virtual Assistant | Available for Remote Work</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-4xl md:text-6xl font-bold leading-tight"
                >
                    Your Reliable <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Virtual Assistant</span>
                    <br />
                    for Organized, Stress-Free Business Operations
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                    className="mt-6 text-lg text-white/70 max-w-2xl mx-auto"
                >
                    I help entrepreneurs, freelancers, and business owners stay organized and productive by handling admin tasks,
                    scheduling, email management, customer support, and daily operations—so you can focus on growing your business.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.4 }}
                    className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Button onClick={() => {
                        document.getElementById("contact")?.scrollIntoView({
                            behavior: "smooth",
                        });
                    }} className="
                                        px-6 py-6 rounded-2xl
                                        bg-gradient-to-r from-emerald-500 to-blue-500
                                        hover:scale-105 transition
                                        shadow-lg shadow-emerald-500/20
">
                        Hire Me Now
                    </Button>
                </motion.div>

                {/* Feature highlights */}
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                    {[
                        { label: "Reliable Support", value: "Consistent Daily Assistance" },
                        { label: "Organized Workflow", value: "Inbox, Calendar & Tasks Managed" },
                        { label: "Client-Focused Service", value: "Tailored to Your Needs" },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 * i }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
                        >
                            <div className="text-2xl font-bold flex items-center justify-center gap-2">
                                <CheckCircle className="w-5 h-5 text-emerald-400" />
                                {item.value}
                            </div>
                            <div className="text-sm text-white/60 mt-1">{item.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}