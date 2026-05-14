'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Footer from "@/layouts/Footer"
import { LazyMotion, domAnimation, motion } from "framer-motion"
import { ArrowRight, Instagram, Mail, MapPin, Phone, Send, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

const ContactPage = () => {
    const phoneNumber = "916369051199";
    const defaultMessage = "Hi, I am interested in your services. Can you please provide me with more details?";
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
        show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    }

    const contacts = [
        { icon: Phone, label: "Phone", value: "+91 63690 51199", link: "tel:+916369051199", color: "text-blue-600", bg: "bg-blue-50" },
        { icon: Phone, label: "Phone", value: "+91 75503 40861", link: "tel:+917550340861", color: "text-blue-600", bg: "bg-blue-50" },
        { icon: Mail, label: "Email", value: "milestonebuilderindia@gmail.com", link: "mailto:milestonebuilderindia@gmail.com", color: "text-purple-600", bg: "bg-purple-50" },
        { icon: Mail, label: "Email", value: "milestonesurvey2026@gmail.com", link: "mailto:milestonesurvey2026@gmail.com", color: "text-purple-600", bg: "bg-purple-50" },
        { icon: Instagram, label: "Instagram", value: "@milestonebuilders1", link: "https://www.instagram.com/milestonebuilders1", color: "text-pink-600", bg: "bg-pink-50" },
        { icon: MapPin, label: "Location", value: "3/328 Victoria nagar ittery road puthukulam, reddiyarpatti,Tirunelveli-627007, India", color: "text-orange-600", bg: "bg-orange-50" },
        { icon: MapPin, label: "Location", value: "Chennai, Tamil Nadu, India", color: "text-orange-600", bg: "bg-orange-50" },
    ]

    const handleQuickMessage = () => {
        const { firstName, lastName, email, phone, message } = formData;

        // Validation - don't send if required fields are empty
        if (!firstName.trim() || !phone.trim()) {
            alert("Please fill in at least your Name and Phone number.");
            return;
        }

        const fullName = `${firstName} ${lastName}`.trim();
        const userMessage = message.trim() || "Hi, I am interested in your construction services. Can you please contact me?";

        // Beautifully formatted WhatsApp message
        const whatsappText = encodeURIComponent(
            `*New Inquiry from Website* 

            *Name:* ${fullName || firstName}
            *Phone:* ${phone}
            *Email:* ${email || "Not provided"}
            *Message:* 
            ${userMessage}
                    
            Looking forward to hearing from you!
            From: ${fullName} - ${email}`
        );

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

    return (
        <LazyMotion features={domAnimation}>
            <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-white">
                {/* Hero Section - Mobile First */}
                <section className="pt-16 sm:pt-32 lg:pt-32 px-4 sm:px-6 md:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-6xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-4 mb-4 sm:mb-6 md:mb-8 bg-white/90 backdrop-blur rounded-full border border-orange-200 shadow-sm">
                            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-orange-600" />
                            <span className="text-xs sm:text-sm font-semibold text-orange-700">GET IN TOUCH</span>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="mb-8 sm:mb-10 md:mb-12"
                        >
                            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-tight">
                                <span className="block text-orange-900">Let's Build</span>
                                <span className="block text-amber-600 mt-1 sm:mt-2 md:mt-3 lg:mt-4">
                                    Something Great
                                </span>
                            </h1>
                        </motion.div>

                        <p className="mt-4 sm:mt-6 mb-32 text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto font-medium px-4">
                            Ready to start your next project? We're just one message away.
                        </p>
                    </motion.div>
                </section>

                {/* Contact Grid - Responsive Layout */}
                <section className="px-4 sm:px-6 md:px-8 pb-16 sm:pb-20">
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-50px" }}
                        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12"
                    >
                        {/* Contact Info - Responsive */}
                        <motion.div variants={item} className="space-y-4 sm:space-y-6">
                            <div className="px-2">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">Contact Information</h2>
                                <p className="text-sm sm:text-base text-gray-600 mt-2">
                                    Reach out through any of these channels — we respond within 24 hours.
                                </p>
                            </div>

                            <div className="space-y-3 sm:space-y-4">
                                {contacts.map((contact, i) => {
                                    const Icon = contact.icon
                                    return (
                                        <motion.div
                                            key={i}
                                            whileHover={{ x: 8 }}
                                            className="flex items-center gap-3 sm:gap-4 md:gap-5 p-3 sm:p-4 md:p-5 bg-white rounded-xl sm:rounded-2xl border border-orange-100 shadow-sm sm:shadow-md hover:shadow-lg transition-all mx-2"
                                        >
                                            <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl ${contact.bg} shrink-0`}>
                                                <Icon className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ${contact.color}`} />
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <p className="text-xs sm:text-sm font-semibold text-gray-600 truncate">{contact.label}</p>
                                                {contact.link ? (
                                                    <a
                                                        href={contact.link}
                                                        target={contact.link.startsWith("http") ? "_blank" : undefined}
                                                        rel={contact.link.startsWith("http") ? "noopener noreferrer" : undefined}
                                                        className="font-bold text-blue-700 hover:underline text-sm sm:text-base truncate block"
                                                    >
                                                        {contact.value}
                                                    </a>
                                                ) : (
                                                    <p className="font-bold text-gray-800 text-sm sm:text-base truncate">{contact.value}</p>
                                                )}
                                            </div>
                                        </motion.div>
                                    )
                                })}
                            </div>

                            {/* Map Placeholder - Responsive */}
                            <div className="mt-6 sm:mt-8 relative h-48 sm:h-56 md:h-64 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl border-2 border-orange-200 mx-2">
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center">
                                    <div className="text-center p-4">
                                        <MapPin className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-orange-600 mx-auto mb-2 sm:mb-3" />
                                        <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">Chennai, India</p>
                                        <p className="text-sm sm:text-base text-gray-600">Serving Nationwide</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form - Responsive */}
                        <motion.div variants={item} className="px-2">
                            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl border border-orange-200 sm:border-2 overflow-hidden">
                                <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-4 sm:p-6 text-white">
                                    <div className="flex items-center gap-2 sm:gap-3">
                                        <Send className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                                        <div>
                                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">Send Us a Message</h3>
                                            <p className="text-xs sm:text-sm opacity-90">We'll get back to you quickly</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                        <div>
                                            <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1 sm:mb-2">First Name</label>
                                            <Input
                                                placeholder="First Name"
                                                value={formData.firstName}
                                                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                                className="h-10 sm:h-12 text-sm sm:text-base border-orange-200 focus:border-orange-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1 sm:mb-2">Last Name</label>
                                            <Input
                                                placeholder="Last Name"
                                                value={formData.lastName}
                                                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                                className="h-10 sm:h-12 text-sm sm:text-base border-orange-200 focus:border-orange-500"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1 sm:mb-2">Email</label>
                                        <Input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="Email"
                                            className="h-10 sm:h-12 text-sm sm:text-base border-orange-200 focus:border-orange-500"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1 sm:mb-2">Phone</label>
                                        <Input
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            placeholder="Phone"
                                            className="h-10 sm:h-12 text-sm sm:text-base border-orange-200 focus:border-orange-500"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1 sm:mb-2">Message</label>
                                        <Textarea
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            placeholder="Tell us about your project..."
                                            className="min-h-24 sm:min-h-32 text-sm sm:text-base border-orange-200 focus:border-orange-500 resize-none"
                                        />
                                    </div>

                                    <Button
                                        onClick={handleQuickMessage}
                                        className="w-full h-10 sm:h-12 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-sm sm:text-base md:text-lg rounded-lg sm:rounded-xl shadow-md hover:shadow-xl transition-all"
                                    >
                                        Send Message
                                        <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </section>

                {/* Footer - Responsive */}
              <Footer  />
            </div>
        </LazyMotion>
    )
}

export default ContactPage
