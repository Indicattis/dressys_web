import { UNSPLASH_LINK } from "@/layout/basics";
import { IconEye, IconMail, IconMailOpened, IconTrash } from "@tabler/icons-react";
import Image from "next/image";
import { motion, useDragControls } from "framer-motion";


interface MessageProps {
    message_opened: boolean;
    message_text: string;
    message_data: string
    message_type: string
  }

export default function Message({ message_opened, message_text, message_data, message_type }: MessageProps) {
    return (
        <motion.div
        className={`w-full flex gap-3 h-14 relative bg-gradient-primary rounded-lg overflow-hidden
        ${message_opened ? "  text-blue" : " text-white"}`}>
            <motion.div 
        drag="x"
        dragConstraints={{
            top: 0,
            left: -50,
            right: 50,
            bottom: 0,
          }}
        className="flex items-center bg-gray rounded-lg overflow-hidden z-20 shadow-lg shadow-gray">
                <div>
                    <Image width={100} height={100} src={`${UNSPLASH_LINK}/100x100?${message_type}`} alt="message" />
                </div>
                <div className={`w-full`}>{message_text.slice(0, 35)}...</div>
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
            <div className="absolute text-white p-3 top-1 left-0 z-10"><IconEye></IconEye></div>
            <div className="absolute text-white p-3 top-1 right-0 z-10"><IconTrash></IconTrash></div>
        </motion.div>
    )
}