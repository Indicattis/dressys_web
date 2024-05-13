
import { motion } from "framer-motion"

interface LogoProps {
    color?: "blue" | "pink",
}

export default function LogoComponent({color}: LogoProps) {

    const variants = {
        open:  {width: "100%", height: "100%"},
        closed: { width: "0", height: "0" }
    }
    return (
        
        <motion.div 
        className={`relative w-32 h-32 flex items-center justify-center bg-gray rounded-2xl p-3 transition-all shadow-lg shadow-gray cursor-pointer overflow-hidden`}
        
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}

        >
            <motion.div 
            variants={variants}
            animate={color == "pink" ? "open" : "closed"}
            className="absolute bg-pink z-10">
            </motion.div>
            <h1 className={`font-hunters text-5xl transition-all z-20
            ${!color && "text-white"}
            ${color == "blue" && "text-white"}
            ${color == "pink" && "text-white"}`}>
                Dressys 
            </h1>
            <div className={`font-poppins text-xs absolute z-20 top-[3.5em] right-3 transition-all
            ${!color && "text-white"}
            ${color == "blue" && "text-pink"}
            ${color == "pink" && "text-blue"}`}>
                Moda
            </div>
        </motion.div>
    )
}