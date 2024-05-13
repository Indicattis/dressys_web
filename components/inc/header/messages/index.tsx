'use client'

import { motion } from "framer-motion"
import Messages from "@/data/json/message"
import Message from "./message"
import { FadeIn, ScaleIn } from "@/layout/anim"
import DefaultButton from "@/layout/button/button"
import { useState } from "react"



export default function MessagesComponent() {
    const [filter, setFilter] = useState(0)

    return (
        <motion.div className="absolute z-50 top-full left-0 bg-dark w-full h-screen flex flex-col gap-2 p-2">
            <div className="flex gap-3">
                <DefaultButton wide="md" rounded="full" variant={filter === 1 ? "pink" : "blue"} onClick={() => setFilter(1)}> #lidas </DefaultButton>
                <DefaultButton wide="md" rounded="full" variant={filter === 2 ? "pink" : "blue"} onClick={() => setFilter(2)}> #não lidas </DefaultButton>
            </div>
            {Messages.map((message) => {
                if (filter === 0 || (filter === 1 && message.message_opened) || (filter === 2 && !message.message_opened)) {
                    return (
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
                    );
                } else {
                    // If message does not meet filter criteria, return null
                    return null;
                }
            })}
        </motion.div>
    )
}

