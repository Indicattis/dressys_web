'use client'

import { IconArrowLeft, IconBellRinging, IconSearch, IconUser } from "@tabler/icons-react";
import Image from "next/image";
import { motion } from "framer-motion";
import {ScaleIn, FadeIn} from "@/layout/anim";
import { useEffect, useState } from "react";
import MessagesComponent from "@/components/inc/header/messages";

export default function Header() {
    const [returnButton, setReturn] = useState<boolean>(false)
    const [search, setSearch] = useState<boolean>(false)
    const [messages, showMessages] = useState<boolean>(false)

    useEffect(() => {
        if(search || messages) {
            setReturn(true)
        } else {
            setReturn(false)
        }
    }, [search, messages])

    const returnDefault = () => {
        setReturn(false)
        setSearch(false)
        showMessages(false)
    }

    return (
        <header className=" w-full bg-dark border-b border-gray text-white relative">
            <nav className="flex items-center gap-2 p-3 w-full justify-between relative">
                <motion.div 
                className="flex gap-3 items-start"
                variants={ScaleIn}
                initial="start"
                animate="visible"
                exit="end"
                >
                    {!returnButton ? (
                        <div className={`${search ? "text-pink w-full" : ""}`}
                        onClick={() => setSearch(!search)}>
                            <IconSearch/>
                        </div>
                    ) : (
                        <div className={``} onClick={returnDefault}>
                            <IconArrowLeft/>
                        </div>
                    )}
                    
                </motion.div>
                <div className="absolute w-64 left-12">
                {!returnButton && (
                    <motion.h1 
                    variants={FadeIn}
                    initial="start"
                    animate="visible"
                    exit="end"
                    className={`font-hunters text-2xl transition-all `}> Dressys </motion.h1>
                )}
                {search &&
                    (
                        <motion.input 
                        placeholder="Pesquisar"
                        type="text" 
                        className="_input h-8" 
                        autoFocus
                        variants={FadeIn}
                        initial="start"
                        animate="visible"
                        exit="end"
                        />
                    )
                }
                </div>

                <div className="flex gap-2 items-center">
                    <motion.div className="cursor-pointer"
                    onClick={() => showMessages(!messages)}
                    variants={FadeIn}
                    initial="start"
                    animate="visible"
                    exit="end"
                    transition={{ delay: 0.2 }}>
                        <IconBellRinging width={35} hanging={35} color={messages ? "#F5618B" : "white"}/>
                    </motion.div>
                    <motion.div className="min-w-10"
                    variants={FadeIn}
                    initial="start"
                    animate="visible"
                    exit="end"
                    transition={{ delay: 0.4 }}>
                        <Image alt="profile" width={35} height={35} src={`/gif/Female Avatar.gif`}></Image>
                    </motion.div>
                </div>
                {messages ? (
                    <MessagesComponent/>
                ) : ""}
            </nav>
        </header>
    );
}
