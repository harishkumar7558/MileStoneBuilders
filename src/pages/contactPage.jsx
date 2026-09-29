'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Footer from "@/layouts/Footer"
import { LazyMotion, domAnimation, motion } from "framer-motion"
import {
    ArrowRight, Building2, CheckCircle2, Clock, Instagram, Mail, MapPin,
    MessageCircle, Navigation, Phone, Send, Sparkles, User
} from "lucide-react"
import { useEffect, useState } from "react"

const OFFICE_ADDRESS = "3/328 Victoria Nagar, Ittery Road, Puthukulam, Reddiyarpatti, Tirunelveli - 627007, India"
const SERVICE_AREAS = ["Tirunelveli", "Chennai", "Puducherry", "Thoothukudi", "Across Tamil Nadu"]

const ContactPage = () => {
    const phoneNumber = "916369051199";
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
    });

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const container = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
    }

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
    }

    const channels = [
        {
            icon: Phone,
            title: "Call Us",
            desc: "Mon – Sat, 9:00 AM – 7:00 PM",
            gradient: "from-orange-500 to-amber-500",
            items: [
                { value: "+91 63690 51199", link: "tel:+916369051199" },
                { value: "+91 75503 40861", link: "tel:+917550340861" },
            ],
        },
        {
            icon: Mail,
            title: "Email Us",
            desc: "We reply within 24 hours",
            gradient: "from-rose-500 to-orange-500",
            items: [
                { value: "milestonegeo@gmail.com", link: "mailto:milestonegeo@gmail.com" },
                { value: "milestonegeoservice@gmail.com", link: "mailto:milestonegeoservice@gmail.com" },
            ],
        },
        {
            icon: Instagram,
            title: "Follow Us",
            desc: "Project updates & site stories",
            gradient: "from-pink-500 to-purple-600",
            items: [
                { value: "@milestonebuilders1", link: "https://www.instagram.com/milestonebuilders1" },
            ],
        },
    ]

    const updateField = (field) => (e) => setFormData({ ...formData, [field]: e.target.value })

    const handleQuickMessage = () => {
        const { firstName, lastName, email, phone, message } = formData;

        // Validation - don't send if required fields are empty
        if (!firstName.trim() || !phone.trim()) {
            alert("Please fill in at least your Name and Phone number.");
            return;
        }

        const fullName = `${firstName} ${lastName}`.trim();
        const userMessage = message.trim() || "Hi, I am interested in your construction services. Can you please contact me?";

        const whatsappText = encodeURIComponent([
            "*New Inquiry from Website*",
            "",
            `*Name:* ${fullName}`,
            `*Phone:* ${phone}`,
            `*Email:* ${email || "Not provided"}`,
            "*Message:*",
            userMessage,
            "",
            "Looking forward to hearing from you!",
        ].join("\n"));

        const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappText}`;
        window.open(whatsappURL, "_blank");

        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: ""
        });
    };

    const inputClass = "h-11 sm:h-12 pl-10 text-sm sm:text-base bg-orange-50/40 border-orange-200 rounded-xl focus-visible:ring-orange-400 focus-visible:border-orange-400 transition-colors"

    return (
        <LazyMotion features={domAnimation}>
            <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-white text-gray-800 overflow-hidden">
                {/* Hero Section */}
                <section className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 px-4 sm:px-6 text-center">
                    <div className="absolute -top-20 -left-20 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] bg-orange-400/20 blur-[100px] sm:blur-[140px] rounded-full pointer-events-none" />
                    <div className="absolute top-20 -right-20 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] bg-amber-300/30 blur-[120px] sm:blur-[160px] rounded-full pointer-events-none" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10 max-w-6xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 sm:mb-6 bg-white/90 backdrop-blur rounded-full border border-orange-200 shadow-sm">
                            <Sparkles className="w-4 h-4 text-orange-600" />
                            <span className="text-xs sm:text-sm font-semibold text-orange-700 tracking-wide">GET IN TOUCH</span>
                        </div>

                        <motion.h1
                            initial={{ opacity: 0, scale: 0.85 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.95]"
                        >
                            <span className="block text-orange-900">Let's Build</span>
                            <span className="block text-amber-600 mt-1 sm:mt-2">Something Great</span>
                        </motion.h1>

                        <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto font-medium px-2">
                            Ready to start your next project? Our engineers are just one message away.
                        </p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 }}
                            className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
                        >
                            <a
                                href="tel:+916369051199"
                                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all text-sm sm:text-base"
                            >
                                <Phone className="w-4 h-4 sm:w-5 sm:h-5" /> Call Now
                            </a>
                            <a
                                href={`https://wa.me/${phoneNumber}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/90 backdrop-blur text-orange-700 border-2 border-orange-300 hover:bg-orange-50 font-bold rounded-full shadow-md transition-all text-sm sm:text-base"
                            >
                                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" /> Chat on WhatsApp
                            </a>
                        </motion.div>
                    </motion.div>
                </section>

                {/* Contact Channels */}
                <section className="relative px-4 sm:px-6 pb-12 sm:pb-16">
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-50px" }}
                        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6"
                    >
                        {channels.map((channel) => {
                            const Icon = channel.icon
                            return (
                                <motion.div
                                    key={channel.title}
                                    variants={item}
                                    whileHover={{ y: -6 }}
                                    className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 shadow-lg hover:shadow-2xl border border-orange-100 transition-shadow overflow-hidden"
                                >
                                    <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${channel.gradient} opacity-10 group-hover:opacity-20 transition-opacity`} />
                                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${channel.gradient} shadow-lg`}>
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="mt-5 text-xl sm:text-2xl font-bold text-gray-900">{channel.title}</h3>
                                    <p className="text-sm text-gray-500 mt-1">{channel.desc}</p>
                                    <div className="mt-5 pt-5 border-t border-orange-100 space-y-2">
                                        {channel.items.map((entry) => (
                                            <a
                                                key={entry.value}
                                                href={entry.link}
                                                target={entry.link.startsWith("http") ? "_blank" : undefined}
                                                rel={entry.link.startsWith("http") ? "noopener noreferrer" : undefined}
                                                className="flex items-center justify-between gap-2 font-semibold text-gray-800 hover:text-orange-600 transition-colors text-sm sm:text-base break-all"
                                            >
                                                <span>{entry.value}</span>
                                                <ArrowRight className="w-4 h-4 shrink-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                            </a>
                                        ))}
                                    </div>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </section>

                {/* Form + Office */}
                <section className="relative px-4 sm:px-6 pb-16 sm:pb-24">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-orange-300/20 blur-[160px] rounded-full pointer-events-none" />

                    <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="lg:col-span-3"
                        >
                            <div className="bg-white/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl border border-orange-200 overflow-hidden h-full">
                                <div className="relative bg-gradient-to-r from-orange-500 to-amber-500 p-6 sm:p-8 text-white overflow-hidden">
                                    <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/10" />
                                    <div className="absolute right-16 -bottom-16 w-32 h-32 rounded-full bg-white/10" />
                                    <div className="relative flex items-center gap-3 sm:gap-4">
                                        <div className="p-3 bg-white/20 backdrop-blur rounded-xl">
                                            <Send className="w-6 h-6 sm:w-7 sm:h-7" />
                                        </div>
                                        <div>
                                            <h2 className="text-2xl sm:text-3xl font-bold">Send Us a Message</h2>
                                            <p className="text-xs sm:text-sm opacity-90 mt-1">Your message opens directly in WhatsApp</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-5 sm:p-8 space-y-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2">
                                                First Name <span className="text-orange-600">*</span>
                                            </label>
                                            <div className="relative">
                                                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-orange-400" />
                                                <Input
                                                    placeholder="John"
                                                    value={formData.firstName}
                                                    onChange={updateField("firstName")}
                                                    className={inputClass}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2">Last Name</label>
                                            <div className="relative">
                                                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-orange-400" />
                                                <Input
                                                    placeholder="Doe"
                                                    value={formData.lastName}
                                                    onChange={updateField("lastName")}
                                                    className={inputClass}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2">
                                                Phone <span className="text-orange-600">*</span>
                                            </label>
                                            <div className="relative">
                                                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-orange-400" />
                                                <Input
                                                    type="tel"
                                                    placeholder="+91 98765 43210"
                                                    value={formData.phone}
                                                    onChange={updateField("phone")}
                                                    className={inputClass}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2">Email</label>
                                            <div className="relative">
                                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-orange-400" />
                                                <Input
                                                    type="email"
                                                    placeholder="you@example.com"
                                                    value={formData.email}
                                                    onChange={updateField("email")}
                                                    className={inputClass}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2">Message</label>
                                        <Textarea
                                            value={formData.message}
                                            onChange={updateField("message")}
                                            placeholder="Tell us about your project — site location, type of work, timeline..."
                                            className="min-h-32 sm:min-h-36 text-sm sm:text-base bg-orange-50/40 border-orange-200 rounded-xl focus-visible:ring-orange-400 focus-visible:border-orange-400 resize-none"
                                        />
                                    </div>

                                    <Button
                                        onClick={handleQuickMessage}
                                        className="group w-full h-12 sm:h-14 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold text-base sm:text-lg rounded-full shadow-xl hover:shadow-2xl transition-all"
                                    >
                                        Send Message
                                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Button>

                                    <p className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-500">
                                        <Clock className="w-4 h-4 text-orange-500" />
                                        We typically respond within 24 hours
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Office & Service Areas */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="lg:col-span-2 flex flex-col gap-6"
                        >
                            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 overflow-hidden">
                                <div className="relative h-52 sm:h-60">
                                    <iframe
                                        title="Milestone Builders Office Location"
                                        src={`https://maps.google.com/maps?q=${encodeURIComponent(OFFICE_ADDRESS)}&z=14&output=embed`}
                                        className="absolute inset-0 w-full h-full border-0 grayscale-[30%]"
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 shadow-lg shrink-0">
                                            <Building2 className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg sm:text-xl font-bold text-gray-900">Head Office</h3>
                                            <p className="text-sm sm:text-base text-gray-600 mt-1 leading-relaxed">{OFFICE_ADDRESS}</p>
                                        </div>
                                    </div>
                                    <a
                                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(OFFICE_ADDRESS)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-orange-600 hover:text-orange-700"
                                    >
                                        <Navigation className="w-4 h-4" /> Get Directions
                                    </a>
                                </div>
                            </div>

                            <div className="relative bg-gradient-to-br from-orange-600 to-amber-500 rounded-2xl sm:rounded-3xl p-6 sm:p-7 shadow-2xl text-white overflow-hidden flex-1">
                                <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-white/10" />
                                <div className="relative">
                                    <div className="flex items-center gap-3">
                                        <MapPin className="w-6 h-6" />
                                        <h3 className="text-xl sm:text-2xl font-bold">Where We Work</h3>
                                    </div>
                                    <p className="text-sm opacity-90 mt-2">Delivering projects across South India</p>
                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {SERVICE_AREAS.map((area) => (
                                            <span
                                                key={area}
                                                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/20 backdrop-blur rounded-full text-xs sm:text-sm font-semibold"
                                            >
                                                <CheckCircle2 className="w-3.5 h-3.5" /> {area}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <Footer />
            </div>
        </LazyMotion>
    )
}

export default ContactPage
