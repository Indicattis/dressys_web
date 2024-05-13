import MessageDTO from "@/data/types/message";
import { UNSPLASH_LINK } from "@/layout/basics";
import { IconMail, IconMailOpened } from "@tabler/icons-react";


interface MessageProps {
    message_opened: boolean;
    message_text: string;
    message_data: string
    message_type: string
  }

export default function Message({ message_opened, message_text, message_data, message_type }: MessageProps) {
    return (
        <div className={`w-full flex gap-3 rounded-lg items-center h-14 overflow-hidden bg-gray shadow-md shadow-gray
        ${message_opened ? "  text-blue" : " text-white"}`}>
            {/* <div className=" p-1">
                {!message_opened ? (
                    <IconMail color="rgb(255 255 255)"/>
                ) : (
                    <IconMailOpened color="rgb(146 136 153)"/>
                )}
            </div> */}
            <div>
                <img src={`${UNSPLASH_LINK}/100x100?${message_type}`} alt="message" />
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
        </div>
    )
}