"use client";

import BlurText from "@/components/BlurText";
import LogoLoop from "@/components/LogoLoop";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LazyMotion, domAnimation, motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Building2,
  FlaskConical,
  Hammer,
  Layers,
  MapPin,
  PenTool,
  Phone,
  Ruler,
  ShieldCheck,
  Users,
  CheckCircle2,
  Globe,
  Wrench,
  Target,
  Clock,
  HardHat,
  Star,
  ChevronRight,
  User,
  Shield,
  Zap,
  TrendingUp,
  FileText,
  MailPlus,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Images
import tall from "@/assets/geobuilders.png";
import handImg from "@/assets/hand.jpg";
import soilInvestigation1Img from "@/assets/soil-investigation-1.jpg";
import soliInvestigationImg from "@/assets/soli-investigation.jpg";
import soilTestingImg from "@/assets/soil-testing.jpg";
import structuralImg from "@/assets/structural.jpg";
import planningImg from "@/assets/planing.jpg";
import builderconstructure from "@/assets/builderconstructure.jpg";
import allcivil from "@/assets/allcivil.jpg";
import checkImg from "@/assets/check.png";
import decorationImg from "@/assets/decoration.png";
import globeImg from "@/assets/globe.png";
import imgesImg from "@/assets/imges.png";
import manImg from "@/assets/man (1).png";
import mechanicImg from "@/assets/mechanic.png";
import qualityImg from "@/assets/quality.jpg";
import { useNavigate } from "react-router-dom";
import Footer from "@/layouts/Footer";
import LogoLoading from "./LogoLoding";
// Mock client logos
const clientLogos = [
  "L&T",
  "CMRL",
  "Southern Railway",
  "RITES",
  "NBCC",
  "CPWD",
  "TNEB",
  "SIDCO",
].map((name) => ({
  src: `https://placehold.co/160x100/2D3748/FFFFFF?text=${encodeURIComponent(name)}`,
  alt: name,
  link: "#",
}));

const GeoService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const cardMotion = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1 },
  };

  const keyPersonnel = [
    {
      name: "Mr. Jebastin Daniel M.E(Structural)",
      experience: "13 Years of Experience",
      role: "Structural Designer",
      highlight: true, // this one is centered at the top
    },
    {
      name: "Mr. M.Mukesh B.E(Civil)",
      experience: "13 Years of Experience",
      role: "Surveyor",
    },
    {
      name: "Mr. M.MuthuRaja Thivakar M.E(GeoTech)",
      experience: "4 Years of Experience",
      role: "GeoTechnical Engineer",
      qualification: "",
    },
    {
      name: "Dr. N. Chandrasekar",
      experience: "",
      role: "Sr. Geologist",
      qualification: "ISO/IEC 17025:2017 Compliance Testing Services",
      specialization:
        "All Types of Soil, Water & Rock Testing | Accurate, Reliable & Professional Geological Field & Lab Testing",
    },
  ];

  const servicesAccordion = [
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
      img: planningImg,
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
  ];

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
  ];

  const stats = [
    { icon: Target, value: 500, suffix: "+", label: "Projects Delivered" },
    { icon: Users, value: 50, suffix: "+", label: "Expert Team Members" },
    { icon: Clock, value: 15, suffix: "+", label: "Years of Excellence" },
    { icon: Award, value: "ISO", label: "9001:2015 Certified", static: true },
  ];

  const [counters, setCounters] = useState(
    stats.map((s) => (s.static ? s.value : 0)),
  );
  const statsRef = useRef(null);
  const inView = useInView(statsRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    stats.forEach((stat, i) => {
      if (stat.static) return;
      let count = 0;
      const increment = Math.ceil(stat.value / 60);
      const timer = setInterval(() => {
        count += increment;
        if (count >= stat.value) {
          count = stat.value;
          clearInterval(timer);
        }
        setCounters((prev) => {
          const newArr = [...prev];
          newArr[i] = count;
          return newArr;
        });
      }, 30);
    });
  }, [inView]);

  const coreValues = [
    {
      icon: Shield,
      title: "Integrity First",
      desc: "Transparent reporting, ethical practices, and zero data manipulation.",
    },
    {
      icon: Zap,
      title: "Speed & Precision",
      desc: "48-hour preliminary reports; <7-day full analysis. Accuracy >99.5%.",
    },
    {
      icon: TrendingUp,
      title: "Sustainable Engineering",
      desc: "Eco-conscious site planning, soil stabilization, and low-impact methods.",
    },
    {
      icon: User,
      title: "Client-Centric Approach",
      desc: "Dedicated project manager, weekly updates, and 24/7 technical support.",
    },
  ];

  const testimonials = [
    {
      name: "R. Senthil Kumar",
      role: "Project Director, L&T Metro Rail",
      quote:
        "Geo Build’s soil analysis for CMRL Phase-II prevented ₹22Cr in potential foundation redesigns. Their data saved time and lives.",
      rating: 5,
    },
    {
      name: "Dr. Ananya Iyer",
      role: "Chief Architect, Urbanova Designs",
      quote:
        "Their structural team optimized our 32-storey tower design, cutting material cost by 18% without compromising safety.",
      rating: 5,
    },
    {
      name: "S. Vijayakumar",
      role: "Executive Engineer, PWD Tamil Nadu",
      quote:
        "Reliable, NABL-compliant testing with court-admissible reports. Our go-to for all government tenders.",
      rating: 5,
    },
  ];

  const milestones = [
    {
      year: "2010",
      title: "Founded",
      desc: "Started as a soil testing lab in Chennai.",
    },
    {
      year: "2014",
      title: "NABL Accreditation",
      desc: "First private lab in TN for geotech testing.",
    },
    {
      year: "2017",
      title: "CMRL Partnership",
      desc: "Became preferred vendor for Chennai Metro.",
    },
    {
      year: "2021",
      title: "Pan-India Expansion",
      desc: "Opened labs in Delhi, Hyderabad & Bangalore.",
    },
    {
      year: "2024",
      title: "500+ Projects",
      desc: "Served 200+ clients across 18 states.",
    },
    {
      year: "2025",
      title: "AI-Powered Reporting",
      desc: "Launched GeoAI™ for predictive soil behavior modeling.",
    },
  ];

  const faqs = [
    {
      question: "How soon can I get a soil report?",
      answer:
        "Preliminary report in 48 hours. Full  report with analysis in 5–7 working days. Emergency 24-hr service available.",
    },
    {
      question: "Do you work on small residential projects?",
      answer:
        "Yes! We offer scaled packages for homes, villas, and farmhouses — starting at ₹8,999 (incl. 3 boreholes & basic analysis).",
    },
    {
      question: "Are your reports accepted by government authorities?",
      answer:
        "100%. Our reports comply with CPWD, TNHB, RERA, and court standards. We’re empaneled with 12+ state departments.",
    },
    {
      question: "What makes your lab different?",
      answer:
        "On-site lab vans for real-time testing\nAI-powered anomaly detection\nFree retesting if dispute arises",
    },
  ];

  const handleScroll = () => {
    document.getElementById("ExploreProject")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <LazyMotion features={domAnimation}>
      <LogoLoading />
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
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
                <span className="block text-amber-600 -mt-4 sm:-mt-14">
                  Geo Service
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col p-4 sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                onClick={handleScroll}
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold rounded-full px-10 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={() => navigate("/contact")}
                size="lg"
                variant="outline"
                className="bg-transparent backdrop-blur text-orange-600 border-2 border-orange-300 hover:bg-orange-50 rounded-full px-10 py-6 text-lg font-bold"
              >
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

        {/* Company Section */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="relative w-full p-4 md:p-6 mt-6 md:mt-10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            <motion.div variants={item} className="w-full md:w-1/2 space-y-4">
              <p className="text-3xl flex items-start justify-start md:text-4xl font-extrabold tracking-tight text-orange-800">
                Company
              </p>
              <p className="scroll-m-20 text-start text-orange-800 md:text-lg font-semibold tracking-tight">
                Your trusted partner in modern construction & engineering
                solutions.
              </p>
              <p className="text-start text-sm md:text-base font-semibold leading-relaxed">
                We are a professionally driven construction and engineering
                organization dedicated to delivering reliable, innovative, and
                value-focused building solutions. With expertise across
                residential, commercial, and industrial projects, we combine
                technical excellence, strategic planning, and modern
                construction practices to ensure efficiency, durability, and
                customer trust in every project we execute.
              </p>
            </motion.div>

            <motion.div
              variants={item}
              className="w-full md:w-1/2 flex justify-center"
            >
              <img
                src={handImg}
                alt="Team handshake"
                className="w-48 h-48 md:w-72 md:h-72 object-cover rounded-full border-b-4 border-b-orange-500"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Vision Section — image on left (mobile: top) */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="relative w-full p-4 md:p-6 mt-6 md:mt-10"
        >
          <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-12">
            <motion.div variants={item} className="w-full md:w-1/2 space-y-4">
              <BlurText
                text="VISION"
                delay={900}
                animateBy="words"
                direction="top"
                className="text-3xl  md:text-4xl font-extrabold tracking-tight text-orange-800"
              />
              {/* <ScrollReveal
                            baseOpacity={0}
                            enableBlur={true}
                            baseRotation={5}
                            blurStrength={10}
                        >
                            When does a man die? When he is hit by a bullet? No! When he suffers a disease?
                            No! When he ate a soup made out of a poisonous mushroom?
                            No! A man dies when he is forgotten!
                        </ScrollReveal> */}

              <p className="scroll-m-20 text-start line-clamp-1 text-orange-800 md:text-lg font-semibold tracking-tight">
                Our vision is to become a benchmark in the construction industry
                by creating sustainable, future-ready developments that inspire
                progress and elevate the built environment.
              </p>
              <p className="text-start text-sm md:text-base font-semibold leading-relaxed">
                We aim to lead through innovation, uphold engineering
                excellence, and foster long-term relationships built on
                integrity, commitment, and performance.
              </p>
              <p className="text-start text-sm md:text-base font-semibold leading-relaxed">
                We are a professionally driven construction and engineering
                organization dedicated to delivering reliable, innovative, and
                value-focused building solutions...
              </p>
            </motion.div>

            <motion.div
              variants={item}
              className="w-full md:w-1/2 flex justify-center"
            >
              <img
                src={imgesImg}
                alt="Vision illustration"
                className="w-48 h-48 md:w-80 md:h-80 object-cover border-b-4 border-b-orange-500"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Quality Policy Section */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="relative w-full p-4 md:p-6 mt-6 md:mt-10 mb-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            <motion.div variants={item} className="w-full md:w-1/2 space-y-4">
              <p className="text-3xl flex items-start justify-start md:text-4xl font-extrabold tracking-tight text-orange-800">
                QUALITY POLICY
              </p>
              <p className="text-start text-orange-800 md:text-lg font-semibold tracking-tight">
                Our commitment to quality is unwavering.
              </p>
              <p className="text-start text-sm md:text-base font-semibold leading-relaxed">
                We are dedicated to delivering exceptional construction and
                engineering solutions that meet and exceed industry standards,
                ensuring the highest level of quality in every project we
                undertake.
              </p>
              <p className="text-start text-sm md:text-base font-semibold leading-relaxed">
                We are committed to delivering uncompromised quality through
                stringent standards, certified materials, skilled professionals,
                and continuous process improvement...
              </p>
            </motion.div>

            <motion.div
              variants={item}
              className="w-full md:w-1/2 flex justify-center"
            >
              <img
                src={qualityImg}
                alt="Quality assurance"
                className="w-48 h-48 md:w-72 md:h-72 object-cover rounded-full border-b-4 border-b-orange-500"
              />
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="relative w-full p-4 md:p-6 mt-6 md:mt-10 mb-12"
        >
          <LazyMotion features={domAnimation}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <BlurText
                text="WHY MILESTONE"
                delay={200}
                animateBy="words"
                direction="top"
                className="text-3xl flex items-center justify-center md:text-4xl font-extrabold tracking-tight text-orange-800"
              />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center p-4 mt-4">
              {[
                {
                  img: manImg,
                  title: "Experienced Team",
                  alt: "experienced team",
                  content:
                    "Experience the power of construction and engineering with Milestone. Our team of skilled professionals and certified materials ensures that every project we undertake is delivered with...",
                },
                {
                  img: mechanicImg,
                  title: "Comprehensive Services",
                  alt: "comprehensive services",
                  content:
                    "We offer a comprehensive range of services to support your construction and engineering requirements — from initial planning and site preparation to final project handover...",
                },
                {
                  img: checkImg,
                  title: "Quality Assurance",
                  alt: "quality assurance",
                  content:
                    "We are committed to delivering uncompromised quality through stringent standards, certified materials, skilled professionals, and continuous process improvement...",
                },
                {
                  img: globeImg,
                  title: "Serving India",
                  alt: "serving india",
                  content:
                    "We serve India with our comprehensive range of construction and engineering services, ensuring that every project we undertake is delivered with the highest level of quality and safety...",
                },
              ].map((card, index) => (
                <LazyMotion key={index} features={domAnimation}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.6,
                      delay: 0.1 * index,
                      type: "spring",
                      stiffness: 100,
                    }}
                    whileHover={{
                      y: -10,
                      scale: 1.02,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <Card className="w-full bg-transparent border-2 border-orange-200 hover:border-orange-400 transition-colors duration-300">
                      <CardContent className="flex flex-col gap-4 items-center p-4">
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.5,
                            delay: 0.2 * index,
                            type: "spring",
                          }}
                          whileHover={{ rotate: 5, scale: 1.1 }}
                        >
                          <img
                            src={card.img}
                            alt={card.alt}
                            className="w-16 h-16 md:w-24 md:h-24 object-cover rounded-full"
                          />
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 * index }}
                        >
                          <BlurText
                            text={card.title}
                            delay={150}
                            animateBy="words"
                            direction="top"
                            className="flex items-center justify-center scroll-m-20 text-start text-lg whitespace-nowrap font-semibold tracking-tight"
                          />
                        </motion.div>

                        <motion.p
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 * index }}
                          className="text-start text-sm  font-mediumt"
                        >
                          {card.content}
                        </motion.p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </LazyMotion>
              ))}
            </div>
          </LazyMotion>
        </motion.section>

        <LazyMotion features={domAnimation}>
          <section className="relative w-full py-12">
            {/* Soft background */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-orange-50/30 via-amber-100/20 to-white blur-xl" />

            {/* Title */}
            {/* <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, type: "spring" }}
                            viewport={{ once: true }}
                            className="mb-10"
                        >
                            <BlurText
                                text="GEO BUILD ENGINEERING INDIA PVT LTD"
                                delay={100}
                                animateBy="words"
                                direction="top"
                                className="text-3xl flex items-center justify-center md:text-4xl font-extrabold tracking-tight text-orange-800"
                            />
                            <p className="text-center text-gray-600 text-sm md:text-base mt-2">
                                Engineering Solutions Trusted By Industries, Governments & Developers
                            </p>
                        </motion.div> */}

            <section className="relative py-24 overflow-hidden bg-gradient-to-br from-orange-600 via-amber-500 to-yellow-500">
              <div className="absolute inset-0 bg-black/30" />
              <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-5xl md:text-6xl font-bold mb-6"
                >
                  Our Expertise in Action
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl md:text-2xl max-w-3xl mx-auto"
                >
                  Excellence in Civil Construction, Structural Design , Soil
                  Survey & Geotechnical Investigation,
                </motion.p>
              </div>
            </section>

            {/* Services Accordion */}
            <section className="py-16 px-4">
              <div className="max-w-6xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <h2
                    id="ExploreProject"
                    className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
                  >
                    Comprehensive{" "}
                    <span className="text-orange-600">Services</span>
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    End-to-end solutions backed by cutting-edge technology,
                    experienced engineers, and strict quality standards.
                  </p>
                </motion.div>

                <div className="max-w-5xl mx-auto">
                  <Accordion type="single" collapsible className="space-y-6">
                    {servicesAccordion.map((service) => {
                      const Icon = service.icon;
                      return (
                        <AccordionItem
                          key={service.value}
                          value={service.value}
                          className="overflow-hidden rounded-3xl border-0 bg-white shadow-xl hover:shadow-2xl transition-all duration-500"
                        >
                          <AccordionTrigger className="px-8 py-6 hover:no-underline">
                            <div className="flex items-center gap-6 w-full text-left">
                              <div
                                className={`sm:p-4 p-2 rounded-2xl bg-gradient-to-br ${service.gradient} text-white shadow-lg`}
                              >
                                <Icon className="sm:w-10 sm:h-10 w-7 h-7" />
                              </div>
                              <div className="flex-1">
                                <h3 className="sm:text-2xl text-xs line-clamp-2 font-bold text-gray-800">
                                  {service.title}
                                </h3>
                                <p className="text-orange-600 line-clamp-1 font-medium">
                                  {service.subtitle}
                                </p>
                              </div>
                              <CheckCircle2 className="sm:w-8 sm:h-8 w-4 h-4 text-orange-500" />
                            </div>
                          </AccordionTrigger>

                          <AccordionContent className="px-8 pb-10 pt-4 bg-gray-50/70">
                            <div className="grid lg:grid-cols-2 gap-10">
                              <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                                <img
                                  src={service.img}
                                  alt={service.title}
                                  className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                <div className="absolute bottom-6 left-6 text-white">
                                  <h4 className="text-2xl font-bold">
                                    {service.title}
                                  </h4>
                                  <p className="text-sm opacity-90">
                                    Certified • Timely • Trusted
                                  </p>
                                </div>
                              </div>

                              <div className="space-y-5 py-6">
                                <h4 className="sm:text-2xl text-xl font-bold text-gray-800 flex items-center gap-3">
                                  <div
                                    className={`w-4 h-4 rounded-full bg-gradient-to-r ${service.gradient}`}
                                  />
                                  Key Highlights
                                </h4>
                                {service.content.map((point, i) => (
                                  <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-4"
                                  >
                                    <div
                                      className={`mt-1.5 w-3 h-3 rounded-full bg-gradient-to-r ${service.gradient}`}
                                    />
                                    <p className="text-gray-700 sm:text-lg text-sm">
                                      {point}
                                    </p>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      );
                    })}
                  </Accordion>
                </div>
              </div>
            </section>
          </section>
        </LazyMotion>

        <LazyMotion features={domAnimation}>
          <section className="relative w-full py-16 md:py-20">
            {/* Background decoration */}
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute -top-10 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-orange-300/20 blur-3xl" />
              <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />
            </div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, type: "spring" }}
              className="flex flex-col items-center px-4 text-center"
            >
              <BlurText
                text="Why Choose Us"
                delay={100}
                animateBy="words"
                direction="top"
                className="text-3xl flex items-center justify-center md:text-4xl font-extrabold tracking-tight text-orange-800"
              />
              <p className="mt-3 max-w-2xl text-sm md:text-base text-muted-foreground">
                A trusted partner for constructions , surveying and
                geo-technical soil testing
              </p>
            </motion.div>

            {/* Grid */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="relative mt-10 grid gap-6 px-4 md:mt-14 md:grid-cols-2 lg:max-w-5xl lg:mx-auto"
            >
              {/* Center decorative image (like your /decoration.png) */}
              <img
                src={decorationImg}
                alt=""
                className="pointer-events-none absolute inset-0 m-auto h-64 w-64 opacity-10 md:opacity-20"
              />

              {reasons.map((item) => {
                const Icon = item.icon;
                const content = (
                  <Card className="relative overflow-hidden border border-orange-100/60 bg-white/80 backdrop-blur-sm hover:border-orange-300/80 transition-all duration-300 group">
                    {/* Glow on hover */}
                    <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-orange-100/70 via-transparent to-amber-100/60 transition-opacity" />

                    <CardHeader className="flex flex-row items-start gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border bg-orange-50 group-hover:shadow-md transition-shadow">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                          {item.title}
                          <span className="rounded-full bg-orange-50 px-2 py-0.5 text-xs font-medium text-orange-700">
                            {item.badge}
                          </span>
                        </CardTitle>
                        <CardDescription className="text-xs md:text-sm font-medium text-foreground">
                          {item.highlight}
                        </CardDescription>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                );

                return (
                  <motion.div key={item.id} variants={cardMotion}>
                    {content}
                  </motion.div>
                );
              })}
            </motion.div>
          </section>
        </LazyMotion>

        {/* Key Personnel Timeline */}
        <section className="py-20 px-6 ">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-center text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-orange-700 bg-clip-text text-transparent mb-16">
              Key Personnel
            </h2>

            <div className="relative">
              {/* Central Vertical Line - Orange */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-orange-400 h-full hidden md:block opacity-60" />

              <div className="space-y-24">
                {keyPersonnel.map((person, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: i * 0.2 }}
                    className="relative"
                  >
                    {/* Top Highlighted Person (Centered) */}
                    {person.highlight ? (
                      <div className="flex flex-col items-center">
                        {/* Large Orange Dot Above */}
                        <div className="sm:w-16 sm:h-16 w-12 h-12 bg-orange-600 rounded-full shadow-2xl mb-6 relative z-10" />

                        {/* Person Card */}
                        <div className="text-center max-w-md bg-white rounded-3xl p-10 shadow-2xl ">
                          <h3 className="sm:text-3xl text-xl font-bold text-gray-900">
                            {person.name}
                          </h3>
                          <p className="sm:text-2xl text-lg  font-bold text-orange-600 mt-3">
                            {person.experience}
                          </p>
                          <div className="mt-6 pt-6 border-t-2 border-orange-200">
                            <p className="sm:text-2xl text-lg font-semibold text-gray-800">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Alternating Left/Right Cards */
                      <div
                        className={`flex items-center justify-center gap-10 ${
                          i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                        } flex-col md:flex-row`}
                      >
                        {/* Empty spacer for alignment */}
                        <div className="flex-1 hidden md:block" />

                        {/* Timeline Dot */}
                        <div className="w-14 h-14   bg-orange-500 rounded-full shadow-xl  z-20 flex-shrink-0" />

                        {/* Person Card */}
                        <div className="flex-1 max-w-md">
                          <div className="bg-white rounded-2xl p-8 shadow-xl border border-orange-100 hover:shadow-2xl transition-shadow">
                            <h3 className="sm:text-2xl text-xl font-bold text-gray-900">
                              {person.name}
                            </h3>

                            {person.qualification && (
                              <p className="text-orange-600 font-semibold mt-2">
                                {person.qualification}
                              </p>
                            )}

                            <p className="text-lg font-medium text-orange-700 mt-4">
                              {person.experience}
                            </p>

                            <div className="mt-6 pt-6 border-t border-gray-200">
                              <p className="text-2xl font-semibold text-gray-800">
                                {person.role}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* <LazyMotion features={domAnimation}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="my-12"
                    >
                        <LogoLoop
                            logos={imageLogos}
                            speed={120}
                            direction="left"
                            logoHeight={128}
                            gap={40}
                            hoverSpeed={0}
                            scaleOnHover
                            // fadeOut
                            // fadeOutColor="#ffffff"
                            ariaLabel="Technology partners"
                        />
                    </motion.div>
                </LazyMotion> */}

        <LazyMotion features={domAnimation}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full py-14 bg-gradient-to-br from-orange-50 via-amber-100 to-white"
          >
            {/* Decorative background glow */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 h-48 w-48 blur-3xl bg-orange-300/30 rounded-full" />
            <div className="absolute bottom-0 right-0 h-64 w-64 blur-3xl bg-orange-500/20 rounded-full" />

            {/* Heading */}
            {/* <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="text-center mb-12"
                        >
                            <BlurText
                                text="Contact & Locations"
                                animateBy="words"
                                delay={120}
                                className="text-3xl flex items-center justify-center md:text-4xl font-extrabold tracking-tight text-orange-800"
                            />
                            <p className="text-gray-600 text-sm md:text-base mt-2">
                                We serve across India with operational offices in three key states.
                            </p>
                        </motion.div> */}

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 max-w-6xl mx-auto">
              {/* {[
                                {
                                    title: "Chennai Office",
                                    address: `No. 50B, 8th Street, Mahalakshmi Nagar,
              Kovilambakkam, Chennai - 600129`,
                                    phone: "+91 95516 76333",
                                },
                                {
                                    title: "Bangalore Office",
                                    address: `A#,178/62,15TH CROSS, ROOPENA AGRAHARA,
              BOMMANAHALLI, BANGALORE-560068`,
                                },
                                {
                                    title: "Kerala Office",
                                    address: `T.C 21/1866(1), Punartham,
              Nedumcade, Karamana, Trivandrum - 695002`,
                                    phone: "+91 97398 54231",
                                },
                            ].map((office, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.03 }}
                                    transition={{ type: "spring", stiffness: 150 }}
                                    className="border border-orange-200 shadow-sm hover:shadow-lg bg-white/70 backdrop-blur-sm rounded-xl p-6 flex flex-col gap-3 transition-all"
                                >
                                    <div className="flex items-center gap-2">
                                        <MapPin className="text-orange-600 h-5 w-5" />
                                        <h3 className="font-bold uppercase text-orange-700">{office.title}</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed text-sm whitespace-pre-line">{office.address}</p>

                                    {office.phone && (
                                        <p className="flex items-center text-orange-700 font-semibold gap-2 mt-2">
                                            <Phone className="h-4 w-4" /> {office.phone}
                                        </p>
                                    )}
                                </motion.div>
                            ))} */}

              {/* <motion.div
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 150 }}
                                className="border border-orange-200 shadow-sm hover:shadow-lg bg-white/70 backdrop-blur-sm rounded-xl p-6"
                            >
                                <div className="flex items-center gap-2 mb-4">
                                    <ArrowRight className="text-orange-600 h-5 w-5" />
                                    <h3 className="font-bold uppercase text-orange-700">Quick Links</h3>
                                </div>

                                <div className="space-y-3">
                                    {links.map((item, i) => (
                                        <motion.p
                                            key={i}
                                            whileHover={{ x: 5 }}
                                            className="cursor-pointer text-gray-700 hover:text-orange-600 font-medium transition"
                                        >
                                            ➜ {item}
                                        </motion.p>
                                    ))}
                                </div>
                            </motion.div> */}
            </div>
          </motion.div>
        </LazyMotion>

        {/* Why Choose Us */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <BlurText
                text="Why India Trusts MilestoneBuilders"
                className="text-4xl  flex items-center justify-center md:text-5xl font-black text-orange-800"
                delay={100}
              />
              <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
                We don’t just test soil — we de-risk your entire project with
                science, experience, and integrity.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center justify-center">
              <motion.div
                className="h-80 w-80 flex items-center justify-center mx-auto"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img
                  src={handImg}
                  alt="Expert team at work"
                  className="rounded-3xl shadow-amber-500  shadow-2xl w-full"
                />
              </motion.div>
              <div className="space-y-8">
                {[
                  {
                    icon: Wrench,
                    title: "End-to-End Ownership",
                    desc: "From site investigation → lab testing → design validation → construction QC. One team. Zero handoff risks.",
                  },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-start gap-6">
                      <Icon className="w-12 h-12 text-amber-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-lg text-gray-700">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
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
              <BlurText
                text="Our Engineering Philosophy"
                className="text-4xl flex items-center justify-center md:text-5xl font-black text-orange-800"
                delay={100}
              />
              <p className="mt-6 text-xl text-gray-600">
                Built on 4 pillars that define every project we touch.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((val, i) => {
                const Icon = val.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100 hover:shadow-xl transition-shadow"
                  >
                    <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-amber-700" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {val.title}
                    </h3>
                    <p className="text-gray-700">{val.desc}</p>
                  </motion.div>
                );
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
              <BlurText
                text="Frequently Asked Questions"
                className="text-4xl flex items-center justify-center  font-black text-orange-800"
                delay={100}
              />
              <p className="mt-6 text-xl text-gray-600">
                Quick answers to help you get started.
              </p>
            </div>
            <Accordion type="multiple" className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-0">
                  <AccordionTrigger className="text-left px-6 py-5 bg-gray-50 hover:bg-amber-50 rounded-2xl text-lg font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 pt-2 text-gray-700">
                    {faq.answer.split("\n").map((line, idx) => (
                      <div key={idx} className="block">
                        {line.startsWith("NABL") ||
                        line.startsWith("On-site") ||
                        line.startsWith("AI-powered") ||
                        line.startsWith("Free") ? (
                          <div className="flex items-start gap-2 mb-1">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            {line}
                          </div>
                        ) : (
                          line
                        )}
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
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-6xl font-black mb-6"
            >
              Ready to Build on Solid Ground?
            </motion.h2>
            <p className="text-l md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto">
              Get your{" "}
              <span className="font-bold">free geotechnical consultation</span>{" "}
              and{" "}
              <span className="underline">
                preliminary soil report within 48 hours
              </span>
              .
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                onClick={() => navigate(`/contact`)}
                size="lg"
                className="bg-white text-orange-700 hover:bg-gray-100 font-bold text-lg px-10 py-7 rounded-full shadow-2xl transform hover:scale-105 transition"
              >
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
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex items-center justify-center gap-4 text-amber-100"
            >
              <FileText className="h-6 w-6" />
              <span>
                No-obligation site visit • Free BOQ estimate • 100% confidential
              </span>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </LazyMotion>
  );
};

export default GeoService;
