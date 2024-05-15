import { UNSPLASH_LINK } from "@/layout/basics";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import DefaultButton from "@/layout/button/button";
import { IconArrowNarrowRight } from "@tabler/icons-react";






export default function UserOptions() {
    
    return (
        <div
        className="relative w-full h-[410px] max-w-[410px]">
            <OptionCase position={1} description="Meus agendamentos" legend="Monitore seus passos">
            </OptionCase>
            <OptionCase position={2} description="Informações da conta" legend="Edite e controle suas informações">
            </OptionCase>
            <OptionCase position={3} description="Minhas Experiencias" legend="Avalie e observe suas atividades">
            </OptionCase>
            <OptionCase position={4} description="Ajuda" legend="Tire suas dúvidas!">
            </OptionCase>
        </div>
    )
}


interface OptionCaseProps {
    position: number;
    description: string;
    legend?: string
}

function OptionCase({ position, description, legend}: OptionCaseProps) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: position/5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
            className={`absolute p-3 transition-all
            ${isOpen ? "z-30 w-full h-full":"z-20 w-52 h-52 scale-100"} 
            ${position == 1 && "left-0 top-0"}
            ${position == 2 && "right-0 top-0"}
            ${position == 3 && "left-0 bottom-0"}
            ${position == 4 && "right-0 bottom-0"}
            `}
            >
            <motion.div 
            className="scale-105 rounded-xl h-full w-full overflow-hidden relative shadow-lg shadow-gray">
                <Image width={1000} height={1000} alt="option" src={UNSPLASH_LINK+"/450x450?"+description}></Image>
                <div className={`transition-all absolute -bottom-1 z-10 w-full  ${isOpen ? "bg-gray h-24" : "bg-[#000000a1] h-[110%]"}`}>
                </div>
                <div className={`absolute z-20 transition-all  ${isOpen ? "text-xl p-5 bottom-5" : "text-normal p-2 bottom-0"}`}>
                    {description}
                </div>
                {isOpen && (
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.1 }}
                    className={`absolute z-20 bottom-0 transition-all text-blue text-base p-5`}>
                        {legend}
                    </motion.div>
                )}
                {isOpen && (
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.1 }}
                    className={`absolute z-30 right-0 transition-all bottom-5 p-3`}>
                        <DefaultButton wide="sm" rounded="md" variant="darkPink"><IconArrowNarrowRight/></DefaultButton>
                    </motion.div>
                )}
            </motion.div>
        </motion.div>
    )
}