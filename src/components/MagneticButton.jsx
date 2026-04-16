import { useRef } from 'react';
import { motion } from 'framer-motion';

const MagneticButton = ({ children, className = '' }) => {
    const ref = useRef(null);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { width, height, left, top } = ref.current.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);

        ref.current.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    };

    const handleMouseLeave = () => {
        ref.current.style.transform = 'translate(0px, 0px)';
    };

    return (
        <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="inline-block"
        >
            <motion.button
                ref={ref}
                className={`transition-transform duration-300 ease-out ${className}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {children}
            </motion.button>
        </div>
    );
};

export default MagneticButton;
