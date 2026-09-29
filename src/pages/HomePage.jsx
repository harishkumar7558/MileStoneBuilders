'use client'
import BlurText from '@/components/BlurText'
import LogoLoop from '@/components/LogoLoop'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LazyMotion, domAnimation, motion } from "framer-motion"
import { ArrowRight, Award, BadgeCheck, Building2, FlaskConical, Hammer, Layers, MapPin, PenTool, Phone, Ruler, ShieldCheck, Users } from 'lucide-react'
// Images
import checkImg from '@/assets/check.png'
import client1Img from '@/assets/client-1.jpg'
import client10Img from '@/assets/client-10.jpg'
import client11Img from '@/assets/client-11.jpg'
import client12Img from '@/assets/client-12.jpg'
import client13Img from '@/assets/client-13.jpg'
import client14Img from '@/assets/client-14.jpg'
import client15Img from '@/assets/client-15.jpg'
import client16Img from '@/assets/client-16.jpg'
import client2Img from '@/assets/client-2.jpg'
import client3Img from '@/assets/client-3.jpg'
import client4Img from '@/assets/client-4.jpg'
import client5Img from '@/assets/client-5.jpg'
import client6Img from '@/assets/client-6.jpg'
import client7Img from '@/assets/client-7.jpg'
import client8Img from '@/assets/client-8.jpg'
import client9Img from '@/assets/client-9.jpg'
import decorationImg from '@/assets/decoration.png'
import globeImg from '@/assets/globe.png'
import handImg from '@/assets/hand.jpg'
import imgesImg from '@/assets/imges.png'
import manImg from '@/assets/man (1).png'
import mechanicImg from '@/assets/mechanic.png'
import qualityImg from '@/assets/quality.jpg'
import tall from '@/assets/tall.png'
// Service Images
import allcivil from '@/assets/allcivil.jpg'
import builderconstructure from '@/assets/builderconstructure.jpg'
import planingImg from '@/assets/planing.jpg'
import soilInvestigation1Img from '@/assets/soil-investigation-1.jpg'
import soilTestingImg from '@/assets/soil-testing.jpg'
import soliInvestigationImg from '@/assets/soli-investigation.jpg'
import structuralImg from '@/assets/structural.jpg'
import { CheckCircle2 } from 'lucide-react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '@/layouts/Footer'

// Client Logos (replace with real ones later)
const clientLogos = Array.from({ length: 16 }, (_, i) => ({
    src: `https://picsum.photos/200/100?random=${i + 20}`,
    alt: `Client ${i + 1}`
}))

const HomePage = () => {
    const navigate = useNavigate()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const container = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
    }

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    }

    const cardMotion = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        show: { opacity: 1, y: 0, scale: 1 }
    }



    const keyPersonnel = [
    {
        name: 'Mr. Jebastin Daniel M.E(Structural)',
        experience: '13 Years of Experience',
        role: 'Structural Designer',
        highlight: true, // this one is centered at the top
    },
    {
        name: 'Mr. M.Mukesh B.E(Civil)',
        experience: '13 Years of Experience',
        role: 'Surveyor',
    },
    {
        name: 'Mr. M.MuthuRaja Thivakar M.E(GeoTech)',
        experience: '4 Years of Experience',
        role: 'GeoTechnical Engineer',
        qualification: '',
    },
    {
        name: 'Mr. M.MuthuRaja Thivakar M.E(GeoTech)',
        experience: '4 Years of Experience',
        role: 'GeoTechnical Engineer',
        qualification: '',
    },
    {
        name: 'Dr. N. Chandrasekar',
        experience: '',
        role: 'Sr. Geologist',
        qualification: 'ISO/IEC 17025:2017 Compliance Testing Services',
        specialization:
            'All Types of Soil, Water & Rock Testing | Accurate, Reliable & Professional Geological Field & Lab Testing',
    },
];

    const servicesAccordion = [
        {
            icon: Hammer,
            value: "item-7",
            title: "Complete Civil Engineering Works",
            img: allcivil,
            gradient: "from-orange-500 to-amber-600",
            subtitle: "Turnkey Construction Solutions",
            content: [
                "Piling, foundation & RCC works",
                "Roads, bridges & corridors",
                "Industrial flooring & waterproofing",
                "Renovation & rebuilding",
                "Third-party quality testing",
            ],
        },
        {
            icon: Building2,
            value: "item-6",
            title: "Builders & Government Contractors",
            img: builderconstructure,
            gradient: "from-indigo-500 to-purple-600",
            subtitle: "Empaneled with CPWD, RITES, NBCC, MES",
            content: [
                "Tamil Nadu Electricity Board (TNEB)",
                "Tamil Nadu Housing & Police Housing",
                "SIDCO & Slum Clearance Board",
                "Multiple private developers",
            ],
        },
        {
            icon: PenTool,
            value: "item-5",
            title: "Architectural Planning & Estimation",
            img: planingImg,
            gradient: "from-rose-500 to-red-600",
            subtitle: "From Concept to Costing",
            content: [
                "Detailed architectural & structural drawings",
                "BOQ preparation & rate analysis",
                "3D modeling & walkthroughs",
                "Tender documentation",
                "Value engineering & cost optimization",
            ],
        },
        {
            icon: Ruler,
            value: "item-4",
            title: "Structural Design & Detailing",
            img: structuralImg,
            gradient: "from-emerald-500 to-teal-600",
            subtitle: "Earthquake & Wind Resistant Designs",
            content: [
                "High-rise buildings & industrial structures",
                "Steel plants, power plants & ETP",
                "Water tanks (IS 3370 compliant)",
                "Heavy machinery foundation design",
                "Structural audit & retrofitting",
            ],
        },
        {
            icon: ShieldCheck,
            value: "item-8",
            title: "Surveying",
            img: soliInvestigationImg,
            gradient: "from-blue-500 to-cyan-600",
            subtitle: "Boundary mapping, contouring, and GIS documentation.",
            content: [
                "Total stations and DGPS",
                "Underground and overhead asset mapping.",
                "Railway alignment, clearance, and asset mapping.",
                "Highway and smart mobility infrastructure surveying.",
                "Boundary mapping, contouring, and GIS documentation.",
            ],
        },

        {
            icon: FlaskConical,
            value: "item-3",
            title: "Advanced Soil Laboratory Testing",
            img: soilTestingImg,
            gradient: "from-purple-500 to-pink-600",
            subtitle: "",
            content: [
                "SPT, SCPT & DCPT Testing",
                "Plate Load & Cyclic Plate Load Test",
                "Electrical & Thermal Resistivity",
                "Triaxial, Direct Shear & Vane Shear",
                "Consolidation, Permeability & CBR",
                "Chemical analysis of soil & groundwater",
            ],
        },
        {
            icon: ShieldCheck,
            value: "item-2",
            title: "Geotechnical Soil Investigation",
            img: soliInvestigationImg,
            gradient: "from-blue-500 to-cyan-600",
            subtitle: "ASTM & IS Compliant Site Characterization",
            content: [
                "Comprehensive site characterization using ASTM-standard methodologies.",
                "Seismic refraction & MASW surveys",
                "Bearing capacity assessment & settlement prediction",
                "Liquefaction analysis and slope stability studies",
                "Deep soil exploration up to 60m depth",
            ],
        },
        {
            icon: Layers,
            value: "item-1",
            title: "Soil Investigation Major Projects",
            img: soilInvestigation1Img,
            gradient: "from-amber-500 to-orange-600",
            subtitle: "Trusted by India’s Top Infrastructure Giants",
            content: [
                "L & T Limited",
                "Sharpoorji Pallonji & Co. Ltd",
                "Gammon India Limited",
                "Southern Railway",
                "Chennai Metro Rail Limited (CMRL)",
                "Dholera International Airport - Gujarat",
                "Highway Projects (NH45 & NH47)",
                "Chennai Elevated Highway Bridge Project",
                "72+ Major & Minor Bridges across Tamil Nadu",
                "150+ Telecommunication Towers across Tamil Nadu",
            ],
        },






    ]

    const links = ["Builders", "Surveys", "Geo Services", "Contact Us"]

    const reasons = [
        {
            id: "clients",
            title: "Clients",
            icon: Users,
            highlight: "Trusted by leading builders & businesses",
            description:
                "Our esteemed clients have been our backbone for years, trusting us with mission-critical projects and repeat engagements.",
            badge: "Client-centric",
        },
        // {
        //     id: "certified",
        //     title: "Certified",
        //     icon: BadgeCheck,
        //     highlight: "certified excellence",
        //     description:
        //         "We are certified for Geo-Technical Soil Testing & Allied Services, following strict quality standards at every stage.",
        //     badge: "NABL Accredited",
        // // },
        // {
        //     id: "reliability",
        //     title: "Reliability",
        //     icon: ShieldCheck,
        //     highlight: "Consistent, data-driven decisions",
        //     description:
        //         "We follow proven statistical and geo-technical methodologies to deliver repeatable, reliable outcomes you can build on.",
        //     badge: "Proven track record",
        // },
        {
            id: "quality",
            title: "Quality",
            icon: Award,
            highlight: "High-precision testing & reporting",
            description:
                "Standardised processes, well-equipped labs, and experienced professionals help us commit to uncompromised quality.",
            badge: "Quality first",
        },
    ]

    const imageLogos = [
        { src: client1Img, alt: "Company 1", href: "https://company1.com" },
        { src: client2Img, alt: "Company 2", href: "https://company2.com" },
        { src: client3Img, alt: "Company 3", href: "https://company3.com" },
        { src: client4Img, alt: "Company 4", href: "https://company4.com" },
        { src: client5Img, alt: "Company 5", href: "https://company5.com" },
        { src: client6Img, alt: "Company 6", href: "https://company6.com" },
        { src: client7Img, alt: "Company 7", href: "https://company7.com" },
        { src: client8Img, alt: "Company 8", href: "https://company8.com" },
        { src: client9Img, alt: "Company 9", href: "https://company9.com" },
        { src: client10Img, alt: "Company 10", href: "https://company10.com" },
        { src: client11Img, alt: "Company 11", href: "https://company11.com" },
        { src: client12Img, alt: "Company 12", href: "https://company12.com" },
        { src: client13Img, alt: "Company 13", href: "https://company13.com" },
        { src: client14Img, alt: "Company 14", href: "https://company14.com" },
        { src: client15Img, alt: "Company 15", href: "https://company15.com" },
        { src: client16Img, alt: "Company 16", href: "https://company16.com" },

    ];

    const handleScroll = () => {
        document.getElementById("ExploreProject")?.scrollIntoView({
            behavior: "smooth",
        });
    };


    return (
        <LazyMotion features={domAnimation}>
            <div className="relative min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 font-sans overflow-x-hidden">

                {/* Hero Section */}
                <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
                    <motion.img
                        src={tall}
                        alt="Construction Excellence"
                        className="absolute inset-0 w-full h-full object-cover opacity-90 "
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
                    />

                    <div className="relative z-10 max-w-5xl  mx-auto">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                            <BlurText
                                text="Transform     the future of construction with"
                                delay={200}
                                className="text-lg sm:text-2xl flex items-center justify-center font-bold mt-32 text-orange-700 tracking-wider"
                            />
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="text-5xl sm:text-8xl md:text-9xl font-black tracking-tighter "
                        >
                            <span className="block text-orange-900">MILESTONE</span>
                            <span className="block text-amber-600 -mt-6 sm:-mt-12">BUILDERS</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2 }}
                            className="mt-12 flex flex-col sm:flex-row gap-6 justify-center"
                        >
                            <Button
                                onClick={handleScroll}
                                size="lg"
                                className="bg-gradient-to-r sm:text-lg text-xs from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold rounded-full sm:px-10 sm:py-7 py-4 px-5  shadow-2xl"
                            >
                                Explore Projects <ArrowRight className="ml-2" />
                            </Button>

                            <Button onClick={() => navigate(`/contact`)} size="lg" variant="outline" href="#GetQuote" className="bg-white/90 backdrop-blur text-xs sm:text-lg text-orange-700 border-2 border-orange-300 hover:bg-orange-50 rounded-full sm:px-10 sm:py-7 py-4 px-5 font-bold">
                                Get Quote
                            </Button>
                        </motion.div>
                    </div>
                </section>

         

                <section className="py-20 bg-orange-600 text-white text-center">
                    <div className="max-w-4xl mx-auto px-6">
                        <h3 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h3>


                        <button onClick={() => navigate(`/contact`)} className="px-10 py-5 bg-white text-orange-600 font-bold text-lg rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all shadow-xl">
                            Contact Us Today
                        </button>
                    </div>
                </section>

                                    
                     <Footer  />               


            </div >

        </LazyMotion >


    )
}

export default HomePage