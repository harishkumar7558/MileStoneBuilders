import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const TypewriterEffect = ({ words, className }) => {
    return (
        <div className={cn("flex flex-wrap gap-2", className)}>
            {words.map((word, idx) => (
                <motion.span
                    key={idx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.2 }}
                    className="text-slate-900 font-bold"
                >
                    {word.text}
                </motion.span>
            ))}
        </div>
    );
};
