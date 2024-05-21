
import { motion } from "framer-motion";
import DefaultButton from "../button/button";
import { IconLogout2, IconSettings } from "@tabler/icons-react";



interface ModalProps {
    onClose: (response: any) => void;
    modal_legend?: string;
}

export default function DefaultModal({onClose, modal_legend}: ModalProps) {


    return (
        <div className="_modal_fixed bottom-0 left-0 right-0  h-screen z-50 ">
            <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className="_modal_background h-full" onClick={onClose}>
            </motion.div>
            <motion.div 
            initial={{y: 100}}
            animate={{y: 0}}
            exit={{y: 100}}
            transition={{type: "spring",stiffness: 260, damping: 35,}}
            className="absolute bottom-0 w-full p-3 flex flex-col items-center gap-3 bg-dark"
            >
                <div className="text-white text-xl">{modal_legend ? modal_legend : "Tem certeza que deseja continuar?"}</div>
                <div className="flex flex-col gap-3 p-3">
                    <DefaultButton onClick={() => onClose(2)} rounded="full" wide="lg" variant="pink">Confirmar</DefaultButton>
                    <DefaultButton onClick={() => onClose(1)} rounded="full" wide="lg" variant="darkBlue">Cancelar</DefaultButton>
                </div>
            </motion.div>
        </div>
    )
}