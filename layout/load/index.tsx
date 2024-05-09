import Image from "next/image";
import { motion } from "framer-motion";






export default function LoadComponent() {
    return (
        <section className="_modal_display ">
            <div className="w-full flex justify-center">
                <motion.div 
                className="_modal _load"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ delay: 0 }}
                >
                    <Image width={110} height={110} alt="loading" src="/gif/Female Avatar.gif" />
                </motion.div>
            </div>
        </section>
    )
}