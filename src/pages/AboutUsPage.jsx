'use client'

import { motion, LazyMotion, domAnimation } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
    Building2, Users, Trophy, Globe, Shield, Lightbulb,
    Award, Target, Zap, CheckCircle2, ArrowRight, Star
} from "lucide-react"
import { useEffect } from "react"
import BlurText from "@/components/BlurText"
import { useNavigate } from "react-router-dom"
import director from '@/assets/MuthuRaja.png'
import director1 from '@/assets/Mukesh.png'
import Footer from "@/layouts/Footer"

const AboutUsPage = () => {
    const navigate = useNavigate()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const container = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
    }

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
    }

    const values = [
        { icon: Shield, title: "Integrity", desc: "Highest ethical standards & transparency" },
        { icon: Lightbulb, title: "Innovation", desc: "Cutting-edge tech & modern methods" },
        { icon: Award, title: "Excellence", desc: "Quality beyond industry standards" },
        { icon: Users, title: "Collaboration", desc: "Strong partnerships for shared success" }
    ]

    return (
        <LazyMotion features={domAnimation}>
            <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 text-gray-800 overflow-hidden">
                {/* Hero Section */}
                <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 text-center mt-16 sm:mt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-7xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 sm:mb-6 bg-white/90 backdrop-blur rounded-full border border-orange-200 shadow-sm">
                            <Star className="w-4 h-4 text-orange-600" />
                            <span className="text-xs sm:text-sm font-medium text-orange-700">ABOUT US</span>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="mb-8 sm:mb-10"
                        >
                            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black tracking-tighter leading-tight">
                                <span className="block text-orange-900">Building Dreams,</span>
                                <span className="block text-amber-600 mt-1 sm:mt-2 md:mt-3 lg:-mt-4">Creating Legacies</span>
                            </h1>
                        </motion.div>

                        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-medium px-4">
                            Delivering reliable, innovative, and value-driven construction solutions across India.
                        </p>
                    </motion.div>
                </section>

                {/* Our Story */}
                <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-white via-orange-50/20 to-white">
                    <div className="absolute top-0 left-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[450px] lg:h-[450px] bg-orange-400/20 blur-[100px] sm:blur-[120px] lg:blur-[140px] rounded-full pointer-events-none"></div>
                    <div className="absolute bottom-0 right-0 w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] lg:w-[500px] lg:h-[500px] bg-amber-300/30 blur-[120px] sm:blur-[140px] lg:blur-[160px] rounded-full pointer-events-none"></div>

                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-20 items-center relative z-10">
                        {/* Left Content Block */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="px-4 sm:px-6 lg:px-0"
                        >
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                                <span className="bg-gradient-to-r from-gray-900 to-orange-600 bg-clip-text text-transparent">
                                    Leadership That
                                </span>
                                <br />
                                Inspires Excellence
                            </h2>

                            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 leading-relaxed">
                                MilestoneBuilders was established by two passionate professionals — Mukesh B.E(Surveyor), with 13+ years in surveying, and Muthuraja M.E(Geo-Technical), with 4 years of Geo-Technical expertise. Together, they combine experience and innovation to deliver precise engineering solutions with trust and integrity.
                            </p>

                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                transition={{ type: "spring", stiffness: 120 }}
                                onClick={() => navigate("/contact")}
                                className="mt-6 sm:mt-8 md:mt-10 px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all flex gap-2 items-center text-sm sm:text-base"
                            >
                                Contact Us <ArrowRight size={18} className="w-4 h-4 sm:w-5 sm:h-5" />
                            </motion.button>
                        </motion.div>

                        {/* Director Images */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-10 justify-center items-center px-4 sm:px-6 lg:px-0"
                        >
                            {[
                                { img: director1, name: "Mukesh - Director" },
                                { img: director, name: "Muthuraja - Director" }
                            ].map((person, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", damping: 12 }}
                                    className="relative group w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-[0_0_30px_-8px_rgba(255,136,0,0.45)] sm:shadow-[0_0_40px_-10px_rgba(255,136,0,0.45)] border-[2px] sm:border-[3px] border-white bg-white/40 backdrop-blur-xl"
                                >
                                    <img
                                        src={person.img}
                                        alt={person.name}
                                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                                    />

                                    <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/50 text-white backdrop-blur-md px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg">
                                        {person.name}
                                    </div>

                                    <div className="absolute inset-0 rounded-full border-2 border-orange-400/40 opacity-0 group-hover:opacity-100 blur-sm transition duration-500"></div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Vision & Mission */}
                <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
                        <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.4 }} className="h-full">
                            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-blue-100 h-full">
                                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                                    <div className="p-2 sm:p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg sm:rounded-xl">
                                        <Target className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold">Our Vision</h3>
                                </div>
                                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                                    To set the benchmark in sustainable construction through innovation, excellence, and integrity.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.4 }} className="h-full">
                            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-orange-200 h-full">
                                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                                    <div className="p-2 sm:p-3 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg sm:rounded-xl">
                                        <Zap className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold">Our Mission</h3>
                                </div>
                                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                                    Deliver exceptional engineering solutions with superior craftsmanship, safety, and value for every stakeholder.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Core Values */}
                <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white/50">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-orange-700 bg-clip-text text-transparent">
                            Core Values
                        </h2>
                        <p className="mt-2 sm:mt-4 text-gray-600 text-sm sm:text-base">The foundation of everything we do</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12">
                            {values.map((v, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -4 }}
                                    className="bg-white p-5 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-orange-100 text-center h-full"
                                >
                                    <v.icon className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-3 sm:mb-4 text-orange-600" />
                                    <h4 className="font-bold text-base sm:text-lg">{v.title}</h4>
                                    <p className="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2">{v.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 text-center">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-gradient-to-r from-orange-500 to-amber-500 p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-3xl shadow-2xl text-white"
                        >
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Ready to Build Together?</h2>
                            <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 opacity-95 px-2">
                                Let's turn your vision into reality with excellence and trust.
                            </p>
                            <div className="flex items-center justify-center">
                                <Button
                                    onClick={() => navigate(`/contact`)}
                                    size="lg"
                                    className="bg-white text-orange-600 hover:bg-gray-100 font-bold px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 rounded-full shadow-xl text-sm sm:text-base"
                                >
                                    Get Started Now <ArrowRight className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Footer */}
               <Footer  />
            </div>
        </LazyMotion>
    )
}

export default AboutUsPage