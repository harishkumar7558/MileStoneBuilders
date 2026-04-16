import { motion } from 'framer-motion';

export const FloatingElements = () => {
    const elements = [
        { size: 60, delay: 0, duration: 20, x: '10%', y: '20%' },
        { size: 80, delay: 2, duration: 25, x: '80%', y: '30%' },
        { size: 40, delay: 4, duration: 18, x: '60%', y: '70%' },
        { size: 100, delay: 1, duration: 30, x: '20%', y: '80%' },
        { size: 50, delay: 3, duration: 22, x: '90%', y: '60%' },
    ];

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {elements.map((el, idx) => (
                <motion.div
                    key={idx}
                    className="absolute rounded-full bg-gradient-to-r from-amber-400/10 to-orange-500/10 blur-xl"
                    style={{
                        width: el.size,
                        height: el.size,
                        left: el.x,
                        top: el.y,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, 20, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: el.duration,
                        delay: el.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
};
