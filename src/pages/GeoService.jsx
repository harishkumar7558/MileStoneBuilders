'use client'

import BlurText from '@/components/BlurText'
import LogoLoop from '@/components/LogoLoop'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { LazyMotion, domAnimation, motion, useInView } from "framer-motion"
import {
    ArrowRight, Award, BadgeCheck, Building2, FlaskConical, Hammer, Layers,
    MapPin, PenTool, Phone, Ruler, ShieldCheck, Users, CheckCircle2, Globe,
    Wrench, Target, Clock, HardHat, Star, ChevronRight, User, Shield, Zap, TrendingUp, FileText, MailPlus
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

// Images
import tall from '@/assets/geobuilders.png'
import handImg from '@/assets/hand.jpg'
import soilInvestigation1Img from '@/assets/soil-investigation-1.jpg'
import soliInvestigationImg from '@/assets/soli-investigation.jpg'
import soilTestingImg from '@/assets/soil-testing.jpg'
import structuralImg from '@/assets/structural.jpg'
import planningImg from '@/assets/planing.jpg'
import builderconstructure from '@/assets/builderconstructure.jpg'
import allcivil from '@/assets/allcivil.jpg'
import { useNavigate } from 'react-router-dom'
import Footer from '@/layouts/Footer'
// Mock client logos
const clientLogos = [
    "L&T", "CMRL", "Southern Railway", "RITES", "NBCC", "CPWD", "TNEB", "SIDCO"
].map(name => ({
    src: `https://placehold.co/160x100/2D3748/FFFFFF?text=${encodeURIComponent(name)}`,
    alt: name,
    link: "#"
}))

const GeoService = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    const navigate = useNavigate()

    const servicesAccordion = [
        {
            icon: Layers,
            value: "item-1",
            title: "Soil Investigation for Major Projects",
            img: soilInvestigation1Img,
            gradient: "from-amber-600 to-orange-700",
            subtitle: "Trusted by L&T, CMRL, Southern Railway & More",
            highlights: [
                "150+ Major Infrastructure Projects",
                "Chennai Metro Rail Limited (CMRL)",
                "Dholera International Airport",
                "National Highway Projects (NH45, NH47)",
                "72+ Bridges & Elevated Corridors",
                "Telecom Towers Across Tamil Nadu"
            ]
        },
        {
            icon: ShieldCheck,
            value: "item-2",
            title: "Geotechnical Investigation & Analysis",
            img: soliInvestigationImg,
            gradient: "from-blue-600 to-cyan-700",
            subtitle: "ASTM | IS | IRC Compliant Testing",
            highlights: [
                "Deep Boreholes up to 60m Depth",
                "Seismic Refraction & MASW Surveys",
                "Bearing Capacity & Settlement Analysis",
                "Liquefaction Risk Assessment",
                "Slope Stability & Retaining Wall Design"
            ]
        },
        {
            icon: FlaskConical,
            value: "item-3",
            title: "NABL Accredited Soil & Material Testing Lab",
            img: soilTestingImg,
            gradient: "from-purple-600 to-pink-700",
            subtitle: "Precision Testing | Fast Reporting",
            highlights: [
                "SPT, CPT, Plate Load & Cyclic Plate Load Tests",
                "Triaxial UU/CU/CD, Direct Shear, Consolidation",
                "CBR, Proctor, Permeability & Chemical Analysis",
                "Thermal & Electrical Resistivity Testing",
                "Third-Party Quality Verification"
            ]
        },
        {
            icon: Ruler,
            value: "item-4",
            title: "Structural Design & Detailing",
            img: structuralImg,
            gradient: "from-emerald-600 to-teal-700",
            subtitle: "IS 456 | IS 1893 | IS 3370 Compliant Designs",
            highlights: [
                "High-Rise Buildings & Industrial Structures",
                "Seismic & Wind-Resistant Designs",
                "Steel Plants, ETPs & Power Plant Foundations",
                "Overhead Water Tanks & Silos",
                "Structural Audit & Retrofitting Solutions"
            ]
        },
        {
            icon: PenTool,
            value: "item-5",
            title: "Architectural Planning & Cost Optimization",
            img: planningImg,
            gradient: "from-rose-600 to-red-700",
            subtitle: "From Concept to Completion",
            highlights: [
                "3D Modeling & Virtual Walkthroughs",
                "Detailed BOQ & Rate Analysis",
                "Tender Documentation & Bid Support",
                "Value Engineering & Cost Optimization",
                "Green Building & Vaastu Compliance"
            ]
        },
        {
            icon: Building2,
            value: "item-6",
            title: "Government & Institutional Contracting",
            img: builderconstructure,
            gradient: "from-indigo-600 to-purple-700",
            subtitle: "Empaneled with CPWD | RITES | NBCC | MES",
            highlights: [
                "Tamil Nadu Electricity Board (TNEB)",
                "Police Housing & SIDCO Projects",
                "Slum Clearance Board Developments",
                "Educational & Healthcare Facilities",
                "Turnkey Civil Construction"
            ]
        },
        {
            icon: Hammer,
            value: "item-7",
            title: "Complete Civil Construction Services",
            img: allcivil,
            gradient: "from-orange-600 to-amber-700",
            subtitle: "End-to-End Project Execution",
            highlights: [
                "Piling, Foundation & RCC Structures",
                "Industrial Flooring & Waterproofing",
                "Roads, Bridges & Flyovers",
                "Renovation & Rebuilding Works",
                "Quality Control & Safety Compliance"
            ]
        }
    ]

    const stats = [
        { icon: Target, value: 500, suffix: "+", label: "Projects Delivered" },
        { icon: Users, value: 50, suffix: "+", label: "Expert Team Members" },
        { icon: Clock, value: 15, suffix: "+", label: "Years of Excellence" },
        { icon: Award, value: "ISO", label: "9001:2015 Certified", static: true },
    ]

    const [counters, setCounters] = useState(stats.map(s => s.static ? s.value : 0))
    const statsRef = useRef(null)
    const inView = useInView(statsRef, { once: true, margin: "-100px" })

    useEffect(() => {
        if (!inView) return
        stats.forEach((stat, i) => {
            if (stat.static) return
            let count = 0
            const increment = Math.ceil(stat.value / 60)
            const timer = setInterval(() => {
                count += increment
                if (count >= stat.value) {
                    count = stat.value
                    clearInterval(timer)
                }
                setCounters(prev => {
                    const newArr = [...prev]
                    newArr[i] = count
                    return newArr
                })
            }, 30)
        })
    }, [inView])

    const coreValues = [
        { icon: Shield, title: "Integrity First", desc: "Transparent reporting, ethical practices, and zero data manipulation." },
        { icon: Zap, title: "Speed & Precision", desc: "48-hour preliminary reports; <7-day full analysis. Accuracy >99.5%." },
        { icon: TrendingUp, title: "Sustainable Engineering", desc: "Eco-conscious site planning, soil stabilization, and low-impact methods." },
        { icon: User, title: "Client-Centric Approach", desc: "Dedicated project manager, weekly updates, and 24/7 technical support." }
    ]

    const testimonials = [
        { name: "R. Senthil Kumar", role: "Project Director, L&T Metro Rail", quote: "Geo Build’s soil analysis for CMRL Phase-II prevented ₹22Cr in potential foundation redesigns. Their data saved time and lives.", rating: 5 },
        { name: "Dr. Ananya Iyer", role: "Chief Architect, Urbanova Designs", quote: "Their structural team optimized our 32-storey tower design, cutting material cost by 18% without compromising safety.", rating: 5 },
        { name: "S. Vijayakumar", role: "Executive Engineer, PWD Tamil Nadu", quote: "Reliable, NABL-compliant testing with court-admissible reports. Our go-to for all government tenders.", rating: 5 }
    ]

    const milestones = [
        { year: "2010", title: "Founded", desc: "Started as a soil testing lab in Chennai." },
        { year: "2014", title: "NABL Accreditation", desc: "First private lab in TN for geotech testing." },
        { year: "2017", title: "CMRL Partnership", desc: "Became preferred vendor for Chennai Metro." },
        { year: "2021", title: "Pan-India Expansion", desc: "Opened labs in Delhi, Hyderabad & Bangalore." },
        { year: "2024", title: "500+ Projects", desc: "Served 200+ clients across 18 states." },
        { year: "2025", title: "AI-Powered Reporting", desc: "Launched GeoAI™ for predictive soil behavior modeling." }
    ]

    const faqs = [
        { question: "How soon can I get a soil report?", answer: "Preliminary report in 48 hours. Full  report with analysis in 5–7 working days. Emergency 24-hr service available." },
        { question: "Do you work on small residential projects?", answer: "Yes! We offer scaled packages for homes, villas, and farmhouses — starting at ₹8,999 (incl. 3 boreholes & basic analysis)." },
        { question: "Are your reports accepted by government authorities?", answer: "100%. Our reports comply with CPWD, TNHB, RERA, and court standards. We’re empaneled with 12+ state departments." },
        { question: "What makes your lab different?", answer: "On-site lab vans for real-time testing\nAI-powered anomaly detection\nFree retesting if dispute arises" }
    ]

    const handleScroll = () => {
        document.getElementById("ExploreProject")?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <LazyMotion features={domAnimation}>
            <div className="relative min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 font-sans overflow-x-hidden">

                {/* Hero Section */}
                <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

                    {/* Background Image */}
                    <motion.img
                        src={tall}
                        alt="Survey Team in Action"
                        className="absolute inset-0 w-full h-full object-cover object-center opacity-90"
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 20, ease: "linear" }}
                    />

                    {/* Overlay Content */}
                    <div className="relative z-10 text-center px-6 max-w-7xl mx-auto mt-12">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                            <BlurText
                                text="Transform the future of construction withLeading Geo-Technical & Construction Engineering Services Across India"
                                delay={200}
                                className="text-xs sm:text-xl flex items-center justify-center font-bold mt-10 text-orange-700 tracking-wider"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="mb-10"
                        >
                            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter">
                                <span className="block text-orange-900">Milestone</span>
                                <span className="block text-amber-600 -mt-4 sm:-mt-14">Geo Service</span>
                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1 }}
                            className="flex flex-col p-4 sm:flex-row gap-4 justify-center items-center"
                        >
                            <Button onClick={handleScroll} size="lg" className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold rounded-full px-10 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300">
                                Get Started <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <Button onClick={() => navigate("/contact")} size="lg" variant="outline" className="bg-transparent backdrop-blur text-orange-600 border-2 border-orange-300 hover:bg-orange-50 rounded-full px-10 py-6 text-lg font-bold">
                                Consultation
                            </Button>
                        </motion.div>
                    </div>

                    {/* Scroll Indicator */}
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute sm:bottom-8 bottom-4 left-1/2 -translate-x-1/2"
                    >
                        <div className="w-6 h-10 border-2 border-orange-500 rounded-full flex items-start justify-center p-2">
                            <motion.div
                                animate={{ y: [0, 12, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="w-1.5 h-1.5 bg-orange-500 rounded-full"
                            />
                        </div>
                    </motion.div>
                </section>


                {/* Why Choose Us */}
                <section id='ExploreProject' className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <motion.div className="text-center mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                            <BlurText text="Why India Trusts MilestoneBuilders" className="text-4xl  flex items-center justify-center md:text-5xl font-black text-orange-800" delay={100} />
                            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
                                We don’t just test soil — we de-risk your entire project with science, experience, and integrity.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-12 items-center justify-center">
                            <motion.div className='h-80 w-80 flex items-center justify-center mx-auto' initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                                <img src={handImg} alt="Expert team at work" className="rounded-3xl shadow-amber-500  shadow-2xl w-full" />
                            </motion.div>
                            <div className="space-y-8">
                                {[


                                    { icon: Wrench, title: "End-to-End Ownership", desc: "From site investigation → lab testing → design validation → construction QC. One team. Zero handoff risks." }
                                ].map((item, i) => {
                                    const Icon = item.icon
                                    return (
                                        <div key={i} className="flex items-start gap-6">
                                            <Icon className="w-12 h-12 text-amber-600 mt-1 flex-shrink-0" />
                                            <div>
                                                <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                                                <p className="mt-3 text-lg text-gray-700">{item.desc}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Values, Services, Milestones, Testimonials, Clients, FAQ, CTA, Footer */}
                {/* (All sections below are unchanged except minor fixes — full code continues) */}

                {/* Core Values */}
                <section className="py-24 bg-gradient-to-br from-amber-50 to-orange-100">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <BlurText text="Our Engineering Philosophy" className="text-4xl flex items-center justify-center md:text-5xl font-black text-orange-800" delay={100} />
                            <p className="mt-6 text-xl text-gray-600">Built on 4 pillars that define every project we touch.</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {coreValues.map((val, i) => {
                                const Icon = val.icon
                                return (
                                    <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                                        className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100 hover:shadow-xl transition-shadow">
                                        <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-6">
                                            <Icon className="w-8 h-8 text-amber-700" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{val.title}</h3>
                                        <p className="text-gray-700">{val.desc}</p>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>
                </section>







                {/* Client Logos
                <section className="py-16 ">
                    <div className="text-center mb-12">
                        <BlurText text="Our Esteemed Clients & Partners" className="text-4xl font-black text-gray-800" />
                        <p className="mt-4 text-xl text-gray-600">500+ Successful Projects Across Public & Private Sectors</p>
                    </div>
                    <LogoLoop logos={clientLogos} speed={100} logoHeight={120} gap={50} scaleOnHover />
                </section> */}

                {/* FAQ */}
                <section className="py-24 ">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <BlurText text="Frequently Asked Questions" className="text-4xl flex items-center justify-center  font-black text-orange-800" delay={100} />
                            <p className="mt-6 text-xl text-gray-600">Quick answers to help you get started.</p>
                        </div>
                        <Accordion type="multiple" className="space-y-4">
                            {faqs.map((faq, i) => (
                                <AccordionItem key={i} value={`faq-${i}`} className="border-0">
                                    <AccordionTrigger className="text-left px-6 py-5 bg-gray-50 hover:bg-amber-50 rounded-2xl text-lg font-semibold">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="px-6 pb-5 pt-2 text-gray-700">
                                        {faq.answer.split('\n').map((line, idx) => (
                                            <div key={idx} className="block">
                                                {line.startsWith('NABL') || line.startsWith('On-site') || line.startsWith('AI-powered') || line.startsWith('Free') ? (
                                                    <div className="flex items-start gap-2 mb-1">
                                                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                                        {line}
                                                    </div>
                                                ) : line}
                                            </div>
                                        ))}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-32 bg-gradient-to-r from-orange-700 via-amber-600 to-orange-700 text-white text-center">
                    <div className="max-w-5xl mx-auto px-6">
                        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl md:text-6xl font-black mb-6">
                            Ready to Build on Solid Ground?
                        </motion.h2>
                        <p className="text-l md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto">
                            Get your <span className="font-bold">free geotechnical consultation</span> and <span className="underline">preliminary soil report within 48 hours</span>.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <Button onClick={() => navigate(`/contact`)} size="lg" className="bg-white text-orange-700 hover:bg-gray-100 font-bold text-lg px-10 py-7 rounded-full shadow-2xl transform hover:scale-105 transition">
                                Start Your Project Now <ArrowRight className="ml-3 h-5 w-5" />
                            </Button>
                            <a href="tel:+916369051199">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-white text-black bg-transparent hover:text-white hover:bg-white/20 font-bold text-xl px-10 py-7 rounded-full flex items-center"
                                >
                                    <Phone className="mr-2 h-5 w-5" /> +91 63690 51199
                                </Button>
                            </a>

                        </div>
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}
                            className="mt-12 flex items-center justify-center gap-4 text-amber-100">
                            <FileText className="h-6 w-6" />
                            <span>No-obligation site visit • Free BOQ estimate • 100% confidential</span>
                        </motion.div>
                    </div>
                </section>

                <Footer  />
            </div>
        </LazyMotion>
    )
}

export default GeoService