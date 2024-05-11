
import { FadeIn, ScaleIn } from "@/layout/anim"
import { motion } from "framer-motion"

interface LogoProps {
    color?: "blue" | "pink",
}

export default function LogoComponent({color}: LogoProps) {
    return (
        
        <motion.div 
        className={`relative w-32 h-32 flex items-center justify-center  rounded-full p-3 transition-all
        ${!color && "bg-gray"}
        ${color == "blue" && "bg-gray"}
        ${color == "pink" && "bg-gradient-to-tr from-pink to-sweetPink"}
        `}
        
        variants={FadeIn}
        initial="start"
        animate="visible"
        exit="end"
        >
            <h1 className={`font-hunters text-5xl transition-all
            ${!color && "text-white"}
            ${color == "blue" && "text-white"}
            ${color == "pink" && "text-white"}`}>
                Dressys 
            </h1>
            <div className={`font-poppins text-xs absolute  top-[3.5em] right-3 transition-all
            ${!color && "text-white"}
            ${color == "blue" && "text-pink"}
            ${color == "pink" && "text-blue"}`}>
                Moda
            </div>
        </motion.div>
    )
}