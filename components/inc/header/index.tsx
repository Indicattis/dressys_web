'use client'

import { IconArrowLeft, IconBellRinging, IconSearch, IconUser } from "@tabler/icons-react";
import Image from "next/image";
import { motion } from "framer-motion";
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
                <div 
                className="flex gap-3 items-start"
                >
                    {!returnButton ? (
                        <div
                        onClick={() => setSearch(!search)}>
                            <IconSearch/>
                        </div>
                    ) : (
                        <div className={``} onClick={returnDefault}>
                            <IconArrowLeft/>
                        </div>
                    )}
                    
                </div>
                <div className="absolute w-64 left-12">
                {!search && (
                    <h1
                    className={`font-hunters text-2xl transition-all `}> 
                    {messages && "Mensagens"}
                    {search && null}
                    {!messages && !search && "Dressys"}
                    
                    </h1>
                )}
                {search &&
                    (
                        <motion.input
                        initial={{width: "0%"}}
                        animate={{width: "100%"}} 
                        exit={{width: "0%"}}
                        transition={{type: "spring", stiffness: 360, damping: 100, duration: 1}}
                        placeholder="Pesquisar"
                        type="text" 
                        className="_input h-8" 
                        autoFocus
                        />
                    )
                }
                </div>

                <div className="flex gap-2 items-center">
                    <div className="cursor-pointer"
                    onClick={() => showMessages(!messages)}>
                        <IconBellRinging width={35} hanging={35} color={messages ? "#F5618B" : "white"}/>
                    </div>
                    <div className="min-w-10">
                        <Image alt="profile" width={35} height={35} src={`/gif/Female Avatar.gif`}></Image>
                    </div>
                </div>
                {messages ? (
                    <MessagesComponent/>
                ) : ""}
            </nav>
        </header>
    );
}
