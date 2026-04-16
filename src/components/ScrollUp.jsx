'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Smooth scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-8 left-5 z-50"
                >
                    <Button
                        onClick={scrollToTop}
                        size="icon"
                        className={cn(
                            "h-12 w-12 rounded-full shadow-lg",
                            "bg-gradient-to-br from-amber-600 to-amber-600",
                            "hover:from-amber-700 hover:to-amber-700",
                            "text-white border-0",
                            "transition-all duration-300",
                            "hover:shadow-2xl hover:shadow-amber-500/25"
                        )}
                        aria-label="Scroll to top"
                    >
                        <motion.div
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <ArrowUp className="h-6 w-6" />
                        </motion.div>
                    </Button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTopButton;