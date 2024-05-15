import DefaultButton from "@/layout/button/button"
import { IconDots, IconLogout2, IconPoint, IconSettings } from "@tabler/icons-react"
import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"
import DefaultModal from "@/layout/modals"

interface UserProps {
    online?: boolean
    client_name?: string
    client_mail?: string
}


export default function UserProfile({ client_name,  client_mail, online}: UserProps) {

    const [showOpt, setShowOpt] = useState<boolean>(false)
    const [logout, setLogout] = useState<boolean>(false)

    const action = (response:any) => {
        if(response == 1) { //CANCELA OPERAÇÃO DO MODAL
            setLogout(false)
            setShowOpt(false)
        } else if (response == 2) { //CONFIRMA A OPERAÇÃO DO MODAL
            console.log(response)
        } else if (response == 3){ //ABRE MODAL DE LOGOUT
            setLogout(true)
        } else if (response == 4){ //REDIRECIONAMENTO PARA CONFIGURAÇÕES DA CONTA
            console.log(response)
        } else { // RETURN
            setLogout(false)
            setShowOpt(false)
        }
    }

    return (
        <div className="w-full p-3 relative">
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
                <div className="relative" onClick={() => setShowOpt(!showOpt)}>
                    <IconDots/>
                    {showOpt && <UserProfileDropdown onClose={action}/>}
                </div>
            </div>
                    {logout && (<DefaultModal onClose={action}/>)}
        </div>
    )
}

interface DropdownProps {
    onClose: (response: any) => void;
}

function UserProfileDropdown({onClose}: DropdownProps) {


    return (
        <motion.div 
        initial={{y: -10, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        className="absolute top-full right-0 bg-dark p-3 rounded-xl z-40 flex flex-col gap-3 shadow-md shadow-gray">
            <DefaultButton variant="blue" wide="md" rounded="full" onClick={() => onClose(4)}>Configurações</DefaultButton >
            <DefaultButton variant="darkPink" rounded="full" wide="md" onClick={() => onClose(3)}>Logout</DefaultButton >
        </motion.div>
    )
}