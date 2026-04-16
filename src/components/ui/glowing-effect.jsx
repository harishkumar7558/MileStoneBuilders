import { cn } from '@/lib/utils';

export const GlowingEffect = ({ blur = 50, saturation = 100, className, children }) => {
    return (
        <div
            className={cn("rounded-full", className)}
            style={{
                filter: `blur(${blur}px) saturate(${saturation}%)`,
            }}
        >
            {children}
        </div>
    );
};
