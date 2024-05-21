import DefaultButton from "@/layout/button/button";
import PostComponent from "./post";
import { motion } from "framer-motion";





interface FeedProps {
    data: EstablishmentDTO[]
}


export default function FeedComponent({data}: FeedProps) {
    return (
        <section className="w-full flex flex-col gap-3">
            <div className="flex  gap-3 p-3 overflow-x-scroll">
                <div>
                    <DefaultButton wide="md" rounded="full" variant="pink">#Em alta</DefaultButton>
                </div>
                <div>
                    <DefaultButton wide="md" rounded="full" variant="blue">#Novos</DefaultButton>
                </div>
                <div>
                    <DefaultButton wide="md" rounded="full" variant="blue">#Pra você</DefaultButton>
                </div>
                <div>
                    <DefaultButton wide="md" rounded="full" variant="blue">#teste</DefaultButton>
                </div>
                <div>
                    <DefaultButton wide="md" rounded="full" variant="blue">#teste</DefaultButton>
                </div>
            </div>
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