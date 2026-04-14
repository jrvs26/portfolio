import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { FaCode, FaGithub } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai"
import { SiReact, SiTailwindcss, SiFramer, SiGmail } from "react-icons/si";

export default function Projects() {
    return (
        <section
            id="projects"
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
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Projects</span>
                    </h2>
                    <p className="mt-4 text-white/70 max-w-2xl mx-auto">
                        A showcase of real work I’ve built and maintained, combining technical skills and practical business solutions.
                    </p>
                </motion.div>

                {/* PROJECT CARD */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
                >

                    <div className="flex flex-col md:flex-row gap-8">

                        {/* LEFT INFO */}
                        <div className="flex-1">
                            <div className="flex items-center gap-2 text-emerald-400">
                                <AiOutlineGlobal />
                                <span className="text-sm">Live Project</span>
                            </div>

                            <h3 className="text-2xl font-semibold mt-3">
                                Company Website – Global Electric Power Development Corporation
                            </h3>

                            <p className="mt-4 text-white/70">
                                Designed and developed a full company website using React and Tailwind CSS.
                                Responsible for system structure, UI design, deployment, and maintenance.
                            </p>

                            <div className="mt-6 flex flex-wrap gap-2 text-sm text-white/60">

                                <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10">
                                    <SiReact className="text-cyan-400" />
                                    React
                                </span>

                                <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10">
                                    <SiTailwindcss className="text-sky-400" />
                                    TailwindCSS
                                </span>

                                <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10">
                                    <SiFramer className="text-pink-400" />
                                    Framer Motion
                                </span>

                                <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10">
                                    <SiGmail className="text-red-400" />
                                    EmailJS
                                </span>

                            </div>

                            <div className="mt-6 flex gap-4">
                                <a
                                    href="https://globalelectricpowerdevcorp.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:text-black">
                                        View Live Site
                                    </Button>
                                </a>

                                <a href="https://github.com/jrvs26/globalelectric" 
                                target="_blank"
                                rel="noopener noreferrer">
                                    <Button variant="outline" className="border-white/20 text-white hover:text-black">
                                        <FaGithub className="w-4 h-4 mr-2" />
                                        Source Code
                                    </Button>
                                </a>
                            </div>
                        </div>

                        {/* RIGHT VISUAL */}
                        <div className="flex-1 p-6 rounded-xl bg-black/30 border border-white/10">
                            <div className="flex items-center gap-2 text-white/60">
                                <FaCode className="text-emerald-400" />
                                <span>Highlights</span>
                            </div>

                            <ul className="mt-4 space-y-3 text-white/70 text-sm">
                                <li>✔ Built full responsive company website</li>
                                <li>✔ Implemented React Router navigation</li>
                                <li>✔ Integrated EmailJS contact system</li>
                                <li>✔ Managed deployment & domain setup</li>
                                <li>✔ Ongoing maintenance & updates</li>
                            </ul>
                        </div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
}