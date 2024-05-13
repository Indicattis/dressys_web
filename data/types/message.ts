type MessageDTO = {
    id?: number;
    message_text: string;
    message_opened: boolean;
    message_data: string;
    message_type: string;
}

export default MessageDTO;