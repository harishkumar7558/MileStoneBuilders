'use client'
import BlurText from '@/components/BlurText'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import { LazyMotion, domAnimation, motion } from "framer-motion"
import { ArrowRight, Award, Cable, Car, CheckCircle2, Landmark, MapPin, Pickaxe, Plane, Radio, Target, Train, TrendingUp, Users, Waves, Zap } from "lucide-react"

// Import images
import decorationImg from '@/assets/decoration.png'
import tallImg from '@/assets/landsurvey2.png'
import manImg from '@/assets/man (1).png'
import mechanicImg from '@/assets/mechanic.png'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '@/layouts/Footer'
// Client logos (replace with actual if needed)
const clientLogos = Array.from({ length: 16 }, (_, i) => ({
    src: `https://picsum.photos/200/100?random=${i + 10}`,
    alt: `Client ${i + 1}`
}))

const SurveyPage = () => {
    // Animation variants
    const navigate = useNavigate()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.3 }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
    }

    const cardMotion = {
        hidden: { opacity: 0, y: 30, scale: 0.96 },
        show: { opacity: 1, y: 0, scale: 1 }
    }

    const stats = [
        { value: "15+", label: "Years Experience", icon: TrendingUp },
        { value: "500+", label: "Projects Completed", icon: CheckCircle2 },
        { value: "100+", label: "Happy Clients", icon: Users },
        { value: "ISO", label: "9001:2008 Certified", icon: Award },
    ]

    const services = [
        { id: 1, title: "DPR Services", badge: "Planning", highlight: "Detailed project reporting and feasibility analysis.", icon: MapPin },
        { id: 2, title: "Aerial Survey", badge: "Drone", highlight: "High resolution drone mapping and LiDAR scanning.", icon: Plane },
        { id: 3, title: "Hydrology", badge: "Water", highlight: "Hydrological studies and water flow analysis.", icon: Waves },
        { id: 4, title: "Mining", badge: "Survey", highlight: "Mine planning, volume calculation, and compliance survey.", icon: Pickaxe },
        { id: 5, title: "Power Line Survey", badge: "Utility", highlight: "Transmission corridor mapping and analysis.", icon: Zap },
        { id: 6, title: "Railway Survey", badge: "Rail", highlight: "Railway alignment, clearance, and asset mapping.", icon: Train },
        { id: 7, title: "Roadways Survey", badge: "Infra", highlight: "Highway and smart mobility infrastructure surveying.", icon: Car },
        { id: 8, title: "Utility Mapping", badge: "GIS", highlight: "Underground and overhead asset mapping.", icon: Cable },
        { id: 9, title: "Land Survey", badge: "Topo", highlight: "Boundary mapping, contouring, and GIS documentation.", icon: Landmark },
        { id: 10, title: "Airport Survey", badge: "Aviation", highlight: "Obstacle limitation and runway design surveys.", icon: Plane },
        { id: 11, title: "Control Point Survey", badge: "GNSS", highlight: "Permanent reference station setup and calibration.", icon: Target },
        { id: 12, title: "GPR Survey", badge: "Ground Scan", highlight: "Ground Penetrating Radar scanning and analysis.", icon: Radio },
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
                        src={tallImg}
                        alt="Survey Team in Action"
                        className="absolute inset-0 w-full h-full object-cover object-center opacity-90"
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 20, ease: "linear" }}
                    />

                    {/* Overlay Content */}
                    <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                            <BlurText
                                text="Transform the future of construction withLeading Surveying & Construction Engineering Services Across India"
                                delay={200}
                                className="text-sm sm:text-xl flex items-center justify-center font-bold mt-10 text-orange-700 tracking-wider"
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
                                <span className="block text-amber-600 -mt-4 sm:-mt-14
                                ">Survey</span>
                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        >
                            <Button onClick={handleScroll} size="lg" className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold rounded-full px-10 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300">
                                Get Started <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <Button onClick={() => navigate(`/contact`)} size="lg" variant="outline" className="bg-white/90 backdrop-blur text-orange-600 border-2 border-orange-300 hover:bg-orange-50 rounded-full px-10 py-6 text-lg font-bold">
                                Explore Services
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

                {/* Stats Section */}
                {/* <section id="ExploreProject" className="py-16 px-6 bg-white/70 backdrop-blur">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-6"
                        >
                            {stats.map((stat, i) => {
                                const Icon = stat.icon
                                return (
                                    <motion.div key={i} variants={item} whileHover={{ scale: 1.05 }} className="text-center bg-white rounded-2xl p-6 shadow-lg border border-orange-100">
                                        <Icon className="w-10 h-10 text-orange-500 mx-auto mb-3" />
                                        <div className="text-3xl md:text-4xl font-black text-gray-900">{stat.value}</div>
                                        <p className="text-sm md:text-base text-gray-600 font-medium">{stat.label}</p>
                                    </motion.div>
                                )
                            })}
                        </motion.div>
                    </div>
                </section> */}

                {/* Services Grid */}
                <section id="ExploreProject" className="py-20 px-6">
                    <div className="max-w-7xl mx-auto flex justify-center items-center flex-col text-center mb-16">
                        <BlurText
                            text="Our Comprehensive Services"
                            delay={200}
                            className="text-4xl md:text-5xl font-extrabold text-orange-800"
                        />
                        <p className="text-gray-600 mt-4 text-lg">End-to-end solutions for infrastructure & development</p>
                    </div>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto relative"
                    >
                        <img src={decorationImg} alt="" className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-10 pointer-events-none" />

                        {services.map((service) => {
                            const Icon = service.icon
                            return (
                                <motion.div key={service.id} variants={cardMotion}>
                                    <Card className="h-full bg-white/90 backdrop-blur border border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300 group overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <CardHeader>
                                            <div className="flex items-start justify-between">
                                                <div className="p-3 bg-orange-100 rounded-xl group-hover:bg-orange-200 transition-colors">
                                                    <Icon className="w-8 h-8 text-orange-600" />
                                                </div>
                                                <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded-full">{service.badge}</span>
                                            </div>
                                            <CardTitle className="mt-4 text-xl font-bold">{service.title}</CardTitle>
                                            <CardDescription className="text-orange-700 font-medium">{service.highlight}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <Button onClick={() => navigate(`/contact`)} variant="outline" className="w-full rounded-full border-orange-400 text-orange-700 hover:bg-orange-600 hover:text-white transition-all">
                                                Learn More <ArrowRight className="ml-2 w-4 h-4" />
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </section>

                {/* Expertise Section */}
                <section className="py-20 px-6 bg-gradient-to-br from-orange-50 to-amber-50">
                    <div className="mx-auto flex justify-center items-center flex-col text-center mb-12">
                        <BlurText text="Our Expertise" className="text-4xl md:text-5xl flex justify-center whitespace-nowrap items-center flex-col font-extrabold text-orange-800" />
                        {/* <p className="text-gray-700 mt-4 text-lg">Delivering Excellence Since 2009</p> */}
                    </div>

                    <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                        {[
                            { img: manImg, title: "Expert Team", desc: "Highly skilled engineers & surveyors with decades of field experience" },
                            { img: mechanicImg, title: "Advanced Technology", desc: "Latest tools including drones, GPR, LiDAR , DGPS & total stations" }
                        ].map((card, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                whileHover={{ y: -8 }}
                                className="bg-white rounded-3xl shadow-xl overflow-hidden"
                            >
                                <div className="flex flex-col md:flex-row items-center">
                                    <img src={card.img} alt={card.title} className="w-full md:w-48 h-64 md:h-full object-cover" />
                                    <div className="p-8 text-center md:text-left">
                                        <h3 className="text-2xl font-bold text-orange-800 mb-3">{card.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{card.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Client Logos */}
                <section className="py-16 px-6 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <h3 className="text-center text-3xl font-bold text-gray-800 mb-10">Trusted by Leading Companies</h3>
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 opacity-70">
                            {clientLogos.map((logo, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.1 }}
                                    className="bg-gray-100 rounded-lg p-4 aspect-video flex items-center justify-center"
                                >
                                    <img src={logo.src} alt={logo.alt} className="max-w-full max-h-full object-contain" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

               <Footer  />


            </div>
        </LazyMotion>
    )
}

export default SurveyPage