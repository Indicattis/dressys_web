'use client'

import { IconBellRinging, IconSearch, IconUser } from "@tabler/icons-react";
import Image from "next/image";
import { motion } from "framer-motion";
import {ScaleIn, FadeIn} from "@/layout/anim";
import { useState } from "react";

export default function Header() {
    const [search, setSearch] = useState<boolean>(false)
    return (
        <header className=" w-full bg-dark border-b border-gray text-white relative">
            <nav className="flex items-center gap-2 p-3 w-full justify-between relative">
                <motion.div 
                onClick={() => setSearch(!search)}
                className="flex gap-3 items-start"
                variants={ScaleIn}
                initial="start"
                animate="visible"
                exit="end"
                >
                    <div className={`${search ? "text-pink w-full" : ""}`}>
                        <IconSearch/>
                    </div>
                    
                </motion.div>
                <div className="absolute w-64 left-12">
                {!search ? (
                    <motion.h1 
                    variants={FadeIn}
                    initial="start"
                    animate="visible"
                    exit="end"
                    className={`font-hunters text-2xl transition-all `}> Dressys </motion.h1>
                ) : (
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
                )}
                </div>

                <div className="flex gap-2 items-center">
                    <motion.div className=""
                    variants={FadeIn}
                    initial="start"
                    animate="visible"
                    exit="end"
                    transition={{ delay: 0.2 }}>
                        <IconBellRinging width={35} hanging={35}/>
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
            </nav>
        </header>
    );
}
