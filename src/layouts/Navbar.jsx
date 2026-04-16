

import milestone from "@/assets/milestone1.png"
import whatsappLogo from '@/assets/whatsapp.png'
import { Button } from "@/components/ui/button"
import { Checkbox } from '@/components/ui/checkbox'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Textarea } from '@/components/ui/textarea'
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Compass, Menu, X } from "lucide-react"
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
const links = [
    { label: "Builders", href: "/" },
    { label: "Survey", href: "/survey" },
    { label: "Geo Service", href: "/geo-service" },
    { label: "Contact", href: "/contact" },
    { label: "About Us", href: "/about" },
]

const Navbar = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const phoneNumber = "916369051199";
    const defaultMessage = "Hi, I came from your website! I need some information about your services.";
    const [isFormPopupOpen, setIsFormPopupOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: defaultMessage
    });


    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        setTimeout(() => {
            const message = `Hi, my name is ${formData.name}. ${formData.message}\n\nContact Info:\nPhone: ${formData.phone}`;
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, "_blank");
            setIsFormPopupOpen(false);
        }, 3000);
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    const isActive = (path) => location.pathname === path

    return (
        <div className="fixed inset-x-0 top-4 z-50 flex justify-center pointer-events-none">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={cn(
                    "pointer-events-auto flex w-[95%] max-w-5xl items-center justify-between",
                    "rounded-2xl border border-white/20 bg-white/10",
                    "backdrop-blur-2xl shadow-2xl shadow-black/30",
                    "px-5 py-4 md:px-8 md:py-5"
                )}
            >
                {/* Logo & Brand */}
                <div
                    className="flex items-center gap-3 cursor-pointer"
                    onClick={() => navigate("/")}
                >
                    <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400 via-orange-500 to-rose-500 blur-xl opacity-70 scale-110" />
                        <img
                            src={milestone}
                            alt="Milestone Builders Logo"
                            className="relative h-14 w-14 rounded-full object-cover border-4 border-white/30 shadow-2xl"
                        />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 bg-clip-text text-transparent">
                            MILESTONE
                        </h1>
                        <p className="text-sm font-bold text-amber-600 -mt-1">GROUPS</p>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-1">
                    {links.map((link) => (
                        <button
                            key={link.label}
                            onClick={() => navigate(link.href)}
                            className={cn(
                                "relative px-5 py-2.5 text-sm font-medium transition-all duration-300 rounded-full",
                                isActive(link.href)
                                    ? "text-black font-semibold"
                                    : "text-black/80 hover:text-black"
                            )}
                        >
                            {link.label}
                            {isActive(link.href) && (
                                <motion.span
                                    layoutId="navbar-active"
                                    className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-200/50 to-rose-200/50 -z-10"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                            <span
                                className={cn(
                                    "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-gradient-to-r from-amber-500 to-rose-500 transition-all duration-300",
                                    "group-hover:w-full"
                                )}
                            />
                        </button>
                    ))}

                    <Button
                        size="lg"
                        onClick={() => setIsFormPopupOpen(true)}
                        className="ml-6 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 text-white font-bold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300 border border-white/20"
                    >
                        Get Quote
                    </Button>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md"
                            >
                                <Menu className="h-6 w-6 text-black" />
                            </Button>
                        </SheetTrigger>

                        <SheetContent
                            side="top"
                            className="border-0 bg-gradient-to-b from-black/95 via-slate-900/98 to-slate-950/100 backdrop-blur-3xl pt-8"
                        >
                            <div className="flex items-center justify-between mb-10">
                                <div className="flex items-center gap-3">
                                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-amber-400 via-orange-500 to-rose-500 p-0.5">
                                        <div className="h-full w-full rounded-full bg-white flex items-center justify-center">
                                            <Compass className="h-7 w-7 text-orange-600" />
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold text-white">Milestone</h2>
                                        <p className="text-xs text-amber-400 font-semibold">BUILDERS</p>
                                    </div>
                                </div>
                                <SheetClose asChild>
                                    <Button variant="ghost" size="icon" className="rounded-full">
                                        <X className="h-6 w-6 text-white" />
                                    </Button>
                                </SheetClose>
                            </div>

                            <nav className="flex flex-col gap-3">
                                {links.map((link) => (
                                    <SheetClose key={link.label} asChild>
                                        <button
                                            onClick={() => navigate(link.href)}
                                            className={cn(
                                                "text-left px-6 py-4 rounded-2xl text-lg font-medium transition-all",
                                                isActive(link.href)
                                                    ? "bg-gradient-to-r from-amber-500/20 to-rose-500/20 text-white border border-amber-500/30"
                                                    : "text-white/80 hover:text-white hover:bg-white/5"
                                            )}
                                        >
                                            {link.label}
                                        </button>
                                    </SheetClose>
                                ))}
                                <SheetClose asChild>
                                    <Button
                                        size="lg"
                                        onClick={() => setIsFormPopupOpen(true)}
                                        className="mt-6 w-full rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 text-white font-bold text-lg py-7 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                                    >
                                        Get Quote
                                    </Button>
                                </SheetClose>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </motion.nav>

            {/* Initial Lead Form Dialog */}
            <Dialog open={isFormPopupOpen} onOpenChange={setIsFormPopupOpen}>
                <DialogContent className="max-w-lg h-[80vh] rounded-2xl p-0 overflow-hidden">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 text-white">
                        <DialogHeader>
                            <DialogTitle className="text-2xl font-bold flex items-center gap-3">
                                <div className="bg-white/20 p-3 rounded-full">
                                    <img src={whatsappLogo} alt="WA" className="w-8 h-8" />
                                </div>
                                <div>
                                    <p className="text-xl font-semibold">Let's Start Your Project!</p>
                                    <p className="text-sm font-medium">Share details for personalized consultation</p>
                                </div>
                            </DialogTitle>
                        </DialogHeader>
                    </div>
                    <div className='h-[70vh] overflow-auto mb-2'>
                        {!isSubmitted ? (
                            <form onSubmit={handleFormSubmit} className="p-6 grid grid-cols-2 gap-4 ">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Full Name *</Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleFormChange}
                                        required
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone">Phone Number *</Label>
                                    <Input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={handleFormChange}
                                        required
                                        placeholder="Enter your phone number"
                                    />
                                </div>
                                <div className="space-y-2 col-span-2">
                                    <Label htmlFor="message">Message *</Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleFormChange}
                                        required
                                        rows={3}
                                        placeholder="Tell us about your project..."
                                    />
                                </div>
                                <div className="flex items-center space-x-2 col-span-2">
                                    <Checkbox id="terms" required />
                                    <label htmlFor="terms" className="text-sm text-gray-600">I agree to receive updates and offers from Milestone Builders</label>
                                </div>
                                <Button type="submit" className="w-full col-span-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-full h-12 text-lg font-semibold">
                                    Submit & Connect on WhatsApp
                                </Button>
                            </form>
                        ) : (
                            <div className="p-10 text-center space-y-6">
                                <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                                    <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">Thank You!</h3>
                                    <p className="text-gray-600 mt-2">Your submission has been received.</p>
                                </div>
                                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-5 rounded-xl">
                                    <p className="text-sm font-medium">Redirecting to WhatsApp in a moment...</p>
                                    <div className="flex justify-center gap-2 mt-3">
                                        {[0, 0.1, 0.2].map(delay => (
                                            <div key={delay} className="w-3 h-3 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: `${delay}s` }} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Navbar