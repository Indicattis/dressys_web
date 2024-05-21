'use client'

import { motion } from "framer-motion"
import Messages from "@/data/json/message"
import Message from "./message"
import DefaultButton from "@/layout/button/button"
import { useState } from "react"


interface MessagesProps {
    onClose: () => void;
}

export default function MessagesComponent({onClose}: MessagesProps) {
    const [filter, setFilter] = useState(0)

    return (
        <motion.div
        initial={{  x: 1200 }} 
        animate={{  x: 0 }}
        exit={{  x: 1200 }}
        transition={{ stiffness: 10}}
        className="absolute z-40 top-full right-0 bg-black w-[400px] max-md:w-full shadow-xl shadow-dark rounded-md overflow-hidden">
            <div className="flex gap-3 p-3 bg-black">
                <DefaultButton wide="md" rounded="full" variant={filter === 1 ? "pink" : "blue"} onClick={() => setFilter(1)}> #lidas </DefaultButton>
                <DefaultButton wide="md" rounded="full" variant={filter === 2 ? "pink" : "blue"} onClick={() => setFilter(2)}> #não lidas </DefaultButton>
            </div>
            <div className=" flex flex-col items-start justify-start p-2 gap-3 h-[600px] overflow-y-auto">
                
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
            </div>
            <div className=" w-full flex gap-3 justify-center bg-dark p-3">
                <DefaultButton wide="md" rounded="full" variant="darkBlue"> #limpar </DefaultButton>
                <DefaultButton wide="md" rounded="full" variant="pink" onClick={onClose}> #voltar </DefaultButton>
            </div>
        </motion.div>
    )
}

