import { motion } from "framer-motion";

import { CheckCircle, Mail, Calendar, Headphones, Database, Globe } from "lucide-react";

export default function Services() {
    return (
        <section
            id="services"
            className="relative w-full py-24 text-white overflow-hidden"
        >
            {/* Background glow */}
            <div className="absolute inset-0">
                <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold">
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Services</span>
                    </h2>
                    <p className="mt-4 text-white/70 max-w-2xl mx-auto">
                        I provide reliable virtual assistant services designed to help you save time,
                        stay organized, and focus on growing your business.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-3 gap-6">

                    {/* Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-left"
                    >
                        <Mail className="text-emerald-400" />
                        <h3 className="mt-4 font-semibold text-lg">Email Management</h3>
                        <p className="mt-2 text-white/60 text-sm">
                            Organizing inbox, responding to emails, filtering important messages, and keeping communication clean.
                        </p>
                        <div className="mt-4 flex items-center gap-2 text-sm text-white/60">
                            <CheckCircle className="w-4 h-4 text-emerald-400" /> Daily inbox handling
                        </div>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-left"
                    >
                        <Calendar className="text-emerald-400" />
                        <h3 className="mt-4 font-semibold text-lg">Scheduling & Calendar</h3>
                        <p className="mt-2 text-white/60 text-sm">
                            Managing appointments, meetings, reminders, and keeping your schedule organized.
                        </p>
                        <div className="mt-4 flex items-center gap-2 text-sm text-white/60">
                            <CheckCircle className="w-4 h-4 text-emerald-400" /> Time optimization
                        </div>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-left"
                    >
                        <Headphones className="text-emerald-400" />
                        <h3 className="mt-4 font-semibold text-lg">Customer Support</h3>
                        <p className="mt-2 text-white/60 text-sm">
                            Handling inquiries, assisting clients, and providing professional communication support.
                        </p>
                        <div className="mt-4 flex items-center gap-2 text-sm text-white/60">
                            <CheckCircle className="w-4 h-4 text-emerald-400" /> Client communication
                        </div>
                    </motion.div>

                    {/* Card 4 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-left"
                    >
                        <Database className="text-emerald-400" />
                        <h3 className="mt-4 font-semibold text-lg">Data Entry</h3>
                        <p className="mt-2 text-white/60 text-sm">
                            Accurate encoding, organizing spreadsheets, and maintaining clean records.
                        </p>
                        <div className="mt-4 flex items-center gap-2 text-sm text-white/60">
                            <CheckCircle className="w-4 h-4 text-emerald-400" /> Detail-focused work
                        </div>
                    </motion.div>

                    {/* Card 5 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-left"
                    >
                        <Globe className="text-emerald-400" />
                        <h3 className="mt-4 font-semibold text-lg">Website Support</h3>
                        <p className="mt-2 text-white/60 text-sm">
                            Basic website updates, troubleshooting, and content adjustments.
                        </p>
                        <div className="mt-4 flex items-center gap-2 text-sm text-white/60">
                            <CheckCircle className="w-4 h-4 text-emerald-400" /> Technical assistance
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}