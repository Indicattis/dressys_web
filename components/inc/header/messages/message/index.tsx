import { UNSPLASH_LINK } from "@/layout/basics";
import { IconEye, IconMail, IconMailOpened, IconTrash } from "@tabler/icons-react";
import Image from "next/image";
import { motion, useDragControls } from "framer-motion";
import { useState } from "react";
import DefaultModal from "@/layout/modals";


interface MessageProps {
    message_opened: boolean;
    message_text: string;
    message_data: string
    message_type: string
  }

export default function Message({ message_opened, message_text, message_data, message_type }: MessageProps) {

    const [exclude, setExclude] = useState<boolean>(false)
    const [open, setOpen] = useState<boolean>(false)


    const onExclude = (response: any) => {
        if (response == 1) {
            setExclude(false)
        } else if( response == 2) {
            console.log(response)
        } else {
            setExclude(false)
        }
    }
    const onOpen = (response: any) => {
        if (response == 1) {
            console.log(response)
        } else if( response == 2) {
            console.log(response)
        } else {
            setOpen(false)
        }
    }

    return (
        <motion.div
        className={`w-full flex h-16 justify-center relative bg-transparent rounded-xl overflow-hidden
        ${message_opened ? "  text-blue" : " text-white"}`}>
            <motion.div 
        drag="x"
        dragElastic={0.05}
        dragConstraints={{
            top: 0,
            left: -100,
            right: 100,
            bottom: 0,
          }}
        className="flex items-center bg-dark rounded overflow-hidden z-20 h-full w-full gap-3">
                <div>
                    <Image width={200} height={200} src={`${UNSPLASH_LINK}/200x200?${message_type}`} alt="message" />
                </div>
                <div className={`w-full text-sm`}>{message_text.slice(0, 35)}...</div>
                <div className="">
                <div className="flex flex-col items-center">
                    {!message_opened ? (
                        <IconMail color="rgb(255 255 255)"/>
                    ) : (
                        <IconMailOpened color="rgb(146 136 153)"/>
                    )}</div>
                    <div className="text-xs text-nowrap px-2">ha {message_data.slice(0, 6)}...</div>
                </div>
            </motion.div>
            <div className=" bg-gradient-primary top-[2px] h-[95%] w-[98%] absolute rounded-xl">
                <div onClick={() => setOpen(true)} className="absolute text-white flex justify-center items-center w-[100px] h-full  left-0 z-10"><IconEye width={35} height={35}></IconEye></div>
                <div onClick={() => setExclude(true)} className="absolute text-white flex justify-center items-center w-[100px] h-full  right-0 z-10"><IconTrash width={35} height={35}></IconTrash></div>
            </div>
            {exclude && (
                <DefaultModal onClose={onExclude}></DefaultModal>
            )}
            {open && (
                <DefaultModal onClose={onOpen}></DefaultModal>
            )}
        </motion.div>
    )
}