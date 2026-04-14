import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { CheckCircle, Briefcase, ShieldCheck, Sparkles } from "lucide-react";

export default function About() {
    return (
        <section
            id="about"
            className="relative w-full py-24 text-white overflow-hidden"
        >
            {/* Background glow */}
            <div className="absolute inset-0">
                <div className="absolute top-1/3 left-1/2 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                {/* LEFT TEXT */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
                        <Sparkles className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm text-white/80">About Me</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                        Freelance <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Virtual Assistant</span> with a Tech Advantage
                    </h2>

                    <p className="mt-6 text-white/70 leading-relaxed">
                        I am a Freelance Virtual Assistant focused on helping entrepreneurs, freelancers, and business owners stay organized, productive, and stress-free. I handle essential administrative tasks such as scheduling, email management, data entry, and customer support to streamline daily operations.
                    </p>

                    <p className="mt-4 text-white/70 leading-relaxed">
                        With a strong background in IT Support and Web Development, I also provide technical assistance when needed—such as system troubleshooting, website updates, and digital tools management—allowing me to support modern business needs more effectively.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <Button className="px-6 py-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-blue-500 hover:opacity-90 transition" onClick={() => {
                            document.getElementById("contact")?.scrollIntoView({
                                behavior: "smooth",
                            });
                        }}>
                            Contact Me
                        </Button>

                    </div>
                </motion.div>

                {/* RIGHT CARDS */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid gap-6"
                >
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                        <div className="flex items-center gap-3">
                            <Briefcase className="text-emerald-400" />
                            <h3 className="font-semibold">Administrative Support</h3>
                        </div>
                        <p className="text-white/60 mt-2 text-sm">
                            Scheduling, email management, data entry, customer support, and workflow organization.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                        <div className="flex items-center gap-3">
                            <CheckCircle className="text-emerald-400" />
                            <h3 className="font-semibold">Tech-Savvy Assistance</h3>
                        </div>
                        <p className="text-white/60 mt-2 text-sm">
                            IT troubleshooting, website maintenance, system support, and digital tools management.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                        <div className="flex items-center gap-3">
                            <ShieldCheck className="text-emerald-400" />
                            <h3 className="font-semibold">Reliable & Confidential</h3>
                        </div>
                        <p className="text-white/60 mt-2 text-sm">
                            Professional, detail-oriented, and trustworthy support with strong attention to confidentiality.
                        </p>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}