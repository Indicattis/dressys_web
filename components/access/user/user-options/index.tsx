import { UNSPLASH_LINK } from "@/layout/basics";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import DefaultButton from "@/layout/button/button";
import { IconArrowNarrowRight } from "@tabler/icons-react";






export default function UserOptions() {
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0,
            staggerChildren: 0.1,
            type: "spring",
          }
        }
      };
    return (
        <motion.ul
        variants={container}
        initial="hidden"
        animate="visible" 
        className="flex flex-col gap-3 relative w-full h-[420px]">
            <OptionCase position={1} description="Meus agendamentos">
            </OptionCase>
            <OptionCase position={2} description="Informações da conta">
            </OptionCase>
            <OptionCase position={3} description="Minhas Experiencias">
            </OptionCase>
            <OptionCase position={4} description="Sobre">
            </OptionCase>
        </motion.ul>
    )
}


interface OptionCaseProps {
    position: number;
    description: string
}

function OptionCase({ position, description}: OptionCaseProps) {

    const [isOpen, setIsOpen] = useState(false)

    const item = {  hidden: { scale: 0, rotate: -180 }, visible: {  scale: 1, rotate: 0 }, transition: { 
        type: "spring",
        stiffness: 260,
        damping: 20 } };

    return (
        <motion.li 
        variants={item}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
            className={`absolute p-3 transition-all
            ${isOpen ? "z-30 w-full h-full":"z-20 w-52 h-52"} 
            ${position == 1 && "left-0 top-0"}
            ${position == 2 && "right-0 top-0"}
            ${position == 3 && "left-0 bottom-0"}
            ${position == 4 && "right-0 bottom-0"}
            `}
            >
            <motion.div 
            className=" rounded-xl h-full w-full overflow-hidden relative shadow-lg shadow-gray">
                <Image width={1000} height={1000} alt="option" src={UNSPLASH_LINK+"/450x450?"+description}></Image>
                <div className={`transition-all absolute bottom-0 z-10 w-full  ${isOpen ? "bg-gray h-24" : "bg-[#000000a1] h-full"}`}>
                </div>
                <div className={`absolute z-20 transition-all bottom-5 ${isOpen ? "text-xl p-5" : "text-normal p-2"}`}>
                    {description}
                </div>
                <motion.div
                whileHover={{ y: 0 }}
                className={`absolute z-20 bottom-0 p-2 transition-all text-blue ${isOpen ? "text-base p-5" : "text-xs p-2"}`}>
                    ver mais
                </motion.div>
                {isOpen && (
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{delay: 0.2}}
                    className={`absolute z-30 right-0 transition-all bottom-5 p-3`}>
                        <DefaultButton wide="sm" rounded="md" variant="darkPink"><IconArrowNarrowRight/></DefaultButton>
                    </motion.div>
                )}
            </motion.div>
        </motion.li>
    )
}