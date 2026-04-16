import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import whatsappLogo from '@/assets/whatsapp.png';

const WhatsApp = ({ openPopup, setOpenPopup }) => {
    const phoneNumber = "916369051199";
    const defaultMessage = "Hi, I came from your website! I need some information about your services.";
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [isFormPopupOpen, setIsFormPopupOpen] = useState(false);
    const [customMessage, setCustomMessage] = useState(defaultMessage);
    const [isMessageCopied, setIsMessageCopied] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: defaultMessage
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsFormPopupOpen(true);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);



    const handleWhatsAppClick = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(customMessage)}`;
        window.open(url, "_blank");
        setIsPopupOpen(false);
    };

    const handleQuickMessage = (message) => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    const copyMessageToClipboard = () => {
        navigator.clipboard.writeText(customMessage);
        setIsMessageCopied(true);
        setTimeout(() => setIsMessageCopied(false), 2000);
    };

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

    const quickMessages = [
        "Hi, I'd like to get a quote for my project",
        "Can you share your portfolio?",
        "I need consultation about my building plans",
        "What are your working hours?",
        "Do you offer free estimates?"
    ];

    return (
        <>
            {/* Floating WhatsApp Button */}
            <div
                className="fixed bottom-6 right-6 z-40 group"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-green-200/20 to-transparent rounded-full transition-all duration-1000 ${isHovering ? 'animate-shimmer' : ''}`} />
                <button
                    onClick={() => setIsPopupOpen(true)}
                    className="relative bg-gradient-to-br from-green-400 via-green-500 to-emerald-600 p-4 rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-110"
                >
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <img src={whatsappLogo} alt="WhatsApp" className="w-10 h-10 relative z-10" />
                </button>
                <div className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-ping" />
                <div className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-white" />
                <div className={`absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full whitespace-nowrap shadow-lg transition-all duration-300 ${isHovering ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}>
                    <span className="text-sm font-semibold">Need help? Chat now!</span>
                    <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-0 h-0 border-8 border-transparent border-l-emerald-600" />
                </div>
            </div>

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

            {/* Chat Popup Dialog */}
            <Dialog open={isPopupOpen} onOpenChange={setIsPopupOpen}>
                <DialogContent className="max-w-md h-[80vh] rounded-2xl p-0 overflow-hidden">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 text-white">
                        <DialogHeader>
                            <DialogTitle className="flex items-center gap-3 text-xl">
                                <img src={whatsappLogo} alt="WA" className="w-10 h-10" />
                                <div>
                                    <p className="text-xl font-semibold">Chat on WhatsApp</p>
                                    <p className="text-sm font-medium">We usually reply within minutes</p>
                                </div>
                            </DialogTitle>
                        </DialogHeader>
                    </div>
                    <div className='h-[70vh] overflow-auto mb-2'>
                        <div className="p-4 space-y-3">
                            {/* <div>
                                <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                                    Quick Messages
                                </h4>
                                <div className="space-y-2">
                                    {quickMessages.map((msg, i) => (
                                        <Button
                                            key={i}
                                            variant="outline"
                                            className="w-full justify-start text-left h-auto py-3 hover:bg-green-50 hover:border-green-400"
                                            onClick={() => handleQuickMessage(msg)}
                                        >
                                            <span className="text-sm">{msg}</span>
                                            <svg className="w-5 h-5 ml-auto text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </Button>
                                    ))}
                                </div>
                            </div> */}
                            <Card className="p-4 bg-gray-50">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="font-semibold">Milestone Builders</p>
                                        <p className="text-sm text-gray-600">+91 {phoneNumber.slice(-10)}</p>
                                    </div>
                                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse" />
                                        Online
                                    </Badge>
                                </div>
                            </Card>
                            <div className="space-y-3">
                                <Label>Custom Message</Label>
                                <div className="relative">
                                    <Textarea
                                        value={customMessage}
                                        onChange={(e) => setCustomMessage(e.target.value)}
                                        rows={4}
                                        placeholder="Type your message here..."
                                    />
                                    {/* <Button
                                        size="sm"
                                        variant="ghost"
                                        className="absolute top-2 right-2"
                                        onClick={copyMessageToClipboard}
                                    >
                                        {isMessageCopied ? "Copied!" : "Copy"}
                                    </Button> */}
                                </div>
                            </div>

                        </div>
                        <div className="p-6 border-t bg-gray-50 flex gap-3">
                            <Button variant="outline" className="flex-1" onClick={() => setIsPopupOpen(false)}>
                                Cancel
                            </Button>
                            <Button className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700" onClick={handleWhatsAppClick}>
                                <img src={whatsappLogo} alt="WA" className="w-5 h-5 mr-2" />
                                Open WhatsApp
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default WhatsApp;