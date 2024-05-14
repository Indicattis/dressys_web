import DefaultButton from "@/layout/button/button"
import { IconDots, IconLogout2, IconPoint, IconSettings } from "@tabler/icons-react"
import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"

interface UserProps {
    online?: boolean
    client_name?: string
    client_mail?: string
}


export default function UserProfile({ client_name,  client_mail, online}: UserProps) {

    const [showOpt, setShowOpt] = useState<boolean>(false)

    return (
        <div className="w-full p-3">
            <div className="flex gap-3 items-center justify-between w-full p-2 rounded-lg hover:bg-gray">
                <div className={`rounded-full w-16 bg-gray border-2  overflow-hidden ${online ? "border-green-400" : "border-blue"}`}>
                    <Image width={200} height={200} alt="user-profile" src={`/gif/Female Avatar.gif`}></Image>
                </div>
                <div className="flex flex-col w-full">
                    <h3>{client_name}</h3>
                    <span className="text-blue text-xs flex items-center">{client_mail}
                    {online && <span className="flex items-center text-xs font-jetbrains"><IconPoint color="rgb(74 222 128)"/>online</span>}
                    </span>
                </div>
                <div onClick={() => setShowOpt(!showOpt)}>
                    <IconDots/>
                </div>
                {showOpt && <UserProfileDropdown onClose={() => setShowOpt(false)}/>}
            </div>
        </div>
    )
}

interface DropdownProps {
    onClose: () => void;
}

function UserProfileDropdown({onClose}: DropdownProps) {


    return (
        <div className="fixed bottom-0 left-0 right-0  h-screen z-50 flex flex-col justify-end ">
            <div className="bg-[#000000a2] h-full" onClick={onClose}>
            </div>
            <motion.div 
            initial={{y: 100}}
            animate={{y: 0}}
            exit={{y: 100}}
            className=" p-3 bg-gray flex justify-center gap-3">
                <DefaultButton rounded="full" wide="lg" variant="darkPink"><IconLogout2></IconLogout2>Sair</DefaultButton>
                <DefaultButton rounded="full" wide="lg" variant="blue"><IconSettings></IconSettings>Configurações</DefaultButton>
            </motion.div>
        </div>
    )
}