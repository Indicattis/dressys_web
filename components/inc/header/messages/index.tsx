

import { motion } from "framer-motion"
import Messages from "@/data/json/message"
import Message from "./message"
import { FadeIn, ScaleIn } from "@/layout/anim"



export default function MessagesComponent() {
    return (
        <motion.div className="absolute z-50 top-full left-0 bg-dark w-full h-screen flex flex-col gap-2 p-2">
            {Messages.map((message) => (
                <motion.div
                variants={ScaleIn}
                initial="start"
                animate="visible"
                exit="end"
                transition={{delay: (message.id && message.id / 10)}}
                key={message.id}>
                    <Message
                        message_data={message.message_data}
                        message_opened={message.message_opened}
                        message_text={message.message_text}
                        message_type={message.message_type}
                    />
                </motion.div>
                ))}
        </motion.div>
    )
}

