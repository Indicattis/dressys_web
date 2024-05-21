'use client'

import { motion } from "framer-motion"
import Messages from "@/data/json/message"
import Message from "./message"
import DefaultButton from "@/layout/button/button"
import { useState } from "react"



export default function MessagesComponent() {
    const [filter, setFilter] = useState(0)

    return (
        <motion.div
        initial={{ opacity: 0, x: 120 }} 
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 120 }}
        className="absolute z-50 top-full right-0 bg-black w-[400px] h-screen flex flex-col gap-3 p-2 max-md:w-full shadow-lg shadow-gray border-t border-gray">
            <div className="flex gap-3">
                <DefaultButton wide="md" rounded="full" variant={filter === 1 ? "pink" : "blue"} onClick={() => setFilter(1)}> #lidas </DefaultButton>
                <DefaultButton wide="md" rounded="full" variant={filter === 2 ? "pink" : "blue"} onClick={() => setFilter(2)}> #não lidas </DefaultButton>
            </div>
            {Messages.map((message, index) => {
                if (filter === 0 || (filter === 1 && message.message_opened) || (filter === 2 && !message.message_opened)) {
                    return (
                        <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{type: "spring", stiffness: 260, damping: 25,delay: 0 + index/10}}
                        key={index}>
                            <Message
                                message_data={message.message_data}
                                message_opened={message.message_opened}
                                message_text={message.message_text}
                                message_type={message.message_type}
                            />
                        </motion.div>
                    );
                } else {
                    return null;
                }
            })}
        </motion.div>
    )
}

