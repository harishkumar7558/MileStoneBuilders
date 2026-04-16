import { motion } from 'framer-motion';

const GradientBlob = ({ className = '', size = 'large' }) => {
    const sizeClasses = {
        small: 'w-32 h-32',
        medium: 'w-64 h-64',
        large: 'w-96 h-96',
    };

    return (
        <motion.div
            className={`absolute ${sizeClasses[size]} rounded-full blur-3xl opacity-30 ${className}`}
            animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
                x: [0, 50, 0],
                y: [0, 30, 0],
            }}
            transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'easeInOut',
            }}
        />
    );
};

export default GradientBlob;
