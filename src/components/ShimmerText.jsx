import { motion } from 'framer-motion';

const ShimmerText = ({ text, className = '' }) => {
    return (
        <motion.div
            className={`relative inline-block ${className}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <span className="relative z-10 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
                {text}
            </span>
        </motion.div>
    );
};

export default ShimmerText;
