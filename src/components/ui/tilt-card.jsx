import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const TiltCard = ({ children, className }) => {
    return (
        <motion.div
            className={cn("relative", className)}
            whileHover={{
                scale: 1.05,
                rotateX: 5,
                rotateY: 5,
            }}
            transition={{ duration: 0.3 }}
            style={{
                transformStyle: 'preserve-3d',
                perspective: 1000,
            }}
        >
            {children}
        </motion.div>
    );
};
