import { motion } from 'framer-motion';

const FloatingCard = ({ children, delay = 0, className = '' }) => {
    return (
        <motion.div
            className={className}
            initial={{ y: 0 }}
            animate={{
                y: [0, -10, 0],
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: delay,
            }}
            whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
            }}
        >
            {children}
        </motion.div>
    );
};

export default FloatingCard;
