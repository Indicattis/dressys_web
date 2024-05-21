import PostComponent from "./post";
import { motion } from "framer-motion";





interface FeedProps {
    data: EstablishmentDTO[]
}


export default function FeedComponent({data}: FeedProps) {
    return (
        <section className="w-full flex flex-col gap-3">
            {data.map((establishment, index) => {
                return (
                    <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{type: "spring", stiffness: 260, damping: 25,delay: 0 + index/10}}
                    key={index}>
                        <PostComponent establishment={establishment} />
                    </motion.div>
                );
            })}
        </section>
    )
}