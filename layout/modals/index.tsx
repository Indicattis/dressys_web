
import { motion } from "framer-motion";
import DefaultButton from "../button/button";
import { IconLogout2, IconSettings } from "@tabler/icons-react";



interface ModalProps {
    onClose: (response: any) => void;
}

export default function DefaultModal({onClose}: ModalProps) {


    return (
        <div className="_modal_fixed bottom-0 left-0 right-0  h-screen z-50 flex flex-col ">
            <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className="bg-[#000000a2] h-full" onClick={onClose}>
            </motion.div>
            <motion.div 
            initial={{y: 100}}
            animate={{y: 0}}
            exit={{y: 100}}
            transition={{type: "spring",stiffness: 260, damping: 35,}}
            className=" w-full p-3 flex flex-col items-center gap-3 bg-gray"
            >
                <div className="text-white text-xl">Tem certeza que deseja continuar?</div>
                <div className="flex flex-col gap-3 p-3">
                    <DefaultButton onClick={() => onClose(2)} rounded="full" wide="lg" variant="pink">Confirmar</DefaultButton>
                    <DefaultButton onClick={() => onClose(1)} rounded="full" wide="lg" variant="darkBlue">Cancelar</DefaultButton>
                </div>
            </motion.div>
        </div>
    )
}