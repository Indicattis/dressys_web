import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
interface TooltipProps {
    description: string;
    children: React.ReactNode;
    className?: string;
}

export default function TooltipComponent({ description, children, className }: TooltipProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const tooltipRef = useRef<HTMLDivElement>(null);

    const toggleTooltip = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className={className + " cursor-pointer"} onClick={toggleTooltip} ref={tooltipRef}>
            {children}
            {isOpen && (
                <motion.div
                    
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ delay: 0.1 }}
                    className="text-xs font-jetbrains text-nowrap opacity-10 tooltip"
                    
                >
                    {description}
                </motion.div>
            )}
        </div>
    );
}
